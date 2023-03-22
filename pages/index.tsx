import ProductCard from '@/components/ProductCard'
import { createClient, Entry } from 'contentful'
import { Product } from '@/types';

type ProductsProps = {
  products: Product[];
};

const spaceId :string = `${process.env.SPACE_ID}`;
const constDelAt: string = `${process.env.CDA_AT}`;

export const getStaticProps = async() => {
  const client = createClient({
    space: spaceId,
    accessToken: constDelAt,
  })

  const res = await client.getEntries<Entry<Product>>({
    content_type: 'product'
  })

return {
    props: {
      products: res.items,
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
