import ProductCard from '@/components/ProductCard'
import clientPromise from "@/Database/MongoConnect";
import { createClient, Entry } from 'contentful'
import { Product } from '@/types';


type Watch = {
  casio: String,
  stock: Number,
}

type ProductsProps = {
  products: Product[];
};


const spaceId :string = `${process.env.SPACE_ID}`;
const constDelAt: string = `${process.env.CDA_AT}`;

export async function getStaticProps() {

  const contentfulClient = createClient({
    space: spaceId,
    accessToken: constDelAt,
  });

  const { items } = await contentfulClient.getEntries<Entry<Product>>({
    content_type: 'product'
  });


  return {
    props: {
      products: items,
    },
  }
}

const Products = ({ products }: ProductsProps) => {
  return (
    
    <div className="product-list">
      {products.map( product => (
         <ProductCard key={product.sys.id} product={product} />
      ))}
      <style jsx>{
        `
        .product-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-gap: 0px;
            justify-items: center;
            justify-content: space-evenly;
            justify-items: center;
            align-content: space-evenly;
            align-items: end;
            margin: 0 auto;
            padding: 0 20px;
          }
        `
      }</style>

    </div>

  )
}

export default Products;


