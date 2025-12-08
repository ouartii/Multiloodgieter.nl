import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { companyInfo, services } from '../../data/mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <img
              src={companyInfo.logo}
              alt={companyInfo.name}
              className="h-14 w-auto mb-6"
            />
            <p className="text-slate-400 mb-6 leading-relaxed">
              Uw betrouwbare partner voor al uw loodgieterswerkzaamheden in de Randstad. 
              Met meer dan 10 jaar ervaring staan wij 24/7 voor u klaar.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Onze Diensten</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/diensten/${service.id}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Snelle Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/offerte" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Offerte Aanvragen
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Veelgestelde Vragen
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-start gap-3 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 text-cyan-500" />
                  <span>{companyInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-3 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 text-cyan-500" />
                  <span>{companyInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 mt-0.5 text-cyan-500" />
                <span>{companyInfo.regions.join(', ')}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Clock className="w-5 h-5 mt-0.5 text-cyan-500" />
                <span>{companyInfo.openingHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} {companyInfo.name}. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
                Privacybeleid
              </a>
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
                Algemene Voorwaarden
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
