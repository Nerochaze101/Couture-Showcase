export interface GalleryImage {
  src: string;
  title: string;
  category: string;
}

export const heroImage = {
  src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
  title: "NEROCHAZE",
  subtitle: "Couture",
  description: "Where timeless elegance meets modern audacity."
};

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1974&auto=format&fit=crop",
    title: "The Midnight Gown",
    category: "Evening Wear"
  },
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1976&auto=format&fit=crop",
    title: "Gold Dust",
    category: "Runway 2024"
  },
  {
    src: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1972&auto=format&fit=crop",
    title: "Obsidian Suit",
    category: "Tailoring"
  },
  {
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop",
    title: "Ethereal Silk",
    category: "Spring Collection"
  }
];
