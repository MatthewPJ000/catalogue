import Head from 'next/head';
import React, { ReactNode } from 'react';
import Footers from './footers';
import Navbar from './navbar';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Beach Resort'}</title>
        <meta name="description" content="Beach Resort ― Hotel Room Booking System" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main style={{ overflow: 'auto' }}>
        {children}
      </main>
      <Footers />
    </>
  );
};

export default MainLayout;