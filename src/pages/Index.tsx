import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Sparkles, Heart } from "lucide-react";
import stillLife from "@/assets/gallery/portrait-1.jpg";
import landscape from "@/assets/gallery/landscape-1.jpg";
import botanical from "@/assets/gallery/botanical-1.jpg";

const featuredWorks = [
  { image: stillLife, title: "Cozy Moments", category: "Still Life", alt: "Watercolor still life painting of teacup with pink flowers on vintage books" },
  { image: landscape, title: "Misty Forest", category: "Landscape", alt: "Soft watercolor landscape of misty hills at dawn in dusty rose tones" },
  { image: botanical, title: "Rose Garden", category: "Botanical", alt: "Delicate watercolor painting of pink roses with cream background" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-hero-gradient">
        {/* Animated floating shapes */}
        <div className="absolute top-10 right-[10%] w-64 h-64 rounded-full bg-primary/8 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-10 left-[5%] w-80 h-80 rounded-full bg-secondary/15 blur-3xl animate-[pulse_8s_ease-in-out_infinite_1s]" />
        <div className="absolute top-1/3 right-[30%] w-40 h-40 rounded-full bg-accent/10 blur-2xl animate-[pulse_5s_ease-in-out_infinite_2s]" />
        <div className="absolute bottom-1/3 right-[15%] w-56 h-56 rounded-full bg-primary/5 blur-3xl animate-[pulse_7s_ease-in-out_infinite_0.5s]" />

        {/* Decorative paint strokes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -right-10 w-[500px] h-[500px] rounded-full border border-primary/10 opacity-40" />
          <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full border border-primary/5 opacity-30" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full border border-accent/10 opacity-30" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-primary text-sm font-medium tracking-wide">Welcome to Blush & Brush</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1]">
                Where Every
                <br />
                Stroke Tells a{" "}
                <span className="text-primary italic relative">
                  Story
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M1 5.5C47 2 153 2 199 5.5" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                  </svg>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Custom illustrations, paintings, and digital artwork crafted with 
                passion — transforming your vision into timeless pieces.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild size="lg" className="btn-animate text-base px-8 py-6 rounded-full shadow-elevated">
                  <Link to="/contact">
                    Let's Create Together
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 rounded-full">
                  <Link to="/about">Explore Portfolio</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-4">
                <div>
                  <p className="font-display text-3xl font-semibold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Artworks Created</p>
                </div>
                <div className="w-px bg-border" />
                <div>
                  <p className="font-display text-3xl font-semibold text-foreground">30+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="w-px bg-border" />
                <div>
                  <p className="font-display text-3xl font-semibold text-foreground">5+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Right: Image collage */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Main featured image */}
                <div className="absolute top-[5%] left-[10%] w-[65%] aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated rotate-[-3deg] hover:rotate-0 transition-transform duration-500 z-20">
                  <img src={stillLife} alt="Watercolor painting of vintage desk with paintbrushes and rose petals" className="w-full h-full object-cover" />
                </div>
                {/* Secondary image */}
                <div className="absolute top-[15%] right-[5%] w-[50%] aspect-[3/4] rounded-2xl overflow-hidden shadow-card rotate-[5deg] hover:rotate-0 transition-transform duration-500 z-10">
                  <img src={botanical} alt="Delicate watercolor botanical painting" className="w-full h-full object-cover" />
                </div>
                {/* Third image */}
                <div className="absolute bottom-[5%] left-[20%] w-[45%] aspect-[4/3] rounded-2xl overflow-hidden shadow-card rotate-[2deg] hover:rotate-0 transition-transform duration-500 z-30">
                  <img src={landscape} alt="Soft watercolor landscape" className="w-full h-full object-cover" />
                </div>
                {/* Decorative circle */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center z-40">
                  <Palette className="w-10 h-10 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Featured Work */}
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
              A glimpse into my artistic journey. Explore more in the{" "}
              <Link to="/about" className="text-primary hover:underline">full portfolio</Link>.
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
                    alt={work.alt}
                    loading="lazy"
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

      {/* Why Choose Me */}
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
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/15 flex items-center justify-center">
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
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/15 flex items-center justify-center">
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
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/15 flex items-center justify-center">
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

      {/* CTA */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
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
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
