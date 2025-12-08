import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, Home } from 'lucide-react';
import { companyInfo } from '../data/mock';
import { Button } from '../components/ui/button';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8 animate-fade-in">
            <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto animate-pulse-glow">
              <CheckCircle className="w-12 h-12 text-emerald-500" />
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Bedankt voor uw aanvraag!
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Wij hebben uw offerteaanvraag in goede orde ontvangen. 
              Een van onze specialisten neemt binnen 24 uur contact met u op.
            </p>
          </div>

          {/* What's Next Card */}
          <div className="bg-slate-50 rounded-2xl p-8 mb-8 text-left animate-fade-in-up stagger-2">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Wat kunt u verwachten?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-cyan-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-cyan-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Bevestiging per e-mail</p>
                  <p className="text-slate-600 text-sm">U ontvangt direct een bevestiging in uw inbox</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-cyan-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-cyan-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Persoonlijk contact</p>
                  <p className="text-slate-600 text-sm">Wij nemen binnen 24 uur contact met u op om uw aanvraag te bespreken</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-cyan-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-cyan-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Offerte op maat</p>
                  <p className="text-slate-600 text-sm">U ontvangt een gedetailleerde offerte afgestemd op uw situatie</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-500/20 mb-8 animate-fade-in-up stagger-3">
            <p className="text-slate-700 mb-4">
              <strong>Spoed?</strong> Neem direct contact met ons op:
            </p>
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center gap-2 text-cyan-600 font-bold text-xl hover:text-cyan-700 transition-colors"
            >
              <Phone className="w-6 h-6" />
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
