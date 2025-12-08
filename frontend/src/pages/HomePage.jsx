import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Star, Clock, Shield, Award, MapPin, ThumbsUp, Euro, CheckCircle, Wrench, Droplets, Flame, Bath, UtensilsCrossed, Home } from 'lucide-react';
import { companyInfo, services, testimonials, uspPoints, faqItems } from '../data/mock';
import { Button } from '../components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const iconMap = {
  Clock,
  Award,
  Shield,
  MapPin,
  Euro,
  ThumbsUp,
};

// Featured services data for the homepage
const featuredServices = [
  {
    id: 'loodgieter-werkzaamheden',
    title: 'Loodgieter Werkzaamheden',
    description: 'Van lekkages tot verstoppingen – onze vakmannen lossen elk sanitair probleem snel en vakkundig op. 24/7 beschikbaar voor spoedgevallen.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1635221798248-8a3452ad07cd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwbHVtYmVyfGVufDB8fHx8MTc2NTE4Njg3Mnww&ixlib=rb-4.1.0&q=85',
    accent: 'from-cyan-500 to-teal-500',
  },
  {
    id: 'waterleiding-afvoer',
    title: 'Waterleiding & Afvoer',
    description: 'Lekkage opsporing, leidingwerk reparatie en afvoer ontstopping. Met moderne apparatuur detecteren en repareren wij elk probleem.',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1604118600242-e7a6d23ec3a9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBwbHVtYmVyfGVufDB8fHx8MTc2NTE4Njg3Mnww&ixlib=rb-4.1.0&q=85',
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'cv-installatie',
    title: 'CV Installaties',
    description: 'Nieuwe CV-ketel, vloerverwarming of radiatoren nodig? Wij installeren energiezuinige verwarmingssystemen met uitgebreide garantie.',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1751486289950-5c4898a4c773?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxoZWF0aW5nJTIwcGlwZXN8ZW58MHx8fHwxNzY1MTg2ODgxfDA&ixlib=rb-4.1.0&q=85',
    accent: 'from-orange-500 to-amber-500',
  },
  {
    id: 'badkamer-renovatie',
    title: 'Badkamer Renovatie',
    description: 'Droomt u van een nieuwe badkamer? Van ontwerp tot oplevering verzorgen wij uw complete badkamerrenovatie met oog voor detail.',
    icon: Bath,
    image: 'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbXxlbnwwfHx8fDE3NjUxODY4NzZ8MA&ixlib=rb-4.1.0&q=85',
    accent: 'from-teal-500 to-emerald-500',
  },
  {
    id: 'keuken-installatie',
    title: 'Keuken Installatie',
    description: 'Complete keukeninstallatie inclusief waterleiding, afvoer en gasaansluiting. Alles conform de hoogste veiligheidsnormen.',
    icon: UtensilsCrossed,
    image: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVufGVufDB8fHx8MTc2NTEyNDc5NXww&ixlib=rb-4.1.0&q=85',
    accent: 'from-slate-600 to-slate-800',
  },
  {
    id: 'woning-renovatie',
    title: 'Woning Renovatie',
    description: 'Complete woningrenovatie met focus op leidingwerk. Nieuwe waterleidingen, afvoeren en sanitaire installaties voor heel uw huis.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBiYXRocm9vbXxlbnwwfHx8fDE3NjUxODY4NzZ8MA&ixlib=rb-4.1.0&q=85',
    accent: 'from-indigo-500 to-purple-500',
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center hero-pattern pt-32 pb-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
                <Clock className="w-4 h-4 text-cyan-600" />
                <span className="text-sm font-medium text-cyan-700">24/7 Spoedservice beschikbaar</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Uw Betrouwbare{' '}
                <span className="text-gradient">Loodgieter</span>{' '}
                in de Randstad
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                Multi Loodgieter staat al meer dan 10 jaar garant voor vakkundig loodgieterswerk. 
                Van spoedreparaties tot complete renovaties – wij zijn er voor u, dag en nacht.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/offerte">
                  <Button className="btn-primary px-8 py-4 rounded-full text-lg w-full sm:w-auto">
                    Gratis Offerte Aanvragen
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href={`tel:${companyInfo.phone}`}>
                  <Button variant="outline" className="btn-secondary px-8 py-4 rounded-full text-lg w-full sm:w-auto">
                    <Phone className="w-5 h-5 mr-2" />
                    Bel Direct
                  </Button>
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">4.9/5 van 200+ reviews</span>
                </div>
                <div className="h-6 w-px bg-slate-300 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm text-slate-600">Tot 5 jaar garantie</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-slide-in-right hidden lg:block">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1635221798248-8a3452ad07cd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwbHVtYmVyfGVufDB8fHx8MTc2NTE4Njg3Mnww&ixlib=rb-4.1.0&q=85"
                  alt="Professionele loodgieter aan het werk"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating cards */}
              <div className="absolute -left-8 top-20 bg-white rounded-xl shadow-xl p-4 animate-float z-20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">10+ Jaar</p>
                    <p className="text-sm text-slate-500">Ervaring</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 bottom-20 bg-white rounded-xl shadow-xl p-4 animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">1000+</p>
                    <p className="text-sm text-slate-500">Projecten voltooid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Waarom kiezen voor Multi Loodgieter?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ontdek wat ons onderscheidt van andere loodgietersbedrijven in de regio
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {uspPoints.map((usp, index) => {
              const IconComponent = iconMap[usp.icon];
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 hover-lift border border-slate-100"
                >
                  <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                    {IconComponent && <IconComponent className="w-7 h-7 text-cyan-600" />}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{usp.title}</h3>
                  <p className="text-slate-600">{usp.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Services Section - Creative Grid */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block bg-cyan-500/10 text-cyan-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Onze Specialisaties
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Wat Kunnen Wij Voor U Doen?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Van spoedreparaties tot complete renovaties – ontdek ons volledige dienstenaanbod
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Featured Card - Loodgieter Werkzaamheden */}
            <Link
              to="/diensten/loodgieter-werkzaamheden"
              className="group lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-3xl bg-slate-900 min-h-[400px]"
            >
              <img
                src={featuredServices[0].image}
                alt={featuredServices[0].title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              <div className="relative h-full p-8 flex flex-col justify-end">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                  <Wrench className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {featuredServices[0].title}
                </h3>
                <p className="text-slate-300 mb-4 max-w-lg">
                  {featuredServices[0].description}
                </p>
                <span className="inline-flex items-center text-cyan-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                  Meer informatie
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </Link>

            {/* Waterleiding & Afvoer */}
            <Link
              to="/diensten/waterleiding-afvoer"
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600 min-h-[190px]"
            >
              <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{featuredServices[1].title}</h3>
                  <p className="text-blue-100 text-sm line-clamp-2">{featuredServices[1].description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* CV Installaties */}
            <Link
              to="/diensten/cv-installatie"
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-amber-500 min-h-[190px]"
            >
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{featuredServices[2].title}</h3>
                  <p className="text-orange-100 text-sm line-clamp-2">{featuredServices[2].description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Badkamer Renovatie */}
            <Link
              to="/diensten/badkamer-renovatie"
              className="group relative overflow-hidden rounded-3xl min-h-[220px]"
            >
              <img
                src={featuredServices[3].image}
                alt={featuredServices[3].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="relative h-full p-6 flex flex-col justify-end">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
                  <Bath className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{featuredServices[3].title}</h3>
                <p className="text-slate-300 text-sm line-clamp-2">{featuredServices[3].description}</p>
              </div>
            </Link>

            {/* Keuken Installatie */}
            <Link
              to="/diensten/keuken-installatie"
              className="group relative overflow-hidden rounded-3xl min-h-[220px]"
            >
              <img
                src={featuredServices[4].image}
                alt={featuredServices[4].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="relative h-full p-6 flex flex-col justify-end">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
                  <UtensilsCrossed className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{featuredServices[4].title}</h3>
                <p className="text-slate-300 text-sm line-clamp-2">{featuredServices[4].description}</p>
              </div>
            </Link>

            {/* Woning Renovatie */}
            <Link
              to="/diensten/woning-renovatie"
              className="group relative overflow-hidden rounded-3xl min-h-[220px]"
            >
              <img
                src={featuredServices[5].image}
                alt={featuredServices[5].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="relative h-full p-6 flex flex-col justify-end">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{featuredServices[5].title}</h3>
                <p className="text-slate-300 text-sm line-clamp-2">{featuredServices[5].description}</p>
              </div>
            </Link>
          </div>

          {/* View All Services */}
          <div className="text-center mt-12">
            <Link to="/diensten">
              <Button variant="outline" className="btn-secondary px-8 py-3 rounded-full">
                Bekijk Alle Diensten
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Heeft u een loodgieter nodig?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Neem vandaag nog contact met ons op voor een vrijblijvende offerte. 
              Wij reageren binnen 24 uur!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/offerte">
                <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-4 rounded-full text-lg">
                  Offerte Aanvragen
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href={`tel:${companyInfo.phone}`}>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  {companyInfo.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Wat Onze Klanten Zeggen
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Lees de ervaringen van tevreden klanten die ons voorgingen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial-card bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="mt-auto">
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.location} • {testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Veelgestelde Vragen
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Heeft u vragen over onze diensten? Hier vindt u antwoorden op de meest gestelde vragen.
              </p>
              <div className="bg-cyan-500/5 rounded-2xl p-6 border border-cyan-500/10">
                <h3 className="font-semibold text-slate-900 mb-2">Staat uw vraag er niet bij?</h3>
                <p className="text-slate-600 mb-4">
                  Neem gerust contact met ons op. Wij helpen u graag verder!
                </p>
                <Link to="/contact">
                  <Button className="btn-primary rounded-full">
                    Neem Contact Op
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-xl border border-slate-200 px-6 data-[state=open]:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-cyan-600 py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="bg-slate-900 py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-cyan-500" />
              <span className="text-white font-medium">Actief in:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {companyInfo.regions.map((region, index) => (
                <span
                  key={index}
                  className="bg-slate-800 text-slate-300 px-4 py-2 rounded-full text-sm"
                >
                  {region}
                </span>
              ))}
            </div>
            <a
              href={`tel:${companyInfo.phone}`}
              className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
            >
              Bel: {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
