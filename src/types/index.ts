// Navigation types
export interface NavItem {
  name: string;
  href: string;
  current?: boolean;
}

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'migration' | 'administrative' | 'family' | 'real-estate';
  services: ServiceItem[];
}

export interface ServiceItem {
  name: string;
  price: string;
  description?: string;
}

// Contact form types
export interface ContactForm {
  name: string;
  email: string;
  message: string;
  terms: boolean;
}

// Company info types
export interface CompanyInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}