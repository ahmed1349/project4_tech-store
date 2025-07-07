
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { categories } from '../data/products';

const Categories = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t('categories')}
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our wide range of technology categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-2xl p-8 text-center hover:bg-primary/10 hover:border-primary/50 border border-border transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {isRTL ? category.nameAr : category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
