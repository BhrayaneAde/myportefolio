'use client';

import { ArrowRight, Code2, Smartphone, Terminal, Sparkles, Zap, Rocket, Trophy, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>
      
      {/* Dynamic Floating Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-[120px] animate-pulse delay-700"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-slate-500/30 to-gray-500/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full blur-[100px] animate-bounce" style={{ animationDuration: '3s' }}></div>
      
      {/* Interactive Mouse Follower */}
      <div 
        className="absolute w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm opacity-60 pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isLoaded ? 1 : 0})`
        }}
      ></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Floating Icons */}
        <div className="absolute -top-20 left-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '4s' }}>
          <Sparkles className="w-8 h-8 text-yellow-400 opacity-60" />
        </div>
        <div className="absolute -top-10 right-32 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
          <Zap className="w-6 h-6 text-blue-400 opacity-60" />
        </div>
        <div className="absolute top-40 -left-10 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}>
          <Rocket className="w-10 h-10 text-purple-400 opacity-60" />
        </div>

        <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-slate-500/20 to-blue-500/20 backdrop-blur-xl border border-white/10 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 hover:scale-105 hover:from-slate-500/30 hover:to-blue-500/30 transition-all cursor-default group">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
          </span>
          <Sparkles className="w-4 h-4 text-blue-400 group-hover:rotate-12 transition-transform" />
          <span className="text-sm font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Disponible pour de nouveaux projets
          </span>
        </div>

        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 relative">
          <span className="block text-white drop-shadow-2xl hover:scale-105 transition-transform duration-300">
            Bhrayane Freudel
          </span>
          <span className="block mt-4 bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-400 bg-clip-text text-transparent pb-6 relative">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-400 bg-clip-text text-transparent blur-sm opacity-50"></span>
            <span className="relative animate-pulse">YENOU</span>
          </span>
          {/* Glowing effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-indigo-600/20 blur-3xl opacity-30 animate-pulse"></div>
        </h1>

        <div className="flex items-center justify-center gap-6 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <div className="group px-8 py-4 rounded-3xl bg-gradient-to-r from-slate-500/20 to-blue-500/20 backdrop-blur-xl border border-white/10 flex items-center gap-4 text-white hover:from-slate-500/30 hover:to-blue-500/30 hover:scale-110 transition-all duration-300 cursor-default">
            <Code2 className="w-6 h-6 text-blue-400 group-hover:rotate-12 transition-transform" />
            <span className="font-bold text-lg">Fullstack</span>
          </div>
          <div className="group px-8 py-4 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/10 flex items-center gap-4 text-white hover:from-indigo-500/30 hover:to-cyan-500/30 hover:scale-110 transition-all duration-300 cursor-default">
            <Smartphone className="w-6 h-6 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span className="font-bold text-lg">Mobile</span>
          </div>
        </div>

        <p className="text-2xl sm:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500 font-light">
          Transformez vos idées en{' '}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent font-bold animate-pulse">
            solutions numériques d'excellence
          </span>
          .<br className="hidden sm:block" />
          <span className="text-xl text-gray-400 block mt-4">
            Expertise technique et créativité au service de votre vision
          </span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-700">
          <Button
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-8 text-xl font-bold rounded-3xl shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-2 hover:scale-105 transition-all duration-300 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <span className="relative z-10">Me contacter</span>
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('skills')}
            className="relative bg-transparent hover:bg-white/10 border-2 border-white/20 hover:border-white/40 text-white px-12 py-8 text-xl font-bold rounded-3xl backdrop-blur-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 group"
          >
            <span className="relative z-10">Voir mes compétences</span>
            <Terminal className="ml-3 w-6 h-6 group-hover:rotate-12 transition-transform relative z-10" />
          </Button>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-32 grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-14 duration-700 delay-1000">
          {[
            { value: '7+', label: 'Années d\'Expérience', icon: Rocket, color: 'from-slate-500 to-gray-600' },
            { value: '10+', label: 'Projets Majeurs', icon: Target, color: 'from-blue-500 to-cyan-500' },
            { value: '100%', label: 'Satisfaction Client', icon: Trophy, color: 'from-indigo-500 to-blue-600' }
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-default relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-10 rounded-3xl blur-xl group-hover:opacity-20 transition-opacity duration-300`}></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300">
                <div className="mb-6 flex justify-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className={`text-5xl sm:text-6xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-bold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
