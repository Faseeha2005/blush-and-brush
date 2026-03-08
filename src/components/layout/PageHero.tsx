import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { ReactNode } from "react";
import { Sparkles } from "lucide-react";

interface PageHeroProps {
  label: string;
  title: string;
  titleAccent?: string;
  description: ReactNode;
  image?: string;
  imageAlt?: string;
}

export function PageHero({ label, title, titleAccent, description, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-hero-gradient">
      {/* Animated floating blobs */}
      <motion.div
        className="absolute top-[5%] right-[5%] w-80 h-80 rounded-full bg-primary/8 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[0%] left-[0%] w-[500px] h-[500px] rounded-full bg-secondary/12 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <motion.div
        className="absolute top-[50%] left-[40%] w-48 h-48 rounded-full bg-accent/6 blur-2xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Decorative rings */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full border border-primary/10 opacity-30" />
        <div className="absolute -top-28 -right-28 w-[600px] h-[600px] rounded-full border border-primary/5 opacity-20" />
        <div className="absolute -bottom-16 -left-16 w-[350px] h-[350px] rounded-full border border-accent/8 opacity-25" />
        <div className="absolute -bottom-24 -left-24 w-[450px] h-[450px] rounded-full border border-accent/5 opacity-15" />

        {/* Floating diamonds */}
        <motion.div
          className="absolute top-[20%] right-[20%] w-5 h-5 rotate-45 border border-primary/20"
          animate={{ rotate: [45, 90, 45], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[25%] left-[12%] w-4 h-4 rotate-45 border border-accent/15"
          animate={{ rotate: [45, 90, 45], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-[60%] right-[35%] w-3 h-3 rotate-45 bg-primary/10"
          animate={{ rotate: [45, 135, 45], scale: [1, 1.3, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Floating dots */}
        <motion.div
          className="absolute top-[30%] left-[18%] w-2 h-2 rounded-full bg-primary/20"
          animate={{ y: [0, -10, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[15%] right-[38%] w-3 h-3 rounded-full bg-accent/15"
          animate={{ y: [0, 8, 0], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.div
          className="absolute bottom-[30%] right-[15%] w-2.5 h-2.5 rounded-full bg-primary/15"
          animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Animated paint stroke SVGs */}
        <svg className="absolute top-[12%] left-[5%] w-36 h-36 opacity-[0.06] text-primary" viewBox="0 0 120 120" fill="none">
          <motion.path
            d="M10 60 C30 20, 90 20, 110 60 C90 100, 30 100, 10 60Z"
            stroke="currentColor"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
          />
        </svg>

        <svg className="absolute bottom-[15%] right-[8%] w-28 h-28 opacity-[0.05] text-accent" viewBox="0 0 100 100" fill="none">
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

        {/* Cross shapes */}
        <motion.div
          className="absolute top-[45%] left-[7%] opacity-[0.07]"
          animate={{ rotate: [0, 90, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-5 h-[1.5px] bg-primary absolute top-1/2 left-0 -translate-y-1/2" />
          <div className="h-5 w-[1.5px] bg-primary absolute left-1/2 top-0 -translate-x-1/2" />
        </motion.div>

        {/* Wavy line */}
        <svg className="absolute bottom-[10%] left-[15%] w-[220px] h-8 opacity-[0.05] text-primary" viewBox="0 0 200 20" fill="none">
          <motion.path
            d="M0 10 Q25 0 50 10 T100 10 T150 10 T200 10"
            stroke="currentColor"
            strokeWidth="1.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          />
        </svg>
      </div>

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className={`grid grid-cols-1 ${image ? 'lg:grid-cols-2' : ''} gap-12 items-center`}>
          {/* Text content */}
          <div className={`space-y-6 ${image ? 'text-left' : 'max-w-3xl mx-auto text-center'}`}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
                {label}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.08]"
            >
              {title}
              {titleAccent && (
                <>
                  <br className="hidden sm:block" />
                  <span className="text-primary italic relative inline-block mt-1">
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
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative"
            >
              {/* Decorative quote line */}
              <div className={`absolute top-0 ${image ? 'left-0' : 'left-1/2 -translate-x-1/2'} w-12 h-[2px] bg-primary/30 -mt-3`} />
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-light tracking-wide pt-4"
                style={{ fontStyle: 'italic' }}
              >
                {description}
              </p>
            </motion.div>

            {/* Decorative separator */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className={`flex items-center gap-3 pt-2 ${image ? '' : 'justify-center'}`}
            >
              <div className="h-px w-8 bg-primary/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              <div className="h-px w-16 bg-primary/20" />
              <div className="w-1 h-1 rounded-full bg-primary/30" />
              <div className="h-px w-8 bg-primary/15" />
            </motion.div>
          </div>

          {/* Optional image */}
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <motion.div
                  className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated border border-border/50"
                  whileHover={{ scale: 1.02, rotate: -1 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={image}
                    alt={imageAlt || ""}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Image decorative accents */}
                <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-primary/8 rounded-full blur-2xl" />
                <div className="absolute -top-3 -left-3 w-20 h-20 bg-accent/6 rounded-full blur-xl" />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-full h-full rounded-2xl border border-primary/15 -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/60 to-transparent" />
    </section>
  );
}
