import { Link } from "wouter";
import { Instagram, Facebook, Twitter, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20">
        
        {/* Brand Column */}
        <div className="md:col-span-1 space-y-6">
          <Link href="/">
            <span className="font-display text-2xl font-bold tracking-wider text-white">
              NEROCHAZE
            </span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Redefining elegance through masterful craftsmanship and timeless design. Couture for the modern era.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="md:col-span-1">
          <h4 className="font-display text-lg text-white mb-6">Explore</h4>
          <ul className="space-y-4">
            {[
              { label: "Home", href: "/" },
              { label: "Collections", href: "/#collections" },
              { label: "Philosophy", href: "/#about" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <Link 
                  href={link.href} 
                  className="text-muted-foreground hover:text-primary text-sm tracking-wide transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-1">
          <h4 className="font-display text-lg text-white mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 text-muted-foreground text-sm">
              <MapPin size={16} className="mt-1 shrink-0 text-primary" />
              <span>152 Avenue des Champs-Élysées,<br />75008 Paris, France</span>
            </li>
            <li className="flex items-center space-x-3 text-muted-foreground text-sm">
              <Phone size={16} className="shrink-0 text-primary" />
              <span>+33 1 23 45 67 89</span>
            </li>
            <li className="flex items-center space-x-3 text-muted-foreground text-sm">
              <Mail size={16} className="shrink-0 text-primary" />
              <span>atelier@nerochaze.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-1">
          <h4 className="font-display text-lg text-white mb-6">Newsletter</h4>
          <p className="text-muted-foreground text-sm mb-4">
            Subscribe for exclusive access to new collections and events.
          </p>
          <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border-b border-white/20 pb-2 text-white placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors text-sm"
            />
            <button 
              type="submit" 
              className="text-left text-xs uppercase tracking-widest text-primary hover:text-white transition-colors pt-2"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground/40 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Nerochaze Couture. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-muted-foreground">Privacy Policy</a>
          <a href="#" className="hover:text-muted-foreground">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
