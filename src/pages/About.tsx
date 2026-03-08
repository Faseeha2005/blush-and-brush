import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem, PageTransition } from "@/components/animations/AnimatedSection";
import { PageHero } from "@/components/layout/PageHero";
import stillLife from "@/assets/gallery/portrait-1.jpg";
import landscape from "@/assets/gallery/landscape-1.jpg";
import botanical from "@/assets/gallery/botanical-1.jpg";
import character from "@/assets/gallery/character-1.jpg";
import animal from "@/assets/gallery/animal-1.jpg";
import abstract from "@/assets/gallery/abstract-1.jpg";

const galleryItems = [
  { image: stillLife, title: "Cozy Moments", description: "A warm still life capturing the essence of quiet moments", alt: "Watercolor still life painting of a vintage teacup with pink flowers resting on old books" },
  { image: landscape, title: "Misty Forest", description: "Dreamlike landscape with ethereal atmosphere", alt: "Soft watercolor landscape painting of misty rolling hills at dawn in dusty rose tones" },
  { image: botanical, title: "Rose Garden", description: "Delicate botanical illustration with soft colors", alt: "Delicate watercolor painting of pink roses with cream-colored background and taupe leaves" },
  { image: character, title: "Enchanted Path", description: "Fantasy forest with glowing lanterns", alt: "Watercolor painting of an enchanted forest path with glowing lanterns and pink foliage" },
  { image: animal, title: "Graceful Swan", description: "Elegant swan on a tranquil pond", alt: "Watercolor painting of a graceful white swan floating on a calm pond with pink water lilies" },
  { image: abstract, title: "Cloud Dreams", description: "Abstract atmospheric piece with gentle gradients", alt: "Abstract watercolor art with flowing cream, taupe and dusty pink washes blending together" },
];

const About = () => {
  return (
    <Layout>
      <PageTransition>
        {/* Hero */}
        <section className="py-20 bg-hero-gradient">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="max-w-3xl mx-auto text-center space-y-6">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                Portfolio
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground">
                My Artistic Journey
              </h1>
              <p className="text-lg text-muted-foreground">
                A collection of dreams, stories, and emotions captured through art.
                Each piece tells a unique story waiting to be discovered.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* About Artist */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <AnimatedSection direction="left" className="space-y-6">
                  <h2 className="font-display text-3xl font-semibold text-foreground">
                    About the Artist
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Hello! I'm Faseeha, a passionate artist dedicated to bringing imagination
                    to life through illustrations and digital art. With over 5 years of
                    experience, I specialize in creating unique, emotionally resonant artwork.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My style blends soft, dreamy aesthetics with detailed craftsmanship.
                    Whether it's a botanical painting, a fantastical landscape,
                    or a serene still life, I pour my heart into every piece.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe art has the power to evoke emotions and tell stories that
                    words cannot express. Explore my <Link to="/services" className="text-primary hover:underline">services</Link> or{" "}
                    <Link to="/contact" className="text-primary hover:underline">get in touch</Link> to bring your vision to life.
                  </p>
                </AnimatedSection>
                <AnimatedSection direction="right" delay={0.2}>
                  <div className="relative">
                    <motion.div
                      className="aspect-square rounded-2xl overflow-hidden shadow-elevated"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={botanical}
                        alt="Watercolor botanical painting by Faseeha featuring pink roses"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="text-center mb-16 space-y-4">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                Gallery
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
                Featured Artwork
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
              {galleryItems.map((item) => (
                <StaggerItem key={item.title}>
                  <motion.div
                    className="gallery-item group"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-[4/5] overflow-hidden rounded-xl border border-border">
                      <img
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-card/95 backdrop-blur-sm rounded-lg p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 border border-primary/20">
                        <h3 className="font-display text-lg font-medium text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimatedSection className="text-center mt-16" delay={0.2}>
              <p className="text-muted-foreground mb-4">Interested in a custom piece?</p>
              <Button asChild size="lg" className="btn-animate">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default About;
