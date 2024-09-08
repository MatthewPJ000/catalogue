import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

// Define the structure of the Product object
interface ProductImage {
  url: string;
}

interface ProductProps {
  product: {
    product_images: ProductImage[];
    product_price: number;
    product_slug: string;
    product_name: string;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <article className="product ">
      <div className="img-container">
      <Image
        src={product?.product_images[0]?.url || '/images/products/product-1.jpeg'}
        alt="single product"
        width={300} // Set the desired width        
        className="gap-5" // Optional: for maintaining aspect ratio
      />

        <div className="price-top">
          <h6>{`$${product?.product_price.toFixed(2)}`}</h6>
          <p>per item</p> {/* Adjusted text for clarity */}
        </div>

        <Link className="btn-primary product-link" href={`/products/${product?.product_slug}`}>
          Feature
        </Link>
      </div>

      <p className="product-info">
        {product?.product_name}
      </p>
    </article>
  );
}

export default Product;