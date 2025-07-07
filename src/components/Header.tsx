
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { categories } from '../data/products';

const Header = () => {
  const { language, toggleLanguage, t, isRTL } = useLanguage();
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-border/30">
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">
              {t('newsletter')}: {t('subscribeNewsletter')}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>
            <span className="text-muted-foreground">|</span>
            <button className="hover:text-primary transition-colors">
              {t('login')}
            </button>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tech-gradient bg-clip-text text-transparent">
              TechNest
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            <a href="#" className="hover:text-primary transition-colors">{t('home')}</a>
            <div className="relative group">
              <button className="hover:text-primary transition-colors flex items-center gap-1">
                {t('products')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 rtl:left-auto rtl:right-0 mt-2 w-64 glass-effect rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4 grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <a
                      key={category.id}
                      href="#"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                    >
                      <span className="text-xl">{category.icon}</span>
                      <span className="text-sm">{isRTL ? category.nameAr : category.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <a href="#" className="hover:text-primary transition-colors">{t('about')}</a>
            <a href="#" className="hover:text-primary transition-colors">{t('contact')}</a>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden md:flex items-center relative">
              <input
                type="text"
                placeholder={t('search')}
                className="bg-accent/50 border border-border rounded-full px-4 py-2 pl-10 rtl:pl-4 rtl:pr-10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all w-64"
              />
              <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground`} />
            </div>

            {/* Cart */}
            <button className="relative p-2 hover:bg-accent/50 rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* User */}
            <button className="p-2 hover:bg-accent/50 rounded-full transition-colors">
              <User className="w-6 h-6" />
            </button>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 hover:bg-accent/50 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/30">
            <nav className="space-y-4">
              <a href="#" className="block hover:text-primary transition-colors">{t('home')}</a>
              <a href="#" className="block hover:text-primary transition-colors">{t('products')}</a>
              <a href="#" className="block hover:text-primary transition-colors">{t('about')}</a>
              <a href="#" className="block hover:text-primary transition-colors">{t('contact')}</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
