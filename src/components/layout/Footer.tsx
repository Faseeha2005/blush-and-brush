import { Link } from "react-router-dom";
import { Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Centered flex layout */}
        <div className="flex flex-col items-center text-center gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Artistry <span className="text-primary">Studio</span>
            </h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Turning imagination into stunning visual art. Custom illustrations, 
              portraits, and digital artwork crafted with passion.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:hello@artistrystudio.com"
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            hello@artistrystudio.com
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Artistry Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
