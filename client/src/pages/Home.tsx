import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Play } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Unsplash: Fashion model in elegant dress walking away */}
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
          alt="Nerochaze Couture Hero"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-medium"
        >
          Est. 2024 • Paris
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-9xl text-white mb-6 leading-none"
        >
          NEROCHAZE
          <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 italic font-light text-white/90">
            Couture
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10"
        >
          Where timeless elegance meets modern audacity.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link href="/#collections" className="inline-block border border-white/30 hover:border-primary hover:bg-primary/10 text-white px-8 py-3 uppercase tracking-[0.2em] text-xs transition-all duration-300">
            View Collections
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 animate-bounce"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[3/4] overflow-hidden bg-muted relative">
             {/* Unsplash: Close up of fabric texture or detail */}
            <img 
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop" 
              alt="Couture Detail" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-primary/30 z-10 hidden md:block" />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Philosophy</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-8 leading-tight">
            We don't just design clothes. <br/>
            <span className="italic text-white/60">We sculpt confidence.</span>
          </h2>
          <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
            <p>
              At Nerochaze, we believe that true luxury lies in the details that often go unnoticed. 
              Every stitch is a deliberate choice, every silhouette a calculated risk. We bridge the gap 
              between the heritage of Parisian haute couture and the raw energy of modern avant-garde.
            </p>
            <p>
              Our collections are not seasonal; they are eternal. Designed for the individual who 
              commands the room without speaking a word.
            </p>
          </div>
          <div className="mt-10">
            <img 
              src="https://pixabay.com/get/g7fb7ebf7fe47f1b06758e822ac1a4bc0634e61892d7e4fa0b2d50fb7b3e668f7bff5473f010c0cfd7dc18d3f6992f42b5ef2294fe4e574462bd3e64c4b553868_1280.jpg" 
              alt="Designer Signature" 
              className="h-16 opacity-60 invert"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  const images = [
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

  return (
    <section id="collections" className="py-24 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Selected Works</span>
          <h2 className="font-display text-4xl md:text-5xl text-white">The Collection</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                <span className="text-primary text-xs tracking-widest uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {img.category}
                </span>
                <h3 className="font-display text-3xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoSection = () => {
  return (
    <section className="h-[70vh] w-full relative overflow-hidden group">
      {/* Unsplash: Dark moody fashion video placeholder or similar high quality image */}
      <img
        src="https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?q=80&w=2070&auto=format&fit=crop"
        alt="Runway Video Placeholder"
        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
      />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center mb-8 group-hover:bg-primary group-hover:border-primary transition-colors duration-300"
        >
          <Play fill="currentColor" className="w-8 h-8 text-white ml-1 group-hover:text-black transition-colors" />
        </motion.button>
        <h3 className="font-display text-3xl md:text-5xl text-white tracking-wide text-center">
          Paris Fashion Week <br/>
          <span className="italic text-2xl md:text-3xl text-white/70">Autumn / Winter '24</span>
        </h3>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <VideoSection />
      <Footer />
    </div>
  );
}
