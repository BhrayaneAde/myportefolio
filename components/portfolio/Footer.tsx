'use client';

import { Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Bhrayane Freudel YENOU
            </h3>
            <p className="text-slate-300">
              Développeur Fullstack passionné, créateur de solutions numériques
              innovantes et performantes.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Accueil', 'À Propos', 'Compétences', 'Expériences', 'Éducation', 'Contact'].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase().replace('à ', '').replace(' ', ''));
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-300">
              <li>+229 90 20 54 86</li>
              <li>yenfreudel01@gmail.com</li>
              <li>Cotonou Cadjehoun, Bénin</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-300 text-sm">
              © {currentYear} Bhrayane Freudel YENOU. Tous droits réservés.
            </p>
            <div className="flex items-center gap-2 text-slate-300 text-sm">
              <span>Créé avec</span>
              <Heart className="w-4 h-4 text-red-400" fill="currentColor" />
              <span>et</span>
              <Code2 className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
