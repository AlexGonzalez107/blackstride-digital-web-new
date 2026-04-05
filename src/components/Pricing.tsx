import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: "Starter",
    price: "$1,500-3K",
    period: "+ $150/mo",
    description: "Perfect for new businesses ready to get online fast.",
    lane: "FOR NEW BUSINESSES THAT NEED A CLEAN LAUNCH LANE.",
    deliverables: "5 DELIVERABLES",
    features: [
      "Templated website build",
      "Google Business setup",
      "Brand kit (logo + colors)",
      "Mobile-responsive design",
      "Basic SEO setup"
    ],
    cta: "Get Started",
    recommended: false
  },
  {
    name: "Growth",
    price: "$3-7K",
    period: "+ $300/mo",
    description: "For businesses ready to compete and convert online.",
    lane: "FOR TEAMS READY TO COMPETE AND CONVERT CONSISTENTLY.",
    deliverables: "6 DELIVERABLES",
    features: [
      "Custom-designed website",
      "SEO strategy & implementation",
      "Email marketing setup",
      "Social media templates",
      "Analytics dashboard",
      "Content strategy"
    ],
    cta: "Get Started",
    recommended: true
  },
  {
    name: "Premium",
    price: "$7-15K",
    period: "+ $500/mo+",
    description: "The full digital suite for serious growth.",
    lane: "FOR OPERATORS WHO NEED THE FULL DIGITAL GROWTH STACK.",
    deliverables: "8 DELIVERABLES",
    features: [
      "Full custom digital suite",
      "Paid ad management",
      "Advanced analytics & reporting",
      "Content creation & copywriting",
      "Ongoing optimization",
      "Dedicated account manager"
    ],
    cta: "Get Started",
    recommended: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <div>
            <span className="section-label">Services</span>
            <h2 className="text-5xl md:text-7xl font-bold leading-none mb-4 tracking-tighter">
              Packages That Fit Your <br /> Business
            </h2>
          </div>
          <div className="lg:max-w-md">
            <p className="text-foreground/50 text-lg leading-relaxed mb-8">
              No bloated agency markup. Senior-level output at a fraction of the cost, structured in lanes that make it easier to choose what your business actually needs.
            </p>
            <div className="flex flex-wrap gap-3">
              {["NO BLOATED AGENCY MARKUP", "SENIOR-LEVEL OUTPUT", "STRUCTURED FOR SPEED"].map(label => (
                <span key={label} className="text-[9px] font-bold tracking-widest px-3 py-1.5 bg-card border border-agency-border text-foreground/60">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: false }}
              className={`relative p-10 glass-card flex flex-col ${tier.recommended ? 'border-agency-accent/40 ring-1 ring-agency-accent/20' : ''}`}
            >
              {tier.recommended && (
                <div className="absolute top-0 right-0 px-6 py-2 bg-agency-accent text-background text-[10px] font-bold tracking-[0.4em] uppercase shadow-lg">
                  Recommended
                </div>
              )}
              
              <div className="mb-10 pt-4">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold">{tier.name}</h3>
                  <span className="text-[9px] font-bold tracking-widest text-foreground/40">{tier.deliverables}</span>
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-bold tracking-tighter">{tier.price}</span>
                  <span className="text-foreground/40 text-sm font-medium">{tier.period}</span>
                </div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-agency-accent mb-6 leading-relaxed">
                  {tier.lane}
                </p>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {tier.features.map(feature => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <div className="w-1.5 h-1.5 bg-agency-accent/60 mt-1.5 shrink-0"></div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={`w-full py-5 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
                  tier.recommended 
                    ? 'bg-agency-accent text-background hover:bg-foreground hover:text-background' 
                    : 'border border-agency-border text-foreground hover:border-agency-accent'
                }`}
              >
                {tier.cta} <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

