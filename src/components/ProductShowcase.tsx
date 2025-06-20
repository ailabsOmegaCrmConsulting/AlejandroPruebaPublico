import React from 'react';
import { Star, Award } from 'lucide-react';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: 'Mahou Cinco Estrellas',
      description: 'Nuestra cerveza insignia, con el sabor tradicional que nos caracteriza.',
      image: 'https://images.pexels.com/photos/5947067/pexels-photo-5947067.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      alcohol: '5.5%',
      type: 'Lager',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Mahou Negra',
      description: 'Cerveza tostada con un sabor intenso y un color oscuro inconfundible.',
      image: 'https://images.pexels.com/photos/5947032/pexels-photo-5947032.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      alcohol: '5.5%',
      type: 'Tostada',
      rating: 4.7
    },
    {
      id: 3,
      name: 'Mahou Sin Filtrar',
      description: 'El sabor más puro y auténtico, directa de nuestras cubas.',
      image: 'https://images.pexels.com/photos/5947726/pexels-photo-5947726.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      alcohol: '5.5%',
      type: 'Sin Filtrar',
      rating: 4.9
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestras <span className="text-red-800">Cervezas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre la gama completa de cervezas Mahou, cada una con su personalidad única 
            pero siempre con la calidad que nos caracteriza desde hace más de un siglo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {product.alcohol}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">
                    {product.type}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                
                <button className="w-full bg-red-800 hover:bg-red-900 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                  Más Información
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Ver Toda la Gama
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;