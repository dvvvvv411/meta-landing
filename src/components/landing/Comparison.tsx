import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Spending Limits",
    normal: "Begrenzt & variabel",
    metanetwork: "Unbegrenzt skalierbar",
  },
  {
    feature: "Sperrungsrisiko",
    normal: "Hoch bei schneller Skalierung",
    metanetwork: "Minimal durch Agency Trust",
  },
  {
    feature: "Trust Level",
    normal: "Standard",
    metanetwork: "Meta Agency Partner",
  },
  {
    feature: "Support",
    normal: "Standard Meta Support",
    metanetwork: "Priorisierter Experten-Support",
  },
  {
    feature: "Verifizierung",
    normal: "Persönliche Dokumente nötig",
    metanetwork: "Keine eigene Verifizierung",
  },
  {
    feature: "Skalierbarkeit",
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

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="rounded-3xl glass-card overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-secondary/50 border-b border-border/30">
              <div className="font-display font-semibold text-foreground">Feature</div>
              <div className="text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                  Normaler Account
                </span>
              </div>
              <div className="text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium">
                  MetaNetwork
                </span>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-border/30">
              {comparisonData.map((row, index) => (
                <div 
                  key={row.feature}
                  className="grid grid-cols-3 gap-4 p-6 hover:bg-secondary/20 transition-colors"
                >
                  <div className="font-medium text-foreground">{row.feature}</div>
                  <div className="flex items-center justify-center gap-2 text-center">
                    <X className="w-4 h-4 text-destructive/70 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{row.normal}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-center">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-foreground font-medium">{row.metanetwork}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
