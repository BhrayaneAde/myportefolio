'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setIsSubmitted(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Téléphone et Contact Whatsapp',
      value: '+229 01 90 20 54 86',
      link: 'tel:+2290190205486',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'yenfreudel01@gmail.com',
      link: 'mailto:yenfreudel01@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Cotonou Cadjehoun, Bénin',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-8 lg:px-16 xl:px-24 bg-white">
      <div className="w-full">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Me Contacter
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-400 via-slate-600 to-slate-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discutons de votre projet. Je suis disponible pour des missions de
            développement et de conseil
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 w-full justify-items-stretch">
          <div className="lg:col-span-1 space-y-6 w-full">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border-2 border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-slate-900 transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {info.label}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-slate-600 hover:text-slate-900 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="border-2 border-slate-900 bg-slate-900 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Disponibilité</h3>
                <p className="mb-4">
                  Actuellement disponible pour des projets de développement web,
                  mobile et de maintenance informatique.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Disponible maintenant</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 w-full">
            <Card className="border-2 border-slate-200 shadow-lg">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Message envoyé !
                    </h3>
                    <p className="text-slate-600">
                      Je vous répondrai dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-slate-900 mb-2"
                        >
                          Nom complet
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          className="border-2 border-slate-200 focus:border-slate-900"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-slate-900 mb-2"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="votre@email.com"
                          className="border-2 border-slate-200 focus:border-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-slate-900 mb-2"
                      >
                        Sujet
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Sujet de votre message"
                        className="border-2 border-slate-200 focus:border-slate-900"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-900 mb-2"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre projet ou votre demande..."
                        rows={6}
                        className="border-2 border-slate-200 focus:border-slate-900 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 text-lg rounded-xl group"
                    >
                      Envoyer le message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
