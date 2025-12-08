import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Star, Clock, Shield, Award, MapPin, ThumbsUp, Euro, CheckCircle } from 'lucide-react';
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
      <section className="bg-slate-50 section-padding">
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

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Onze Diensten
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Van kleine reparaties tot complete renovaties – wij helpen u met al uw loodgieterswensen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.id}
                to={`/diensten/${service.id}`}
                className="group service-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{service.shortDescription}</p>
                  <span className="inline-flex items-center text-cyan-600 font-medium">
                    Meer informatie
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 section-padding relative overflow-hidden">
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
