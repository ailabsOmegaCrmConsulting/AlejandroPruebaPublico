import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import BrandStory from './components/BrandStory';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductShowcase />
      <BrandStory />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;