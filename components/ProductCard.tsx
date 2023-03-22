import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({ product }: any) => {
  const { title, price, slug, thumbnail } = product.fields;

  return (
    <div className="product-card">
      <div className="featured">
        <Image 
          src={`http:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height} alt={''} 
          priority={true} />
      </div>
      <div className="content">
        <div className="info">
          <h4>{ title }</h4>
        <div className="product-card__price">{ price }
    
           <Link href={`/products/${slug}`}><button>more info
    <svg width="35" height="35" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="#1032cf"></path>
    </svg>
</button>
            </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;