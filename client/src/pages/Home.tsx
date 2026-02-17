import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowDown, Play } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { heroImage, galleryImages } from "@/lib/images";
import { galleryVideos } from "@/lib/videos";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useSpring(0, { damping: 20, stiffness: 200 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 200 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <>
      <div 
        className="custom-cursor" 
        style={{ left: position.x, top: position.y, transform: 'translate(-50%, -50%)' }}
      />
      <motion.div 
        className="custom-cursor-follower"
        style={{ 
          x: cursorX, 
          y: cursorY,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(var(--primary), 0.1)' : 'transparent'
        }}
      />
    </>
  );
};

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
        <img
          src={heroImage.src}
          alt={heroImage.title}
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
          {heroImage.title}
          <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 italic font-light text-white/90">
            {heroImage.subtitle}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10"
        >
          {heroImage.description}
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
  return (
    <section id="collections" className="py-24 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Selected Works</span>
          <h2 className="font-display text-4xl md:text-5xl text-white">The Collection</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {galleryImages.map((img, index) => (
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
    <section className="h-screen w-full relative overflow-hidden group">
      {galleryVideos.map((video, index) => (
        <div key={index} className="h-full w-full relative">
          <video
            src={video.src}
            poster={video.poster}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-1000 scale-105 group-hover:scale-100 transition-transform duration-[2000ms]"
          />
          
          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 backdrop-blur-[2px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="text-center p-12 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl"
            >
              <h3 className="font-display text-4xl md:text-6xl text-white tracking-tighter mb-4">
                {video.title}
              </h3>
              <p className="italic text-xl md:text-2xl text-primary/80 font-light">
                {video.subtitle}
              </p>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[1px] bg-primary/30 mt-8 mx-auto"
              />
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <CustomCursor />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <VideoSection />
      <Footer />
    </div>
  );
}
