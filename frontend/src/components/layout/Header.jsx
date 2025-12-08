import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { companyInfo, services } from '../../data/mock';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/diensten', label: 'Diensten', hasDropdown: true },
    { path: '/offerte', label: 'Offerte Aanvragen' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div className="bg-slate-900 text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="text-cyan-400 font-medium">{companyInfo.openingHours}</span>
            <span className="text-slate-400">|</span>
            <span>Actief in: {companyInfo.regions.join(' • ')}</span>
          </div>
          <a
            href={`tel:${companyInfo.phone}`}
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-semibold">{companyInfo.phone}</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={companyInfo.logo}
              alt={companyInfo.name}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <DropdownMenu key={link.path}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-slate-700 hover:text-cyan-600 font-medium transition-colors outline-none">
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-64 bg-white shadow-xl border-0 p-2">
                    {services.map((service) => (
                      <DropdownMenuItem key={service.id} asChild>
                        <Link
                          to={`/diensten/${service.id}`}
                          className="block px-4 py-3 rounded-lg hover:bg-cyan-50 transition-colors cursor-pointer"
                        >
                          <span className="font-medium text-slate-800">{service.title}</span>
                          <p className="text-sm text-slate-500 mt-1">{service.shortDescription}</p>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link font-medium ${
                    isActive(link.path)
                      ? 'text-cyan-600'
                      : 'text-slate-700 hover:text-cyan-600'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-2 text-slate-700">
              <Phone className="w-5 h-5 text-cyan-500" />
              <span className="font-semibold">{companyInfo.phone}</span>
            </a>
            <Link to="/offerte">
              <Button className="btn-primary px-6 py-2.5 rounded-full">
                Gratis Offerte
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t animate-fade-in">
            <div className="container-custom py-4">
              <div className="flex flex-col gap-2">
                <Link
                  to="/"
                  className={`px-4 py-3 rounded-lg font-medium ${
                    isActive('/') ? 'bg-cyan-50 text-cyan-600' : 'text-slate-700'
                  }`}
                >
                  Home
                </Link>
                
                <div className="px-4 py-2">
                  <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Diensten</span>
                </div>
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={`/diensten/${service.id}`}
                    className={`px-6 py-2 rounded-lg text-sm ${
                      isActive(`/diensten/${service.id}`)
                        ? 'bg-cyan-50 text-cyan-600'
                        : 'text-slate-600'
                    }`}
                  >
                    {service.title}
                  </Link>
                ))}

                <Link
                  to="/offerte"
                  className={`px-4 py-3 rounded-lg font-medium ${
                    isActive('/offerte') ? 'bg-cyan-50 text-cyan-600' : 'text-slate-700'
                  }`}
                >
                  Offerte Aanvragen
                </Link>
                <Link
                  to="/contact"
                  className={`px-4 py-3 rounded-lg font-medium ${
                    isActive('/contact') ? 'bg-cyan-50 text-cyan-600' : 'text-slate-700'
                  }`}
                >
                  Contact
                </Link>

                <div className="pt-4 mt-2 border-t">
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="flex items-center justify-center gap-2 bg-cyan-500 text-slate-900 font-semibold py-3 rounded-full"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Bel Direct: {companyInfo.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
