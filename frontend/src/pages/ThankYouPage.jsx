import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, Home } from 'lucide-react';
import { companyInfo } from '../data/mock';
import { Button } from '../components/ui/button';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen pt-40 pb-24 flex items-center bg-slate-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-10 animate-fade-in">
            <div className="w-28 h-28 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto animate-pulse-glow">
              <CheckCircle className="w-14 h-14 text-emerald-500" />
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Bedankt voor uw aanvraag!
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Wij hebben uw offerteaanvraag in goede orde ontvangen. 
              Een van onze specialisten neemt binnen 24 uur contact met u op.
            </p>
          </div>

          {/* What's Next Card */}
          <div className="bg-white rounded-2xl p-8 md:p-10 mb-10 text-left animate-fade-in-up stagger-2 shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-8">Wat kunt u verwachten?</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-5">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-600 font-bold">1</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Bevestiging per e-mail</p>
                  <p className="text-slate-600">U ontvangt direct een bevestiging in uw inbox</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-600 font-bold">2</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Persoonlijk contact</p>
                  <p className="text-slate-600">Wij nemen binnen 24 uur contact met u op om uw aanvraag te bespreken</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-600 font-bold">3</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Offerte op maat</p>
                  <p className="text-slate-600">U ontvangt een gedetailleerde offerte afgestemd op uw situatie</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-cyan-500/10 rounded-2xl p-8 border border-cyan-500/20 mb-10 animate-fade-in-up stagger-3">
            <p className="text-slate-700 mb-4">
              <strong>Spoed?</strong> Neem direct contact met ons op:
            </p>
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center gap-3 text-cyan-600 font-bold text-2xl hover:text-cyan-700 transition-colors"
            >
              <Phone className="w-7 h-7" />
              {companyInfo.phone}
            </a>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-4">
            <Link to="/">
              <Button className="btn-secondary px-8 py-4 rounded-full w-full sm:w-auto">
                <Home className="w-5 h-5 mr-2" />
                Terug naar Home
              </Button>
            </Link>
            <Link to="/diensten">
              <Button className="btn-primary px-8 py-4 rounded-full w-full sm:w-auto">
                Bekijk Onze Diensten
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
