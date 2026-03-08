import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { ReactNode } from "react";

interface PageHeroProps {
  label: string;
  title: string;
  titleAccent?: string;
  description: ReactNode;
}

export function PageHero({ label, title, titleAccent, description }: PageHeroProps) {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Animated floating blobs */}
      <motion.div
        className="absolute top-[10%] right-[8%] w-72 h-72 rounded-full bg-primary/8 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[5%] left-[5%] w-96 h-96 rounded-full bg-secondary/12 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <motion.div
        className="absolute top-[40%] left-[30%] w-48 h-48 rounded-full bg-accent/8 blur-2xl"
        animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* ── Decorative shapes & patterns ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large concentric rings — top-right */}
        <div className="absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full border border-primary/10 opacity-30" />
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full border border-primary/5 opacity-20" />
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-primary/[0.03] opacity-15" />

        {/* Concentric rings — bottom-left */}
        <div className="absolute -bottom-12 -left-12 w-[300px] h-[300px] rounded-full border border-accent/8 opacity-25" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full border border-accent/5 opacity-15" />

        {/* Floating paint-brush-like strokes (SVG) */}
        <svg className="absolute top-[15%] left-[6%] w-32 h-32 opacity-[0.06] text-primary" viewBox="0 0 120 120" fill="none">
          <motion.path
            d="M10 60 C30 20, 90 20, 110 60 C90 100, 30 100, 10 60Z"
            stroke="currentColor"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
          />
        </svg>

        <svg className="absolute bottom-[18%] right-[10%] w-24 h-24 opacity-[0.05] text-accent" viewBox="0 0 100 100" fill="none">
          <motion.path
            d="M20 80 Q50 10 80 80"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 1 }}
          />
        </svg>

        {/* Diamond shapes */}
        <motion.div
          className="absolute top-[22%] right-[22%] w-6 h-6 rotate-45 border border-primary/15"
          animate={{ rotate: [45, 90, 45], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[25%] left-[15%] w-4 h-4 rotate-45 border border-accent/15"
          animate={{ rotate: [45, 90, 45], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-[55%] right-[35%] w-3 h-3 rotate-45 bg-primary/10"
          animate={{ rotate: [45, 135, 45], scale: [1, 1.3, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Small floating circles / dots */}
        <motion.div
          className="absolute top-[30%] left-[20%] w-2 h-2 rounded-full bg-primary/20"
          animate={{ y: [0, -8, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[18%] right-[40%] w-3 h-3 rounded-full bg-accent/15"
          animate={{ y: [0, 6, 0], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.div
          className="absolute bottom-[30%] right-[18%] w-2.5 h-2.5 rounded-full bg-primary/15"
          animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-[40%] left-[35%] w-1.5 h-1.5 rounded-full bg-accent/20"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Wavy line across bottom area */}
        <svg className="absolute bottom-[12%] left-[10%] w-[200px] h-8 opacity-[0.06] text-primary" viewBox="0 0 200 20" fill="none">
          <motion.path
            d="M0 10 Q25 0 50 10 T100 10 T150 10 T200 10"
            stroke="currentColor"
            strokeWidth="1.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          />
        </svg>

        {/* Cross / plus shapes */}
        <motion.div
          className="absolute top-[45%] left-[8%] opacity-[0.08]"
          animate={{ rotate: [0, 90, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-5 h-[1.5px] bg-primary absolute top-1/2 left-0 -translate-y-1/2" />
          <div className="h-5 w-[1.5px] bg-primary absolute left-1/2 top-0 -translate-x-1/2" />
        </motion.div>

        <motion.div
          className="absolute top-[12%] right-[15%] opacity-[0.06]"
          animate={{ rotate: [0, -90, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          <div className="w-4 h-[1px] bg-accent absolute top-1/2 left-0 -translate-y-1/2" />
          <div className="h-4 w-[1px] bg-accent absolute left-1/2 top-0 -translate-x-1/2" />
        </motion.div>
      </div>

      {/* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium uppercase tracking-wider"
          >
            {label}
          </motion.span>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1]">
            {title}
            {titleAccent && (
              <>
                {" "}
                <span className="text-primary italic relative inline-block">
                  {titleAccent}
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <motion.path
                      d="M1 5.5C47 2 153 2 199 5.5"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                  </svg>
                </span>
              </>
            )}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </AnimatedSection>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/50 to-transparent" />
    </section>
  );
}
