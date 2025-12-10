import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const benefits = [
  "Sofortige Aktivierung",
  "Keine Setup Kosten",
  "Skalierbare Limits",
  "API-Synchronisierung",
  "Automatische Rechnungen",
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-accent/3 to-transparent rounded-full" />
      </div>

      <div className="container-tight relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Transparent. Fair. Skalierbar.
          </h2>
        </div>

        {/* Pricing Card */}
        <div className="max-w-xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-2xl" />
            
            <div className="relative rounded-[2.5rem] glass-card border-2 border-primary/20 p-8 md:p-12">
              {/* Badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Agency Account</span>
                </div>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="font-display text-5xl md:text-6xl font-bold text-foreground">150€</span>
                  <span className="text-xl text-muted-foreground">/Monat</span>
                </div>
                <p className="text-lg text-muted-foreground">
                  + <span className="font-semibold text-foreground">2%</span> Top-Up Fee
                </p>
              </div>

              {/* Benefits */}
              <div className="flex flex-col gap-3 mb-10">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button variant="hero" size="xl" className="w-full group">
                Jetzt registrieren
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Keine Bindung. Jederzeit kündbar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
