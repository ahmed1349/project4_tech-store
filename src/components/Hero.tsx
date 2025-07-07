import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
const Hero = () => {
  const {
    t
  } = useLanguage();
  return <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`
      }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="tech-gradient bg-clip-text text-slate-50">
                TechNest
              </span>
              <br />
              <span className="text-white">
                {t('heroTitle')}
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="tech-gradient hover:opacity-90 transition-opacity text-white px-8 py-3 text-lg">
                {t('shopNow')}
              </Button>
              <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-lg">
                {t('viewAll')}
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative">
            <div className="relative group">
              <div className="absolute -inset-4 tech-gradient rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&h=600&fit=crop" alt="Tech Products" className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>;
};
export default Hero;