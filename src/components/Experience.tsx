import React from 'react';
import { Calendar, MapPin, Users, Utensils } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      icon: Utensils,
      title: 'Maridajes Perfectos',
      description: 'Descubre las mejores combinaciones de nuestras cervezas con la gastronomía española.',
      image: 'https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Users,
      title: 'Visitas a la Fábrica',
      description: 'Conoce de primera mano nuestro proceso de elaboración en tours guiados exclusivos.',
      image: 'https://images.pexels.com/photos/5473966/pexels-photo-5473966.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Calendar,
      title: 'Eventos Especiales',
      description: 'Participa en nuestros eventos temáticos y degustaciones con maestros cerveceros.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="experiences" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vive la <span className="text-yellow-400">Experiencia Mahou</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Te invitamos a descubrir el mundo de Mahou a través de experiencias únicas 
            que despiertan todos tus sentidos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className="group bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <experience.icon className="h-8 w-8 text-yellow-400" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{experience.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{experience.description}</p>
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                  Reservar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-red-800 rounded-2xl p-8 md:p-12">
            <MapPin className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Visítanos en Madrid</h3>
            <p className="text-xl text-gray-200 mb-6">
              Nuestra fábrica principal te espera en el corazón de España
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                Reservar Visita
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                Ver Ubicación
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;