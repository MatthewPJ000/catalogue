import React from "react";
import Link from 'next/link';
import Product from "../shared/Product";

interface FeaturedProductsProps {
  featuredProducts: Array<{
    product_images: { url: string }[];
    product_price: number;
    product_slug: string;
    product_name: string;
  }>;
  title: string; // Add title prop
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ featuredProducts, title }) => {
  return (
    <section className="featured-products">
      <div className="products-header row-center-between">
        <h4 className='section-title'>{title}</h4>
        <Link href="https://www.industrialtrading.net/categories">
          View all products
        </Link>
      </div>

      <div className="flex featured-products-center">
        {featuredProducts?.map((product) => (
          <Product key={product.product_slug} product={product} />
        ))}
     
      </div>
    </section>
  );
}

export default FeaturedProducts;