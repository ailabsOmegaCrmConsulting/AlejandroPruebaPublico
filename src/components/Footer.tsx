import React from 'react';
import { Wine, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const quickLinks = [
    { name: 'Nuestras Cervezas', href: '#products' },
    { name: 'Historia', href: '#story' },
    { name: 'Experiencias', href: '#experiences' },
    { name: 'Sostenibilidad', href: '#' },
    { name: 'Prensa', href: '#' },
    { name: 'Trabaja con Nosotros', href: '#' }
  ];

  const legalLinks = [
    { name: 'Política de Privacidad', href: '#' },
    { name: 'Términos de Uso', href: '#' },
    { name: 'Cookies', href: '#' },
    { name: 'Consumo Responsable', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Wine className="h-10 w-10 text-yellow-400" />
              <span className="text-3xl font-bold">MAHOU</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              La cerveza más española desde 1890. Tradición, calidad y sabor auténtico 
              en cada sorbo. Disfruta con moderación y responsabilidad.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">Paseo de la Castellana, 116, Madrid</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">+34 91 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">info@mahou.es</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-yellow-500 p-3 rounded-full transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-300 group-hover:text-black" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Suscríbete para recibir novedades y ofertas exclusivas.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
              />
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © 2024 Mahou S.A. Todos los derechos reservados.
            </div>
          </div>

          {/* Responsible Consumption */}
          <div className="mt-8 p-4 bg-gray-800 rounded-lg">
            <p className="text-sm text-gray-300 text-center">
              <strong>Disfruta con Moderación.</strong> El abuso del alcohol es perjudicial para la salud. 
              Prohibida la venta a menores de 18 años.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;