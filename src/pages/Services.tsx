import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brush, User, Monitor, Wand2 } from "lucide-react";

const services = [
  {
    icon: Brush,
    title: "Custom Illustrations",
    description:
      "Unique, handcrafted illustrations tailored to your vision. Perfect for book covers, editorial work, or personal art pieces that tell your story.",
    features: [
      "Initial concept sketches",
      "Multiple revision rounds",
      "High-resolution files",
      "Commercial usage rights",
    ],
  },
  {
    icon: User,
    title: "Portrait Drawings",
    description:
      "Capture the essence of your loved ones with beautifully detailed portraits. From realistic to stylized, I bring personalities to life on canvas.",
    features: [
      "Digital or traditional medium",
      "Family & couple portraits",
      "Pet portraits available",
      "Various style options",
    ],
  },
  {
    icon: Monitor,
    title: "Digital Art",
    description:
      "Modern digital artwork for any purpose—social media graphics, website illustrations, or digital paintings that stand out in the digital landscape.",
    features: [
      "Optimized for digital use",
      "Social media ready formats",
      "Animation options",
      "Quick turnaround available",
    ],
  },
  {
    icon: Wand2,
    title: "Character & Concept Art",
    description:
      "Bring your characters and worlds to life with detailed concept art. Ideal for game developers, authors, and creative projects seeking unique designs.",
    features: [
      "Full character sheets",
      "Environment concepts",
      "Turnaround views",
      "Style exploration",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Services
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground">
              What I Create
            </h1>
            <p className="text-lg text-muted-foreground">
              From custom illustrations to detailed character designs, I offer a range 
              of artistic services tailored to bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div className="space-y-4 flex-1">
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" className="mt-4">
                      <Link to="/contact">
                        Request This Service
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              The Creative Process
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consult", desc: "Share your vision and ideas" },
                { step: "02", title: "Sketch", desc: "Initial concepts and drafts" },
                { step: "03", title: "Refine", desc: "Revisions until perfect" },
                { step: "04", title: "Deliver", desc: "Final artwork in your hands" },
              ].map((item, index) => (
                <div key={item.step} className="text-center space-y-3 relative">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-display text-xl font-semibold text-primary">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-medium text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  
                  {/* Connector Line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              Have a Project in Mind?
            </h2>
            <p className="text-muted-foreground text-lg">
              I'd love to hear about your ideas. Let's discuss how we can work 
              together to create something special.
            </p>
            <Button asChild size="lg" className="btn-animate">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;