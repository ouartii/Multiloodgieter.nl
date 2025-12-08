import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle, ArrowLeft } from 'lucide-react';
import { services, companyInfo } from '../data/mock';
import { Button } from '../components/ui/button';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const otherServices = services.filter((s) => s.id !== serviceId).slice(0, 3);

  return (
    <div className="min-h-screen pt-32">
      {/* Breadcrumb */}
      <div className="container-custom mb-8">
        <nav className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-slate-500 hover:text-cyan-600 transition-colors">
            Home
          </Link>
          <span className="text-slate-400">/</span>
          <Link to="/diensten" className="text-slate-500 hover:text-cyan-600 transition-colors">
            Diensten
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-slate-900 font-medium">{service.title}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container-custom pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-cyan-600 font-medium mb-6 hover:text-cyan-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Terug naar overzicht
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              {service.title}
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {service.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/offerte">
                <Button className="btn-primary px-8 py-4 rounded-full text-lg w-full sm:w-auto">
                  Offerte Aanvragen
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
          </div>

          <div className="animate-slide-in-right">
            <img
              src={service.image}
              alt={service.title}
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="bg-slate-50 section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* What we do */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Wat wij doen</h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Uw voordelen</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              {service.title} door Multi Loodgieter
            </h2>
            <div className="prose prose-lg prose-slate">
              <p className="text-slate-600 leading-relaxed mb-6">
                Bij Multi Loodgieter begrijpen we dat {service.title.toLowerCase()} een belangrijke investering is 
                in uw woning. Daarom bieden wij uitsluitend hoogwaardige oplossingen, uitgevoerd door ervaren 
                vakmannen met oog voor detail. Met meer dan 10 jaar ervaring in de Randstad hebben wij 
                een uitgebreide expertise opgebouwd.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Onze klanten in Noord-Holland, Zuid-Holland, Utrecht en Flevoland kunnen rekenen op 
                professioneel advies, transparante prijzen en een strakke planning. Wij werken uitsluitend 
                met materialen van erkende leveranciers, zodat u verzekerd bent van duurzame kwaliteit.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Bent u op zoek naar een betrouwbare partner voor {service.title.toLowerCase()}? 
                Neem dan vandaag nog contact met ons op voor een vrijblijvende offerte. 
                Wij denken graag met u mee over de beste oplossing voor uw situatie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cyan-500 py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Klaar om te starten?
              </h2>
              <p className="text-slate-800">
                Vraag vandaag nog een vrijblijvende offerte aan
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/offerte">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-semibold">
                  Offerte Aanvragen
                </Button>
              </Link>
              <a href={`tel:${companyInfo.phone}`}>
                <Button className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-full font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  {companyInfo.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Andere Diensten</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {otherServices.map((otherService) => (
              <Link
                key={otherService.id}
                to={`/diensten/${otherService.id}`}
                className="group service-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={otherService.image}
                    alt={otherService.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {otherService.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{otherService.shortDescription}</p>
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
    </div>
  );
};

export default ServiceDetailPage;
