import { createClient, Entry } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import { Product } from '@/types';
import { Key } from 'react';


const spaceId :string = `${process.env.SPACE_ID}`;
const constDelAt: string = `${process.env.CDA_AT}`;

const client = createClient({
  space: spaceId,
  accessToken: constDelAt,
})


export const getStaticPaths = async () => {
  const res = await client.getEntries<Product>({
    content_type: 'product',
  })

  const paths = res.items.map((item: Entry<any>) => ({
    params: {
      slug: item.fields.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: any) => {
  const { items } = await client.getEntries({
    content_type: 'product',
    'fields.slug': params.slug,
  })

  const response = await fetch(`${process.env.API_BASEURL}/api/stock/${params.slug}`);
  const stockData = await response.json();
  const stock = stockData?.stock;

  return {
    props: {
      product: items[0],
      stock: stock,
    },
  }
}

export default function ProductDetails({ product, stock }: any) {
  const { featuredImage, title, specifications, description, price } = product.fields;
 
    return (
      <div className="product-page">
         <Image 
          src={`http:${featuredImage.fields.file.url}`}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height} alt={''} 
          priority={true} /><div className="product-page__price">{ price }</div>
          <h2>{ title }</h2>
          <h5>Stock: { stock }</h5>
          <div className="product-page__spec-containter">
          { specifications.map( (spec: any, index: Key | null | undefined)=> (
            
              <div key={index} className="product-page__spec-containter__spec">{ spec }</div>
            
          ))}
       
          </div>
          <div className="description">
            <div>{documentToReactComponents(description)}</div>
  
          </div>
    
      </div>

    )
  }
