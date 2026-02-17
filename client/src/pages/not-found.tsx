import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="font-display text-9xl text-white/10 mb-4">404</h1>
      <p className="font-display text-2xl text-white mb-8">Page Not Found</p>
      <Link href="/" className="flex items-center gap-2 text-primary hover:text-white transition-colors uppercase tracking-widest text-sm">
        <ArrowLeft size={16} /> Return Home
      </Link>
    </div>
  );
}
