import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Phone, CheckCircle, Shield, Clock, Award } from 'lucide-react';
import { companyInfo, quoteFormServices } from '../data/mock';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';

const QuotePage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    service: '',
    urgency: '',
    description: '',
    preferredContact: 'phone',
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Navigate to thank you page
    navigate('/bedankt');
  };

  const benefits = [
    { icon: Clock, text: 'Reactie binnen 24 uur' },
    { icon: Shield, text: 'Vrijblijvend en gratis' },
    { icon: Award, text: 'Persoonlijk advies' },
  ];

  return (
    <div className="min-h-screen pt-40 pb-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
                Vraag een <span className="text-gradient">Gratis Offerte</span> aan
              </h1>
              <p className="text-lg text-slate-600">
                Vul het formulier in en ontvang binnen 24 uur een persoonlijke offerte op maat.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Uw gegevens</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Naam *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Uw volledige naam"
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
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="uw@email.nl"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefoonnummer *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="06 12345678"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">Plaats *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Uw woonplaats"
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <Label htmlFor="address">Adres</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Straatnaam en huisnummer"
                    className="h-12"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Uw aanvraag</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Type dienst *</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => handleSelectChange('service', value)}
                      required
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Selecteer een dienst" />
                      </SelectTrigger>
                      <SelectContent>
                        {quoteFormServices.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Urgentie</Label>
                    <Select
                      value={formData.urgency}
                      onValueChange={(value) => handleSelectChange('urgency', value)}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Hoe snel heeft u hulp nodig?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="spoed">Spoed (vandaag/morgen)</SelectItem>
                        <SelectItem value="week">Binnen een week</SelectItem>
                        <SelectItem value="maand">Binnen een maand</SelectItem>
                        <SelectItem value="flexibel">Flexibel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <Label htmlFor="description">Omschrijving van uw aanvraag *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Beschrijf uw situatie zo uitgebreid mogelijk. Wat is het probleem? Wat wilt u laten doen?"
                    rows={5}
                    required
                    className="resize-none"
                  />
                </div>
              </div>

              {/* Contact Preference */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Contact voorkeur</h2>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={handleChange}
                      className="w-4 h-4 text-cyan-600"
                    />
                    <span className="text-slate-700">Telefoon</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleChange}
                      className="w-4 h-4 text-cyan-600"
                    />
                    <span className="text-slate-700">E-mail</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="whatsapp"
                      checked={formData.preferredContact === 'whatsapp'}
                      onChange={handleChange}
                      className="w-4 h-4 text-cyan-600"
                    />
                    <span className="text-slate-700">WhatsApp</span>
                  </label>
                </div>
              </div>

              {/* Terms & Submit */}
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({ ...prev, acceptTerms: checked }))
                    }
                    required
                  />
                  <Label htmlFor="terms" className="text-sm text-slate-600 leading-relaxed cursor-pointer">
                    Ik ga akkoord met de verwerking van mijn gegevens voor het behandelen van mijn aanvraag. 
                    Lees ons privacybeleid voor meer informatie.
                  </Label>
                </div>

                <Button
                  type="submit"
                  disabled={!formData.acceptTerms || isSubmitting}
                  className="btn-primary w-full py-4 rounded-full text-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Verzenden...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Offerte Aanvragen
                      <Send className="w-5 h-5" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Benefits Card */}
              <div className="bg-slate-900 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-6">Waarom bij ons?</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                        <benefit.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <span>{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Card */}
              <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-500/20">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Liever direct contact?</h3>
                <p className="text-slate-600 mb-6">
                  Bel ons voor een snelle reactie. Wij zijn 24/7 bereikbaar!
                </p>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center justify-center gap-2 bg-cyan-500 text-slate-900 font-semibold py-3 px-6 rounded-full hover:bg-cyan-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {companyInfo.phone}
                </a>
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Onze garanties</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span>Tot 5 jaar garantie</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span>Transparante prijzen</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span>Erkende materialen</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span>10+ jaar ervaring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
