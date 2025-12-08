import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/mock';

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-40">
      {/* Hero Section */}
      <section className="container-custom pb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Onze <span className="text-gradient">Diensten</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Multi Loodgieter biedt een compleet pakket aan loodgietersdiensten. 
            Van kleine reparaties tot grootschalige renovatieprojecten – 
            onze vakmensen staan voor u klaar met expertise en toewijding.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-slate-50 section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.id}
                to={`/diensten/${service.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all hover:-translate-y-1"
              >
                <div className="grid md:grid-cols-2">
                  <div className="aspect-square md:aspect-auto overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-slate-600 mb-4">{service.shortDescription}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="text-sm text-slate-500 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center text-cyan-600 font-semibold">
                      Bekijk details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
