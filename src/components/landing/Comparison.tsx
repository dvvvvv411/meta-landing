import { Check, X } from "lucide-react";

const features = [
  {
    name: "Spending Limits",
    normal: "Begrenzt & variabel",
    metanetwork: "Unbegrenzt skalierbar",
  },
  {
    name: "Sperrungsrisiko",
    normal: "Hoch bei schneller Skalierung",
    metanetwork: "Minimal durch Agency Trust",
  },
  {
    name: "Trust Level",
    normal: "Standard",
    metanetwork: "Meta Agency Partner",
  },
  {
    name: "Support",
    normal: "Standard Meta Support",
    metanetwork: "Priorisierter Experten-Support",
  },
  {
    name: "Verifizierung",
    normal: "Persönliche Dokumente nötig",
    metanetwork: "Keine eigene Verifizierung",
  },
  {
    name: "Skalierbarkeit",
    normal: "Eingeschränkt",
    metanetwork: "Sofort & unbegrenzt",
  },
];

const Comparison = () => {
  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-tight relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4">Vergleich</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Der Unterschied macht's
          </h2>
          <p className="text-lg text-muted-foreground">
            Sehen Sie, warum MetaNetwork Agency Accounts Ihrem Standard-Account überlegen sind.
          </p>
        </div>

        {/* Two Cards Comparison */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Normal Account Card */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="h-full rounded-3xl bg-muted/50 border border-border/50 p-8 relative">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
                  Normaler Account
                </span>
                <p className="text-muted-foreground/70 text-sm">Standard Meta Ads Account</p>
              </div>

              <div className="space-y-5">
                {features.map((feature) => (
                  <div key={feature.name} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                      <X className="w-3.5 h-3.5 text-destructive/70" />
                    </div>
                    <div>
                      <p className="font-medium text-muted-foreground/80 text-sm">{feature.name}</p>
                      <p className="text-muted-foreground/60 text-sm">{feature.normal}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MetaNetwork Card */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="h-full rounded-3xl relative group">
              {/* Gradient border glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-primary via-accent to-primary rounded-3xl opacity-70 group-hover:opacity-100 transition-opacity blur-sm" />
              <div className="absolute -inset-[1px] bg-gradient-to-br from-primary via-accent to-primary rounded-3xl opacity-50" />
              
              {/* Card content */}
              <div className="relative h-full rounded-3xl bg-background p-8 hover-lift">
                {/* Empfohlen Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold shadow-lg animate-pulse">
                    Empfohlen
                  </span>
                </div>

                <div className="text-center mb-8 mt-4">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    MetaNetwork
                  </span>
                  <p className="text-muted-foreground text-sm">Premium Agency Account</p>
                </div>

                <div className="space-y-5">
                  {features.map((feature) => (
                    <div key={feature.name} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-green-500" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{feature.name}</p>
                        <p className="text-muted-foreground text-sm">{feature.metanetwork}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
