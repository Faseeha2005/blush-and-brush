import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Sparkles, Heart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import stillLife from "@/assets/gallery/portrait-1.jpg";
import landscape from "@/assets/gallery/landscape-1.jpg";
import botanical from "@/assets/gallery/botanical-1.jpg";

const featuredWorks = [
  { image: stillLife, title: "Cozy Moments", category: "Still Life" },
  { image: landscape, title: "Misty Forest", category: "Landscape" },
  { image: botanical, title: "Rose Garden", category: "Botanical" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Artistic background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Welcome to My Studio
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight">
              Turning Ideas Into{" "}
              <span className="text-primary italic">Art</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
              Custom illustrations, portraits, and digital artwork crafted with 
              passion and attention to every detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="btn-animate">
                <Link to="/contact">
                  Commission Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Featured Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              Recent Creations
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              A glimpse into my artistic journey and the stories I love to tell through art.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWorks.map((work, index) => (
              <div
                key={work.title}
                className="gallery-item group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/5] overflow-hidden rounded-lg">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-primary-foreground/80 text-sm">
                    {work.category}
                  </span>
                  <h3 className="text-primary-foreground font-display text-xl font-medium">
                    {work.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/about">
                View All Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Why Work With Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              Art Made Personal
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-card shadow-soft hover:shadow-card transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                Unique Style
              </h3>
              <p className="text-muted-foreground text-sm">
                Every piece is crafted with a distinctive artistic vision that 
                brings your ideas to life in unexpected ways.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card shadow-soft hover:shadow-card transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                Attention to Detail
              </h3>
              <p className="text-muted-foreground text-sm">
                From the initial sketch to the final touches, every detail is 
                carefully considered and refined.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card shadow-soft hover:shadow-card transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                Made With Love
              </h3>
              <p className="text-muted-foreground text-sm">
                Passion drives every stroke. Your vision becomes my mission, 
                creating art that truly resonates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-hero-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-muted-foreground text-lg">
              Let's collaborate and bring your vision to life. Every great artwork 
              starts with a conversation.
            </p>
            <Button asChild size="lg" className="btn-animate">
              <Link to="/contact">
                Start Your Commission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
