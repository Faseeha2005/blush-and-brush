import { Layout } from "@/components/layout/Layout";
import stillLife from "@/assets/gallery/portrait-1.jpg";
import landscape from "@/assets/gallery/landscape-1.jpg";
import botanical from "@/assets/gallery/botanical-1.jpg";
import character from "@/assets/gallery/character-1.jpg";
import animal from "@/assets/gallery/animal-1.jpg";
import abstract from "@/assets/gallery/abstract-1.jpg";

const galleryItems = [
  { image: stillLife, title: "Cozy Moments", description: "A warm still life capturing the essence of quiet moments" },
  { image: landscape, title: "Misty Forest", description: "Dreamlike landscape with ethereal atmosphere" },
  { image: botanical, title: "Rose Garden", description: "Delicate botanical illustration with soft colors" },
  { image: character, title: "The Wanderer", description: "Fantasy character design with magical elements" },
  { image: animal, title: "Whiskers", description: "Whimsical character illustration" },
  { image: abstract, title: "Cloud Dreams", description: "Abstract atmospheric piece with gentle gradients" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
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
          </div>
        </div>
      </section>

      {/* About Artist */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
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
                  Whether it's a portrait capturing someone's essence, a fantastical 
                  character design, or a serene landscape, I pour my heart into every piece.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe art has the power to evoke emotions and tell stories that 
                  words cannot express. Let me help you bring your vision to life.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={botanical}
                    alt="Artist's work"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Gallery
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              Featured Artwork
            </h2>
          </div>

          {/* Clean uniform grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={item.title}
                className="gallery-item group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/5] overflow-hidden rounded-xl border border-border">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-card/95 backdrop-blur-sm rounded-lg p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 border border-primary/20">
                    <h3 className="font-display text-lg font-medium text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
