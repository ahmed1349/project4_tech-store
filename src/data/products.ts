
import { Product } from '../contexts/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    nameAr: 'آيفون 15 برو',
    price: 999,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 1250,
    category: 'smartphones',
    description: 'The most advanced iPhone with titanium design and A17 Pro chip.',
    descriptionAr: 'أكثر آيفون تطوراً بتصميم التيتانيوم ومعالج A17 برو.',
    specifications: {
      'Display': '6.1" Super Retina XDR',
      'Chip': 'A17 Pro',
      'Storage': '128GB, 256GB, 512GB, 1TB',
      'Camera': '48MP Main, 12MP Ultra Wide, 12MP Telephoto'
    },
    inStock: true
  },
  {
    id: '2',
    name: 'MacBook Pro 14"',
    nameAr: 'ماك بوك برو 14 بوصة',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 890,
    category: 'laptops',
    description: 'Supercharged by M3 Pro and M3 Max chips for extreme performance.',
    descriptionAr: 'مدعوم بمعالجات M3 Pro و M3 Max للأداء الفائق.',
    specifications: {
      'Display': '14.2" Liquid Retina XDR',
      'Chip': 'Apple M3 Pro/Max',
      'Memory': '18GB/36GB unified memory',
      'Storage': '512GB/1TB/2TB/4TB SSD'
    },
    inStock: true
  },
  {
    id: '3',
    name: 'Apple Watch Series 9',
    nameAr: 'ساعة آبل سيريز 9',
    price: 399,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 650,
    category: 'smartwatches',
    description: 'Our most powerful smartwatch with advanced health features.',
    descriptionAr: 'أقوى ساعة ذكية لدينا مع ميزات صحية متقدمة.',
    specifications: {
      'Display': '45mm/41mm Retina',
      'Chip': 'S9 SiP',
      'Health': 'ECG, Blood Oxygen, Temperature',
      'Battery': 'Up to 18 hours'
    },
    inStock: true
  },
  {
    id: '4',
    name: 'AirPods Pro 2',
    nameAr: 'إيربودز برو 2',
    price: 249,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 1100,
    category: 'accessories',
    description: 'Next-level Active Noise Cancellation and Adaptive Transparency.',
    descriptionAr: 'إلغاء الضوضاء النشط والشفافية التكيفية من المستوى التالي.',
    specifications: {
      'Audio': 'Active Noise Cancellation',
      'Chip': 'H2 chip',
      'Battery': '6 hours + 24 hours with case',
      'Features': 'Spatial Audio, Adaptive EQ'
    },
    inStock: true
  },
  {
    id: '5',
    name: 'Samsung Galaxy S24 Ultra',
    nameAr: 'سامسونغ غالاكسي S24 ألترا',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 890,
    category: 'smartphones',
    description: 'Ultimate smartphone with S Pen and 200MP camera.',
    descriptionAr: 'الهاتف الذكي الأمثل مع قلم S وكاميرا 200 ميجابكسل.',
    specifications: {
      'Display': '6.8" Dynamic AMOLED 2X',
      'Processor': 'Snapdragon 8 Gen 3',
      'Storage': '256GB/512GB/1TB',
      'Camera': '200MP Main + 50MP Periscope'
    },
    inStock: true
  },
  {
    id: '6',
    name: 'Dell XPS 13',
    nameAr: 'ديل XPS 13',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 450,
    category: 'laptops',
    description: 'Ultra-portable laptop with stunning InfinityEdge display.',
    descriptionAr: 'لابتوب محمول للغاية مع شاشة InfinityEdge مذهلة.',
    specifications: {
      'Display': '13.4" FHD+ InfinityEdge',
      'Processor': 'Intel Core i7-13th Gen',
      'Memory': '16GB LPDDR5',
      'Storage': '512GB PCIe SSD'
    },
    inStock: true
  }
];

export const categories = [
  { id: 'smartphones', name: 'Smartphones', nameAr: 'الهواتف الذكية', icon: '📱' },
  { id: 'laptops', name: 'Laptops', nameAr: 'أجهزة الكمبيوتر المحمولة', icon: '💻' },
  { id: 'smartwatches', name: 'Smartwatches', nameAr: 'الساعات الذكية', icon: '⌚' },
  { id: 'accessories', name: 'Accessories', nameAr: 'الإكسسوارات', icon: '🎧' },
  { id: 'tablets', name: 'Tablets', nameAr: 'الأجهزة اللوحية', icon: '📱' },
  { id: 'headphones', name: 'Headphones', nameAr: 'سماعات الرأس', icon: '🎵' }
];
