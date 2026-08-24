export type MenuCategoryKey = 'all' | 'signature' | 'packaging' | 'refreshments' | 'event_packages';

export interface PopcornSizeOption {
  id: string;
  name: string;
  weightLabel?: string;
  servings?: string;
  priceGHS: number;
  priceDisplay?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'signature' | 'packaging' | 'refreshments' | 'event_packages';
  categoryLabel: 'SIGNATURE POPCORN' | 'POPCORN PACKAGING' | 'REFRESHMENTS' | 'EVENT PACKAGES';
  description: string;
  priceGHS: number;
  priceDisplay: string;
  isQuoteOnRequest?: boolean;
  unitLabel?: string;
  flavorNotes?: string[];
  image: string;
  badge?: string;
  isPopular?: boolean;
  isNew?: boolean;
  options?: string[];
  sizes?: PopcornSizeOption[];
}

export type PopcornProduct = MenuItem;

export interface CartItem {
  id: string;
  productId: string;
  productName: string;
  productImage: string;
  category: 'signature' | 'packaging' | 'refreshments' | 'event_packages';
  selectedSize: PopcornSizeOption;
  selectedOption?: string;
  quantity: number;
  customNote?: string;
  unitPrice: number;
  totalPrice: number;
}

export interface CateringPackage {
  id: string;
  name: string;
  tagline: string;
  minGuests: number;
  maxGuests: number;
  capacityLabel?: string;
  startingPriceGHS: number;
  priceDisplay?: string;
  popularFor: string;
  isBestSeller?: boolean;
  features: string[];
  includedEquipment: string[];
}

export interface VendingLocation {
  id: string;
  title: string;
  venue: string;
  area: string;
  date: string;
  time: string;
  status: 'upcoming' | 'live_now' | 'completed';
  description: string;
  mapsUrl: string;
  badge: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'events' | 'flavours' | 'machines' | 'customers';
  image: string;
  caption: string;
}

export interface ReviewItem {
  id: string;
  customerName: string;
  roleOrOccasion: string;
  location: string;
  rating: number;
  quote: string;
  avatarText: string;
  date: string;
  isVerifiedEvent?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'ordering' | 'catering' | 'delivery' | 'flavours';
}

export interface EventQuoteFormData {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  guestCount: number;
  selectedPackage: string;
  selectedFlavors: string[];
  customBrandingRequired: boolean;
  additionalInfo: string;
}
