import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

export default function FinalCTA() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="bg-card p-12 md:p-24 text-center border border-agency-border relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-agency-accent"></div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight tracking-tighter">
            Ready to build a digital presence that <span className="text-agency-accent">actually works?</span>
          </h2>
          
          <p className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto">
            Book a free 30-minute call. No pitch. Just a real conversation about your business.
          </p>
          
          <a 
            href="#" 
            className="inline-flex items-center gap-4 px-12 py-6 bg-agency-accent text-background font-bold uppercase tracking-[0.2em] text-lg hover:scale-105 transition-transform duration-300"
          >
            Book Your Free Call <ArrowRight size={24} />
          </a>
          
          <div className="mt-16">
            <span className="text-agency-accent font-display text-xs tracking-[0.8em] uppercase">Blackstride Digital — Built to Move.</span>
          </div>
          
          {/* Decorative watermark */}
          <div className="absolute bottom-[-50px] right-[-50px] opacity-[0.05] pointer-events-none">
             <Logo className="w-96 h-auto opacity-10" color="white" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
