
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    products: 'Products',
    categories: 'Categories',
    about: 'About',
    contact: 'Contact',
    cart: 'Cart',
    search: 'Search',
    login: 'Login',
    register: 'Register',
    logout: 'Logout',
    myAccount: 'My Account',
    
    // Homepage
    heroTitle: 'Where Innovation Meets You',
    heroSubtitle: 'Discover the latest tech products with cutting-edge technology',
    shopNow: 'Shop Now',
    featuredProducts: 'Featured Products',
    newArrivals: 'New Arrivals',
    bestSellers: 'Best Sellers',
    viewAll: 'View All',
    
    // Products
    addToCart: 'Add to Cart',
    buyNow: 'Buy Now',
    price: 'Price',
    rating: 'Rating',
    reviews: 'Reviews',
    specifications: 'Specifications',
    description: 'Description',
    inStock: 'In Stock',
    outOfStock: 'Out of Stock',
    
    // Categories
    smartphones: 'Smartphones',
    laptops: 'Laptops',
    smartwatches: 'Smartwatches',
    accessories: 'Accessories',
    headphones: 'Headphones',
    tablets: 'Tablets',
    
    // Footer
    newsletter: 'Newsletter',
    subscribeNewsletter: 'Subscribe to our newsletter for latest updates',
    enterEmail: 'Enter your email',
    subscribe: 'Subscribe',
    followUs: 'Follow Us',
    quickLinks: 'Quick Links',
    customerService: 'Customer Service',
    faq: 'FAQ',
    shippingInfo: 'Shipping Info',
    returns: 'Returns',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    
    // Common
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    confirm: 'Confirm',

    emptyCart: 'Your cart is empty',
    emptyCartDescription: 'Looks like you haven\'t added anything to your cart yet.',
    continueShopping: 'Continue Shopping',
    shoppingCart: 'Shopping Cart',
    orderSummary: 'Order Summary',
    subtotal: 'Subtotal',
    shipping: 'Shipping',
    free: 'Free',
    tax: 'Tax',
    total: 'Total',
    proceedToCheckout: 'Proceed to Checkout',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    products: 'المنتجات',
    categories: 'الفئات',
    about: 'من نحن',
    contact: 'اتصل بنا',
    cart: 'السلة',
    search: 'البحث',
    login: 'تسجيل الدخول',
    register: 'إنشاء حساب',
    logout: 'تسجيل الخروج',
    myAccount: 'حسابي',
    
    // Homepage
    heroTitle: 'حيث تلتقي التكنولوجيا بك',
    heroSubtitle: 'اكتشف أحدث المنتجات التقنية بتكنولوجيا متطورة',
    shopNow: 'تسوق الآن',
    featuredProducts: 'المنتجات المميزة',
    newArrivals: 'وصل حديثاً',
    bestSellers: 'الأكثر مبيعاً',
    viewAll: 'عرض الكل',
    
    // Products
    addToCart: 'أضف للسلة',
    buyNow: 'اشترِ الآن',
    price: 'السعر',
    rating: 'التقييم',
    reviews: 'المراجعات',
    specifications: 'المواصفات',
    description: 'الوصف',
    inStock: 'متوفر',
    outOfStock: 'غير متوفر',
    
    // Categories
    smartphones: 'الهواتف الذكية',
    laptops: 'أجهزة الكمبيوتر المحمولة',
    smartwatches: 'الساعات الذكية',
    accessories: 'الإكسسوارات',
    headphones: 'سماعات الرأس',
    tablets: 'الأجهزة اللوحية',
    
    // Footer
    newsletter: 'النشرة الإخبارية',
    subscribeNewsletter: 'اشترك في نشرتنا الإخبارية لآخر التحديثات',
    enterEmail: 'أدخل بريدك الإلكتروني',
    subscribe: 'اشترك',
    followUs: 'تابعنا',
    quickLinks: 'روابط سريعة',
    customerService: 'خدمة العملاء',
    faq: 'الأسئلة الشائعة',
    shippingInfo: 'معلومات الشحن',
    returns: 'المرتجعات',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الخدمة',
    
    // Common
    loading: 'جاري التحميل...',
    error: 'خطأ',
    success: 'نجح',
    cancel: 'إلغاء',
    save: 'حفظ',
    edit: 'تعديل',
    delete: 'حذف',
    confirm: 'تأكيد',

    emptyCart: 'سلة التسوق فارغة',
    emptyCartDescription: 'يبدو أنك لم تضف أي شيء إلى سلة التسوق بعد.',
    continueShopping: 'متابعة التسوق',
    shoppingCart: 'سلة التسوق',
    orderSummary: 'ملخص الطلب',
    subtotal: 'المجموع الفرعي',
    shipping: 'الشحن',
    free: 'مجاني',
    tax: 'الضريبة',
    total: 'المجموع',
    proceedToCheckout: 'المتابعة للدفع',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('technest-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.body.className = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('technest-language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
