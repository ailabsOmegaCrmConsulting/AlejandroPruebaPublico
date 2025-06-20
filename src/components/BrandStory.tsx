import React from 'react';
import { Clock, Award, MapPin, Users } from 'lucide-react';

const BrandStory = () => {
  const milestones = [
    { year: '1890', event: 'Fundación de Mahou' },
    { year: '1957', event: 'Primera fábrica moderna' },
    { year: '1998', event: 'Fusión con San Miguel' },
    { year: '2023', event: 'Líder del mercado español' }
  ];

  const stats = [
    { icon: Clock, label: 'Años de Historia', value: '133+' },
    { icon: Award, label: 'Premios Internacionales', value: '50+' },
    { icon: MapPin, label: 'Países de Exportación', value: '70+' },
    { icon: Users, label: 'Empleados', value: '3,500+' }
  ];

  return (
    <section id="story" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Más de un Siglo de 
              <span className="text-red-800 block">Tradición Cervecera</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Desde 1890, Mahou ha sido sinónimo de calidad y tradición en España. 
              Comenzamos como una pequeña cervecería familiar y hemos crecido hasta 
              convertirnos en la cerveza más querida del país, sin perder nunca 
              nuestros valores fundacionales.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nuestra pasión por la excelencia nos ha llevado a perfeccionar cada 
              proceso, desde la selección de los mejores ingredientes hasta el 
              último sorbo que llega a tu mesa.
            </p>

            {/* Timeline */}
            <div className="space-y-4 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Momentos Clave</h3>
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-yellow-500 text-black font-bold text-sm px-3 py-1 rounded-full min-w-max">
                    {milestone.year}
                  </div>
                  <div className="text-gray-600">{milestone.event}</div>
                </div>
              ))}
            </div>

            <button className="bg-red-800 hover:bg-red-900 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300">
              Conoce Más Sobre Nosotros
            </button>
          </div>

          {/* Image and Stats */}
          <div className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Mahou brewery heritage"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                  <stat.icon className="h-8 w-8 text-red-800 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;