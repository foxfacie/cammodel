export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  likes: number;
  isPremium: boolean;
}

export interface PlatformData {
  id: string;
  name: string;
  url: string;
  color: string;
  isLive: boolean;
  followers: number;
  likes: number;
  price: number;
  description: string;
}

export interface TierOption {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  isPopular: boolean;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  views: number;
  likes: number;
  isPremium: boolean;
}

export interface LiveSchedule {
  id: number;
  day: string;
  date: string;
  time: string;
  platform: string;
  title: string;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  comment: string;
  rating: number;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  isPopular: boolean;
  color: string;
}

export interface ModelStats {
  followers: number;
  likes: number;
  rating: number;
}