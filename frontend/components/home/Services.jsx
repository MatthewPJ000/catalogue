/**
 * @name Hotel Room Booking System
 * @author Kir Kalarash
 * @description Hotel Room Booking and Management System Software ~ Developed By Kir Kalarash
 * @copyright ©2023 ― Kir Kalarash. All rights reserved.
 * @version v0.0.1
 *
 */

import React from 'react';
import Header from './Header';
import FeaturedProducts from './Products';
import WhyBuy from './Why-Buy';
import Comments from './Comments';

function Services() {

  const featuredProducts = [
    {
      product_images: [{ url: '/images/products/product-1.jpeg' }],
      product_price: 199.99,
      product_slug: 'product-1',
      product_name: 'Product One',
    },
    {
      product_images: [{ url: '/images/products/product-2.jpeg' }],
      product_price: 299.99,
      product_slug: 'product-2',
      product_name: 'Product Two',
    },
    {
      product_images: [{ url: '/images/products/product-3.jpeg' }],
      product_price: 399.99,
      product_slug: 'product-3',
      product_name: 'Product Three',
    },
  ];


  return (
    <section className='services'>
      <Header title='services' />

      <FeaturedProducts title='Popular Products' featuredProducts={featuredProducts} />
      <WhyBuy />
      <Comments />
    </section>
    
  );
}

export default Services;
