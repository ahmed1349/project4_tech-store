
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const { t, isRTL } = useLanguage();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 to-tech-purple/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/20 rounded-full">
              <Mail className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t('newsletter')}
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            {t('subscribeNewsletter')}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('enterEmail')}
              className="flex-1 px-4 py-3 rounded-full bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              required
            />
            <Button
              type="submit"
              className="tech-gradient hover:opacity-90 transition-opacity px-8 py-3 rounded-full"
            >
              {t('subscribe')}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
