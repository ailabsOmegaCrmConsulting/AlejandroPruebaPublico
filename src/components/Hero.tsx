import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/5947080/pexels-photo-5947080.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          La Cerveza
          <span className="block text-yellow-400">Más Española</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Desde 1890, elaboramos la cerveza que une a España con su tradición, 
          sabor auténtico y calidad inigualable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Descubre Nuestras Cervezas
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-full transition-all duration-300">
            Nuestra Historia
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </section>
  );
};

export default Hero;