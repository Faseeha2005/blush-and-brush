import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MessageSquare, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { AnimatedSection, PageTransition } from "@/components/animations/AnimatedSection";
import { PageHero } from "@/components/layout/PageHero";

const artworkTypes = [
  "Custom Illustration",
  "Botanical Painting",
  "Landscape Art",
  "Digital Art",
  "Abstract Piece",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    artworkType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Message Sent! ✨",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", artworkType: "", message: "" });
    setIsSubmitting(false);
  };

  const contactItems = [
    { icon: Mail, title: "Email Me", desc: "art@blushandbrush.com" },
    { icon: MessageSquare, title: "Response Time", desc: "Usually within 24-48 hours" },
    { icon: Sparkles, title: "Open for", desc: "Custom artwork & collaborations" },
  ];

  return (
    <Layout>
      <PageTransition>
        <PageHero
          label="Get in Touch"
          title="Let's Create"
          titleAccent="Together"
          description="Have a project in mind? I'd love to hear from you. Fill out the form below and let's start bringing your vision to life."
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <AnimatedSection direction="left" className="lg:col-span-2 space-y-8">
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                      Let's Work Together
                    </h2>
                    <p className="text-muted-foreground">
                      Whether you have a clear vision or just a spark of an idea,
                      I'm here to help bring it to life. Browse my{" "}
                      <Link to="/about" className="text-primary hover:underline">portfolio</Link> or explore{" "}
                      <Link to="/services" className="text-primary hover:underline">services</Link> to learn more.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {contactItems.map((item, i) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <motion.div
                          className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <item.icon className="h-5 w-5 text-primary" />
                        </motion.div>
                        <div>
                          <h4 className="font-medium text-foreground">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="right" delay={0.2} className="lg:col-span-3">
                  <motion.form
                    onSubmit={handleSubmit}
                    className="bg-card rounded-2xl p-8 shadow-card space-y-6"
                    whileHover={{ boxShadow: "var(--shadow-elevated)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="artworkType">Type of Artwork</Label>
                      <Select
                        value={formData.artworkType}
                        onValueChange={(value) => setFormData({ ...formData, artworkType: value })}
                      >
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {artworkTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project, ideas, or any questions you have..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="bg-background resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full btn-animate" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                      I'll get back to you within 24-48 hours. Looking forward to
                      creating something beautiful together!
                    </p>
                  </motion.form>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Contact;
