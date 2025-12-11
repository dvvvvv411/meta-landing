import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const features = [
  "Verifizierter Meta Agency Account",
  "Unbegrenzte Spending Limits",
  "Automatisiertes Dashboard & API",
  "Priorisierter Support",
  "Sofortige Aktivierung",
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-tight">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-4">
            Pricing
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Alles, was Sie brauchen. Ein fairer Preis.
          </h2>
          <p className="text-lg text-muted-foreground">
            Keine versteckten Kosten. Keine Überraschungen.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-xl mx-auto">
          <div className="glass-card rounded-3xl p-10 md:p-16 text-center">
            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline justify-center gap-2">
                <span className="font-display text-6xl md:text-7xl font-bold text-foreground">150€</span>
              </div>
              <p className="text-xl text-muted-foreground mt-2">pro Monat</p>
              <p className="text-muted-foreground mt-1">
                + <span className="font-medium text-foreground">2%</span> Top-Up Fee
              </p>
            </div>

            {/* CTA Button */}
            <Button variant="hero" size="xl" className="w-full max-w-xs mx-auto group mb-4">
              Jetzt starten
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-sm text-muted-foreground mb-8">
              Keine Bindung. Jederzeit kündbar.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-border mb-8" />

            {/* Features */}
            <div className="space-y-3 text-left max-w-xs mx-auto">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
