const stats = [
  { value: "2.500+", label: "Aktive Kunden" },
  { value: "€50M+", label: "Monatlicher Ad Spend" },
  { value: "99.9%", label: "Account Uptime" },
  { value: "< 5 min", label: "Onboarding Zeit" },
];

const Stats = () => {
  return (
    <section className="py-16 md:py-24 bg-background border-y border-border/50">
      <div className="container-tight">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="font-display text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
