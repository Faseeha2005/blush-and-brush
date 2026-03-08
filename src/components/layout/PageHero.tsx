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
      
      {/* Animated decorative elements */}
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

      {/* Decorative rings */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full border border-primary/10 opacity-30" />
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full border border-primary/5 opacity-20" />
        <div className="absolute -bottom-12 -left-12 w-[300px] h-[300px] rounded-full border border-accent/8 opacity-25" />
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
