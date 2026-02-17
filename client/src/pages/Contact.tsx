import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function Contact() {
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const createInquiry = useCreateInquiry();

  const onSubmit = (data: InsertInquiry) => {
    createInquiry.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 block">Get in Touch</span>
          <h1 className="font-display text-5xl md:text-7xl text-white mb-8">
            Start a <br/> <span className="italic text-white/50">Conversation</span>
          </h1>
          <p className="text-muted-foreground text-lg font-light leading-relaxed mb-12 max-w-md">
            Whether you are interested in a custom couture piece or have inquiries about our latest collection, our atelier is at your disposal.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-2">Atelier</h3>
              <p className="text-muted-foreground font-light">
                152 Avenue des Champs-Élysées<br/>
                75008 Paris, France
              </p>
            </div>
            <div>
              <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-2">Direct</h3>
              <p className="text-muted-foreground font-light">
                +33 1 23 45 67 89<br/>
                atelier@nerochaze.com
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card/30 backdrop-blur-sm border border-white/5 p-8 md:p-12"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase tracking-widest text-white/60">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="e.g. Jane Doe" 
                        {...field} 
                        className="bg-transparent border-t-0 border-x-0 border-b border-white/20 rounded-none px-0 py-4 focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground/30 text-white font-light text-lg transition-colors h-auto"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase tracking-widest text-white/60">Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="e.g. jane@example.com" 
                        {...field} 
                        className="bg-transparent border-t-0 border-x-0 border-b border-white/20 rounded-none px-0 py-4 focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground/30 text-white font-light text-lg transition-colors h-auto"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase tracking-widest text-white/60">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your inquiry..." 
                        {...field} 
                        className="bg-transparent border-t-0 border-x-0 border-b border-white/20 rounded-none px-0 py-4 focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground/30 text-white font-light text-lg transition-colors min-h-[150px] resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-4">
                <Button 
                  type="submit" 
                  disabled={createInquiry.isPending}
                  className="w-full bg-white text-black hover:bg-primary hover:text-black rounded-none h-14 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-300"
                >
                  {createInquiry.isPending ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="animate-spin" size={16} /> Sending...
                    </span>
                  ) : (
                    "Send Inquiry"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
