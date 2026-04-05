import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We learn your business, goals, and what's holding your digital presence back. (30 min, no pitch)"
  },
  {
    number: "02",
    title: "Build & Launch",
    description: "We move fast. Most projects are live within 2 weeks."
  },
  {
    number: "03",
    title: "Grow Together",
    description: "Stay on retainer and let us handle the rest while you run your business."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter"
          >
            Simple process. <span className="text-agency-accent">Real results.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-agency-border z-0"></div>
          
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: false }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-background border-2 border-agency-accent flex items-center justify-center mb-8 rotate-45 group hover:bg-agency-accent transition-all duration-500 shadow-[0_0_20px_rgba(201,149,42,0.1)]">
                <span className="text-3xl font-display font-bold text-agency-accent -rotate-45 group-hover:text-background transition-colors duration-500">
                  {step.number}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest">{step.title}</h3>
              <p className="text-foreground/60 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
