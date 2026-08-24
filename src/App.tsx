/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { WhyUs } from './components/WhyUs';
import { CateringSection } from './components/CateringSection';
import { ExperienceSection } from './components/ExperienceSection';
import { HowItWorks } from './components/HowItWorks';
import { LocationsSection } from './components/LocationsSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { BulkInquiryModal } from './components/BulkInquiryModal';
import { PhysicalMenuModal } from './components/PhysicalMenuModal';
import { CartItem, PopcornProduct, PopcornSizeOption } from './types';
import { Check, ShoppingBag } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('popcorn_king_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
  const [isPhysicalMenuOpen, setIsPhysicalMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('popcorn_king_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (
    product: PopcornProduct,
    selectedSize: PopcornSizeOption,
    quantity: number,
    selectedOption?: string
  ) => {
    const itemKey = `${product.id}-${selectedSize.id}-${selectedOption || 'default'}`;
    const existingIndex = cartItems.findIndex((item) => item.id === itemKey);

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += quantity;
      updated[existingIndex].totalPrice =
        updated[existingIndex].quantity * updated[existingIndex].unitPrice;
      setCartItems(updated);
    } else {
      const newItem: CartItem = {
        id: itemKey,
        productId: product.id,
        productName: selectedOption ? `${product.name} (${selectedOption})` : product.name,
        productImage: product.image,
        category: product.category,
        selectedSize: selectedSize,
        selectedOption: selectedOption,
        quantity: quantity,
        unitPrice: selectedSize.priceGHS,
        totalPrice: selectedSize.priceGHS * quantity,
      };
      setCartItems([...cartItems, newItem]);
    }

    const optionText = selectedOption ? ` - ${selectedOption}` : '';
    showToast(`Added ${quantity}x ${product.name}${optionText} (${selectedSize.name}) to cart!`);
  };

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: newQuantity,
              totalPrice: newQuantity * item.unitPrice,
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 selection:bg-amber-500 selection:text-stone-950 font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-4 z-50 bg-stone-900 border border-amber-500/50 text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="w-7 h-7 rounded-lg bg-amber-500 text-stone-950 flex items-center justify-center font-bold">
            <Check className="w-4 h-4 stroke-[3]" />
          </div>
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        cartItems={cartItems}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBooking={() => scrollToSection('catering')}
        onOpenPhysicalMenu={() => setIsPhysicalMenuOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onOrderClick={() => scrollToSection('flavours')}
        onBookClick={() => scrollToSection('catering')}
        onOpenPhysicalMenu={() => setIsPhysicalMenuOpen(true)}
      />

      {/* Products & Flavours Menu */}
      <ProductGrid
        onAddToCart={handleAddToCart}
        onOpenBulkInquiry={() => setIsBulkModalOpen(true)}
        onOpenPhysicalMenu={() => setIsPhysicalMenuOpen(true)}
      />

      {/* Why Popcorn King */}
      <WhyUs />

      {/* Events & Catering Section + Quote Form */}
      <CateringSection
        onQuoteSubmitSuccess={() => showToast('Event quote request opened on WhatsApp!')}
      />

      {/* The Popcorn King Experience */}
      <ExperienceSection />

      {/* How It Works */}
      <HowItWorks />

      {/* Pop-Up Locations & Find Us */}
      <LocationsSection
        onBookClick={() => scrollToSection('catering')}
      />

      {/* Visual Photo Gallery */}
      <GallerySection />

      {/* Customer Reviews & Testimonials */}
      <ReviewsSection />

      {/* FAQ Accordion */}
      <FaqSection />

      {/* Contact & Direct Enquiries */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Button */}
      <WhatsAppFloatingButton />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Bulk / Custom Flavor Inquiry Modal */}
      <BulkInquiryModal
        isOpen={isBulkModalOpen}
        onClose={() => setIsBulkModalOpen(false)}
      />

      {/* Official Physical Menu & Flyers Modal */}
      <PhysicalMenuModal
        isOpen={isPhysicalMenuOpen}
        onClose={() => setIsPhysicalMenuOpen(false)}
      />
    </div>
  );
}
