
import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageProvider } from '../contexts/LanguageContext';
import { CartProvider } from '../contexts/CartContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CartContent = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();
  const { t, isRTL } = useLanguage();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
          <h1 className="text-3xl font-bold mb-4">{t('emptyCart')}</h1>
          <p className="text-muted-foreground mb-8">{t('emptyCartDescription')}</p>
          <Link to="/">
            <Button className="tech-gradient hover:opacity-90 transition-opacity">
              {t('continueShopping')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">{t('shoppingCart')} ({totalItems})</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="glass-effect">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <img 
                      src={item.image} 
                      alt={isRTL ? item.nameAr : item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">
                        {isRTL ? item.nameAr : item.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        ${item.price.toFixed(2)}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8"
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          
                          <span className="font-medium text-lg w-8 text-center">
                            {item.quantity}
                          </span>
                          
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8"
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-lg">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="glass-effect sticky top-8">
              <CardHeader>
                <CardTitle>{t('orderSummary')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>{t('subtotal')}</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>{t('shipping')}</span>
                  <span>{t('free')}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>{t('tax')}</span>
                  <span>${(totalPrice * 0.1).toFixed(2)}</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>{t('total')}</span>
                    <span>${(totalPrice * 1.1).toFixed(2)}</span>
                  </div>
                </div>
                
                <Button className="w-full tech-gradient hover:opacity-90 transition-opacity mt-6">
                  {t('proceedToCheckout')}
                </Button>
                
                <Link to="/">
                  <Button variant="outline" className="w-full">
                    {t('continueShopping')}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <CartContent />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
};

export default Cart;
