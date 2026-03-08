import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Sparkles, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem, PageTransition } from "@/components/animations/AnimatedSection";
import stillLife from "@/assets/gallery/portrait-1.jpg";
import botanical from "@/assets/gallery/botanical-1.jpg";
import landscape from "@/assets/gallery/landscape-1.jpg";

const featuredWorks = [
  { image: stillLife, title: "Cozy Moments", category: "Still Life", alt: "Watercolor still life painting of teacup with pink flowers on vintage books" },
  { image: landscape, title: "Misty Forest", category: "Landscape", alt: "Soft watercolor landscape of misty hills at dawn in dusty rose tones" },
  { image: botanical, title: "Rose Garden", category: "Botanical", alt: "Delicate watercolor painting of pink roses with cream background" },
];

const Index = () => {
  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-hero-gradient">
          {/* Animated floating shapes */}
          <motion.div
            className="absolute top-10 right-[10%] w-64 h-64 rounded-full bg-primary/8 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 left-[5%] w-80 h-80 rounded-full bg-secondary/15 blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute top-1/3 right-[30%] w-40 h-40 rounded-full bg-accent/10 blur-2xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-10 -right-10 w-[500px] h-[500px] rounded-full border border-primary/10 opacity-40" />
            <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full border border-primary/5 opacity-30" />
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full border border-accent/10 opacity-30" />
          </div>

          <div className="relative z-10 container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text content */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
                >
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-primary text-sm font-medium tracking-wide">Welcome to Blush & Brush</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1]"
                >
                  Where Every
                  <br />
                  Stroke Tells a{" "}
                  <span className="text-primary italic relative">
                    Story
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                      <motion.path
                        d="M1 5.5C47 2 153 2 199 5.5"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        strokeLinecap="round"
                        opacity="0.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, delay: 1 }}
                      />
                    </svg>
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
                >
                  Custom illustrations, paintings, and digital artwork crafted with
                  passion — transforming your vision into timeless pieces.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 pt-2"
                >
                  <Button asChild size="lg" className="btn-animate text-base px-8 py-6 rounded-full shadow-elevated">
                    <Link to="/contact">
                      Let's Create Together
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 rounded-full">
                    <Link to="/about">Explore Portfolio</Link>
                  </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="flex gap-8 pt-4"
                >
                  {[
                    { value: "50+", label: "Artworks Created" },
                    { value: "30+", label: "Happy Clients" },
                    { value: "5+", label: "Years Experience" },
                  ].map((stat, i) => (
                    <div key={stat.label} className="flex items-center gap-8">
                      {i > 0 && <div className="w-px h-10 bg-border -ml-8" />}
                      <div>
                        <p className="font-display text-3xl font-semibold text-foreground">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right: Image collage */}
              <div className="relative w-full mt-10 lg:mt-0">
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto aspect-square">
                  <motion.div
                    initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
                    animate={{ opacity: 1, rotate: -3, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    whileHover={{ rotate: 0, scale: 1.02 }}
                    className="absolute top-[5%] left-[5%] sm:left-[10%] w-[60%] sm:w-[65%] aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated z-20"
                  >
                    <img src={stillLife} alt="Watercolor painting of vintage desk with paintbrushes and rose petals" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, rotate: 10, scale: 0.9 }}
                    animate={{ opacity: 1, rotate: 5, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    whileHover={{ rotate: 0, scale: 1.02 }}
                    className="absolute top-[15%] right-[0%] sm:right-[5%] w-[45%] sm:w-[50%] aspect-[3/4] rounded-2xl overflow-hidden shadow-card z-10"
                  >
                    <img src={botanical} alt="Delicate watercolor botanical painting" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1, type: "spring", stiffness: 200 }}
                    className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center z-40"
                  >
                    <Palette className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-primary" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
            >
              <div className="w-1 h-3 bg-muted-foreground/50 rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Work */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="text-center mb-16 space-y-4">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                Featured Work
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
                Recent Creations
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                A glimpse into my artistic journey. Explore more in the{" "}
                <Link to="/about" className="text-primary hover:underline">full portfolio</Link>.
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
              {featuredWorks.map((work) => (
                <StaggerItem key={work.title}>
                  <motion.div
                    className="gallery-item group cursor-pointer"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-[4/5] overflow-hidden rounded-lg">
                      <img
                        src={work.image}
                        alt={work.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-primary-foreground/80 text-sm">{work.category}</span>
                      <h3 className="text-primary-foreground font-display text-xl font-medium">{work.title}</h3>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimatedSection className="text-center mt-12" delay={0.3}>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">
                  View All Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Why Choose Me */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="text-center mb-16 space-y-4">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                Why Work With Me
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
                Art Made Personal
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
              {[
                { icon: Palette, title: "Unique Style", desc: "Every piece is crafted with a distinctive artistic vision that brings your ideas to life in unexpected ways." },
                { icon: Sparkles, title: "Attention to Detail", desc: "From the initial sketch to the final touches, every detail is carefully considered and refined." },
                { icon: Heart, title: "Made With Love", desc: "Passion drives every stroke. Your vision becomes my mission, creating art that truly resonates." },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <motion.div
                    className="text-center p-8 rounded-2xl bg-card shadow-soft hover:shadow-card transition-shadow duration-300"
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  >
                    <motion.div
                      className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/15 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <item.icon className="h-8 w-8 text-primary" />
                    </motion.div>
                    <h3 className="font-display text-xl font-medium text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <AnimatedSection className="max-w-2xl mx-auto space-y-6">
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
                Ready to Create Something Beautiful?
              </h2>
              <p className="text-muted-foreground text-lg">
                Let's collaborate and bring your vision to life. Every great artwork
                starts with a conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-animate">
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Index;
