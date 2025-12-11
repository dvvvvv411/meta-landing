import { ArrowRight, Twitter, Linkedin, Instagram, CheckCircle2, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const footerLinks = {
  product: [
    { label: "Features", href: "/#features" },
    { label: "So funktioniert's", href: "/wie-funktioniert-es" },
    { label: "Sicherheit", href: "/sicherheit" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ],
  company: [
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Blog", href: "#" },
    { label: "Karriere", href: "#" },
    { label: "Kontakt", href: "#" },
  ],
  legal: [
    { label: "Datenschutz", href: "#" },
    { label: "AGB", href: "#" },
    { label: "Impressum", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

interface FooterProps {
  hideCTA?: boolean;
}

const Footer = ({ hideCTA = false }: FooterProps) => {
  return (
    <footer className="relative">
      {/* CTA Banner - Modern Design */}
      {!hideCTA && (
      <div className="border-t border-border/30">
        <div className="container-tight py-10">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-background via-secondary/30 to-background border border-border/50 p-6 md:p-8">
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Gradient Orbs */}
              <div className="absolute -top-20 -left-20 w-[250px] h-[250px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-20 -right-20 w-[280px] h-[280px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
              
              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} />
              
              {/* Floating Elements */}
              <div className="absolute top-6 right-[20%] w-2 h-2 rounded-full bg-primary/30 animate-ping" style={{ animationDuration: "3s" }} />
              <div className="absolute bottom-6 left-[15%] w-1.5 h-1.5 rounded-full bg-accent/30 animate-ping" style={{ animationDuration: "4s", animationDelay: "1s" }} />
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-foreground/70 text-xs">Keine Kreditkarte erforderlich</span>
              </div>
              
              {/* Headline */}
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                Bereit durchzustarten?
              </h3>
              <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto mb-5">
                Erstelle jetzt deinen Account und starte in wenigen Minuten mit skalierbarem Meta Advertising.
              </p>
              
              {/* CTA Button */}
              <Button 
                variant="hero"
                size="lg" 
                className="group"
              >
                Jetzt kostenlos registrieren
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* Trust Elements */}
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-5 text-muted-foreground text-xs md:text-sm">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                  Sofort startklar
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-primary" />
                  DSGVO-konform
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-accent" />
                  24h Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Main Footer */}
      <div className="bg-secondary/20 border-t border-border/30">
        <div className="container-tight py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand & Social */}
            <div className="col-span-2">
              <Link to="/" className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="text-primary-foreground font-display font-bold text-sm">M</span>
                </div>
                <span className="font-display font-semibold text-lg text-foreground">
                  MetaNetwork
                </span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs mb-6 leading-relaxed">
                Premium Meta Ads Accounts für professionelles Performance Marketing. Sicher, skalierbar, sofort einsatzbereit.
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                Produkt
              </h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                Unternehmen
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                Rechtliches
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30">
          <div className="container-tight py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} MetaNetwork.Agency. Alle Rechte vorbehalten.
              </p>
              
              {/* Status Indicator */}
              <a 
                href="#" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="group-hover:text-foreground transition-colors">
                  Alle Systeme operativ
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
