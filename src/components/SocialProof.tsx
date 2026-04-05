import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { Logo } from './Logo';

export default function SocialProof() {
  const stats = [
    { value: "2 Weeks", label: "Average time from contract to launch" },
    { value: "100%", label: "Done-for-you. Your time stays yours." },
    { value: "Month-to-Month", label: "No lock-in. We earn your business every month." }
  ];

  return (
    <section className="py-32 results-contrast-bg text-black overflow-hidden relative">
      {/* Geometric Background Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            rotate: [0, 180, 360],
            x: [0, 150, -100, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="geometric-shape w-[600px] h-[600px] -top-64 -left-64 rounded-full border border-black/5"
        />
        <motion.div 
          animate={{ 
            rotate: [0, -180, -360],
            x: [0, -150, 100, 0],
            y: [0, 100, -50, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="geometric-shape w-[700px] h-[700px] -bottom-64 -right-64 border border-black/5"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 0.8, 1],
            opacity: [0.05, 0.1, 0.05],
            rotate: [45, 135, 225, 315, 405]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="geometric-shape w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-black/5"
        />
        {/* Additional floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, 360]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2
            }}
            className="absolute w-4 h-4 border border-black/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Watermark */}
        <div className="absolute top-0 right-0 opacity-[0.05] pointer-events-none select-none hidden lg:block">
          <Logo className="w-96 h-auto opacity-10" color="black" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-black/60 text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">Performance Metrics</span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-5xl md:text-8xl font-bold leading-none tracking-tighter"
            >
              Results <br />
              <span className="text-black">speak.</span>
            </motion.h2>
          </div>
          <div className="h-[1px] flex-grow bg-black/10 hidden md:block mb-6 mx-12"></div>
          <div className="text-right">
            <p className="text-black/40 text-xs font-bold tracking-widest uppercase mb-2">Verified Outcomes</p>
            <div className="text-black font-display font-bold text-2xl">2024-25</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10 mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: false }}
              className="bg-black/5 p-12 group hover:bg-black/10 transition-colors duration-500"
            >
              <div className="text-black/40 text-xs font-bold tracking-widest uppercase mb-8">0{i + 1}</div>
              <div className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tighter transition-colors duration-500">
                {stat.value}
              </div>
              <p className="text-black/60 font-medium text-sm leading-relaxed max-w-[200px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[1, 2].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm"></div>
              <Quote className="text-black/10 absolute -top-4 -left-4" size={80} />
              <div className="relative">
                <p className="text-2xl md:text-3xl font-medium leading-tight mb-10 text-black tracking-tight">
                  "{i === 0 
                    ? "Blackstride transformed our digital presence in record time. The AI-powered approach is a game changer for our operations."
                    : "The speed of execution was unlike anything we've seen. We went from a concept to a live, high-converting site in under a week."
                  }"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-sm bg-black/5 border border-black/10 flex items-center justify-center text-black font-bold">
                    {i === 0 ? "JD" : "MS"}
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-widest text-black text-sm">{i === 0 ? "James Dalton" : "Marcus Sterling"}</p>
                    <p className="text-xs text-black/60 font-bold tracking-widest uppercase">{i === 0 ? "Founder, Oakwood Grille" : "CEO, Peak Fitness"}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
