import { ArrowRight, Twitter, Linkedin, Instagram } from "lucide-react";
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
      {/* CTA Banner */}
      {!hideCTA && (
      <div className="border-t border-border/30">
        <div className="container-tight py-12">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border border-primary/20 p-8 md:p-12">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 blur-3xl" />
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
                  Bereit, zu starten?
                </h3>
                <p className="text-muted-foreground">
                  Starte noch heute mit MetaNetwork und skaliere deine Kampagnen.
                </p>
              </div>
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
              >
                Registrieren
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
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
