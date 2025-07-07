
import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import { CartProvider } from '../contexts/CartContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <Hero />
            <Categories />
            <FeaturedProducts />
            <Newsletter />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
};

export default Index;
