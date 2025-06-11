import { GalleryItem, PlatformData, TierOption, VideoItem, LiveSchedule, Testimonial, ModelStats } from '../types';

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Summer Sunset",
    description: "Exclusive photoshoot from last summer",
    imageUrl: "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isPremium: false,
    category: "photos",
    likes: 2453
  },
  {
    id: "2",
    title: "Beach Waves",
    description: "Private beach photoshoot",
    imageUrl: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isPremium: true,
    category: "photos",
    likes: 3256
  },
  {
    id: "3",
    title: "City Lights",
    description: "Night out in the city",
    imageUrl: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isPremium: false,
    category: "photos",
    likes: 1897
  },
  {
    id: "4",
    title: "Morning Routine",
    description: "BTS of my morning routine",
    imageUrl: "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isPremium: true,
    category: "videos",
    likes: 4215
  },
  {
    id: "5",
    title: "Fitness Session",
    description: "Workout session at the gym",
    imageUrl: "https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isPremium: false,
    category: "videos",
    likes: 3102
  },
  {
    id: "6",
    title: "Last Week's Live",
    description: "Recording from last week's stream",
    imageUrl: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isPremium: true,
    category: "live",
    likes: 5678
  },
  {
    id: "7",
    title: "Fashion Haul",
    description: "Trying on my new outfits",
    imageUrl: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isPremium: false,
    category: "videos",
    likes: 2843
  },
  {
    id: "8",
    title: "Poolside Relaxation",
    description: "Lounging by the pool",
    imageUrl: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isPremium: true,
    category: "photos",
    likes: 3956
  }
];

export const platformData: PlatformData[] = [
  {
    id: '1',
    name: 'Instagram',
    url: '#',
    color: '#00AFF0',
    isLive: true,
    followers: 150000,
    likes: 2500000,
    price: 9.99,
    description: 'Daily exclusive photos and videos'
  },
  {
    id: '2',
    name: 'Twitter',
    url: '#',
    color: '#9333EA',
    isLive: true,
    followers: 120000,
    likes: 1800000,
    price: 12.99,
    description: 'Premium content and special requests'
  },
  {
    id: '3',
    name: 'Youtube',
    url: '#',
    color: '#FF69B4',
    isLive: false,
    followers: 80000,
    likes: 950000,
    price: 19.99,
    description: 'Full-length videos and custom content'
  }
];

export const tierOptions: TierOption[] = [
  {
    id: 1,
    name: "Instagram",
    price: 0,
    description: "Daily exclusive photos and videos",
    features: [
    ],
    isPopular: true
  },
  {
    id: 2,
    name: "Twitter",
    price: 0,
    description: "Premium content and special requests",
    features: [
    ],
    isPopular: false
  },
  {
    id: 3,
    name: "Youtube",
    price: 0,
    description: "Full-length videos and custom content",
    features: [
    ],
    isPopular: false
  }
];

export const videoItems: VideoItem[] = [
  {
    id: "1",
    title: "Beach Day Vlog",
    description: "Join me for a day at the beach",
    thumbnailUrl: "https://images.pexels.com/photos/1021068/pexels-photo-1021068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    videoUrl: "#",
    duration: "12:34",
    isPremium: false,
    views: 12453,
    likes: 2453
  },
  {
    id: "2",
    title: "Hotel Room Tour",
    description: "Exclusive hotel suite tour",
    thumbnailUrl: "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    videoUrl: "#",
    duration: "08:21",
    isPremium: true,
    views: 8756,
    likes: 1897
  },
  {
    id: "3",
    title: "Morning Routine",
    description: "How I start my day",
    thumbnailUrl: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    videoUrl: "#",
    duration: "15:47",
    isPremium: false,
    views: 15289,
    likes: 3256
  },
  {
    id: "4",
    title: "Workout Session",
    description: "Full gym workout routine",
    thumbnailUrl: "https://images.pexels.com/photos/2773480/pexels-photo-2773480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    videoUrl: "#",
    duration: "24:15",
    isPremium: true,
    views: 9876,
    likes: 3421
  }
];

export const liveSchedule: LiveSchedule[] = [
  {
    id: 1,
    day: "Monday",
    date: "June 5",
    time: "8:00 PM EST",
    platform: "Instagram",
    title: "Q&A Session"
  },
  {
    id: 2,
    day: "Wednesday",
    date: "June 7",
    time: "9:30 PM EST",
    platform: "Twiiter",
    title: "Dance Night"
  },
  {
    id: 3,
    day: "Friday",
    date: "June 9",
    time: "10:00 PM EST",
    platform: "Youtube",
    title: "Special Show"
  },
  {
    id: 4,
    day: "Saturday",
    date: "June 10",
    time: "7:00 PM EST",
    platform: "Snapchat",
    title: "Fan Requests"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "James L.",
    avatar: "https://i.pravatar.cc/150?img=11",
    comment: "Best subscription I've ever had. The content is amazing and she really cares about her fans!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael R.",
    avatar: "https://i.pravatar.cc/150?img=12",
    comment: "Worth every penny. The exclusive content and personal attention make this a premium experience.",
    rating: 5
  },
  {
    id: 3,
    name: "David K.",
    avatar: "https://i.pravatar.cc/150?img=13",
    comment: "Been subscribed for 6 months and the content just keeps getting better. Highly recommend.",
    rating: 4
  }
];

export const modelStats: ModelStats = {
  followers: 880000,
  likes: 2500000,
  rating: 4.9
};