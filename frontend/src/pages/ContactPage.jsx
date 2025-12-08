import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { companyInfo } from '../data/mock';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle contact form submission
    alert('Bedankt voor uw bericht! Wij nemen zo snel mogelijk contact met u op.');
  };

  return (
    <div className="min-h-screen pt-40 pb-24">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Neem <span className="text-gradient">Contact</span> Op
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Heeft u vragen of wilt u meer informatie? Wij staan klaar om u te helpen. 
            Neem contact met ons op via telefoon, e-mail of het contactformulier.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone Card */}
            <a
              href={`tel:${companyInfo.phone}`}
              className="block bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-cyan-200 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                  <Phone className="w-6 h-6 text-cyan-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Telefoon</h3>
                  <p className="text-cyan-600 font-semibold">{companyInfo.phone}</p>
                  <p className="text-sm text-slate-500 mt-1">24/7 bereikbaar</p>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${companyInfo.email}`}
              className="block bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-cyan-200 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                  <Mail className="w-6 h-6 text-cyan-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">E-mail</h3>
                  <p className="text-cyan-600 font-semibold break-all">{companyInfo.email}</p>
                  <p className="text-sm text-slate-500 mt-1">Reactie binnen 24 uur</p>
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Werkgebied</h3>
                  <p className="text-slate-600">{companyInfo.regions.join(', ')}</p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Bereikbaarheid</h3>
                  <p className="text-emerald-600 font-semibold">{companyInfo.openingHours}</p>
                  <p className="text-sm text-slate-500 mt-1">Ook voor spoedgevallen</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Stuur ons een bericht</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Naam *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Uw naam"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mailadres *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="uw@email.nl"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefoonnummer</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="06 12345678"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Onderwerp *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Waar gaat uw vraag over?"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Bericht *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Uw bericht..."
                    rows={6}
                    required
                    className="resize-none"
                  />
                </div>

                <Button type="submit" className="btn-primary px-8 py-4 rounded-full">
                  <Send className="w-5 h-5 mr-2" />
                  Verstuur Bericht
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section (Placeholder) */}
        <div className="mt-16">
          <div className="bg-slate-100 rounded-2xl h-[400px] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600 font-medium">Werkgebied: Randstad</p>
              <p className="text-slate-500">Noord-Holland • Zuid-Holland • Utrecht • Flevoland</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
