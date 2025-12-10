import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Server, 
  Database, 
  Lock, 
  FileCheck, 
  Layers, 
  Activity,
  Check,
  Zap,
  Globe,
  RefreshCw,
  ArrowRight,
  Radio,
  GitBranch,
  BarChart3,
  Bell,
  Eye
} from "lucide-react";

const SecurityPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="container-tight relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Sicherheit & Zuverlässigkeit</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Infrastruktur auf{" "}
                <span className="gradient-text">Enterprise-Level</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Gebaut für maximale Sicherheit, Verfügbarkeit und Transparenz – 
                wie die führenden Web3-Protokolle.
              </p>
              
              {/* Live Status Indicator */}
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75" />
                </div>
                <span className="text-sm font-medium">Alle Systeme operativ</span>
                <span className="text-xs text-muted-foreground font-mono">99.99% Uptime</span>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Architecture Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container-tight">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
                <Server className="w-3.5 h-3.5" />
                Infrastruktur
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Verteilte Systemarchitektur</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Multi-Region Deployment mit automatischem Failover für maximale Verfügbarkeit.
              </p>
            </div>

            {/* Tech Diagram Card */}
            <div className="mb-12 p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border glow-primary">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Edge Layer */}
                <div className="text-center p-6 rounded-xl bg-background/50 border border-primary/20">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-1">Edge Layer</h4>
                  <p className="text-xs text-muted-foreground font-mono">CDN + WAF</p>
                  <div className="mt-3 flex justify-center gap-1">
                    {[1,2,3].map((i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-green-500" />
                    ))}
                  </div>
                </div>

                {/* Connection Lines */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
                  <Zap className="w-5 h-5 text-primary mx-2" />
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
                </div>

                {/* Processing Layer */}
                <div className="text-center p-6 rounded-xl bg-background/50 border border-accent/20">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Server className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-semibold mb-1">Processing</h4>
                  <p className="text-xs text-muted-foreground font-mono">Auto-Scaling Cluster</p>
                  <div className="mt-3 flex justify-center gap-1">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-green-500" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Metrics Row */}
              <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-primary">99.99%</p>
                  <p className="text-xs text-muted-foreground">Uptime SLA</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-accent">&lt;50ms</p>
                  <p className="text-xs text-muted-foreground">Avg. Latency</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold">3</p>
                  <p className="text-xs text-muted-foreground">Regionen</p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Globe, title: "Multi-Region", desc: "EU, US, APAC" },
                { icon: RefreshCw, title: "Load Balancing", desc: "Automatische Verteilung" },
                { icon: Zap, title: "Auto-Failover", desc: "<30s Recovery" },
                { icon: Layers, title: "Horizontale Skalierung", desc: "On-Demand" }
              ].map((feature, index) => (
                <div key={index} className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary mb-2" />
                  <h4 className="font-semibold text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Handling Section */}
        <section className="py-16 md:py-24">
          <div className="container-tight">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Encryption Flow Card */}
              <div className="order-2 lg:order-1">
                <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
                  <div className="space-y-4">
                    {[
                      { layer: "Data at Rest", encryption: "AES-256-GCM", status: "Encrypted" },
                      { layer: "Data in Transit", encryption: "TLS 1.3", status: "Secured" },
                      { layer: "Key Management", encryption: "HSM-backed", status: "Protected" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border">
                        <div className="flex items-center gap-3">
                          <Lock className="w-4 h-4 text-primary" />
                          <div>
                            <p className="font-medium text-sm">{item.layer}</p>
                            <p className="text-xs text-muted-foreground font-mono">{item.encryption}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <span className="text-xs text-green-500 font-medium">{item.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
                  <Database className="w-3.5 h-3.5" />
                  Data Security
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Verschlüsselung auf jeder Ebene
                </h2>
                <p className="text-muted-foreground mb-6">
                  Ihre Daten sind durch mehrschichtige Verschlüsselung geschützt – 
                  von der Übertragung bis zur Speicherung.
                </p>
                <ul className="space-y-3">
                  {[
                    "Vollständige Datenisolierung pro Kunde",
                    "Automatische Backups alle 6 Stunden",
                    "Point-in-Time Recovery bis zu 30 Tage",
                    "Verschlüsselte Audit-Logs"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container-tight">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
                <FileCheck className="w-3.5 h-3.5" />
                Compliance
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Zertifizierte Sicherheitsstandards</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Wir erfüllen höchste Sicherheits- und Datenschutzstandards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  title: "DSGVO-konform", 
                  subtitle: "EU Datenschutz", 
                  status: "Zertifiziert",
                  icon: "🇪🇺"
                },
                { 
                  title: "ISO 27001", 
                  subtitle: "Informationssicherheit", 
                  status: "Aligned",
                  icon: "🛡️"
                },
                { 
                  title: "SOC 2 Type II", 
                  subtitle: "Security & Availability", 
                  status: "In Progress",
                  icon: "📋"
                }
              ].map((cert, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border text-center hover:border-primary/30 transition-colors">
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{cert.subtitle}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {cert.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Redundant Architecture Section */}
        <section className="py-16 md:py-24">
          <div className="container-tight">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent mb-4">
                  <GitBranch className="w-3.5 h-3.5" />
                  High Availability
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Zero Single Point of Failure
                </h2>
                <p className="text-muted-foreground mb-6">
                  Unsere Architektur ist so konzipiert, dass der Ausfall einer Komponente 
                  niemals den gesamten Service beeinträchtigt.
                </p>
                <ul className="space-y-3">
                  {[
                    "Automatische Disaster Recovery",
                    "Cross-Region Replication",
                    "Health-Check Monitoring alle 30s",
                    "Graceful Degradation"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Redundancy Diagram */}
              <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border glow-accent">
                <div className="flex flex-col gap-4">
                  {[
                    { label: "Primary", region: "EU-Frankfurt", status: "Active" },
                    { label: "Secondary", region: "EU-Amsterdam", status: "Standby" },
                    { label: "Tertiary", region: "US-Virginia", status: "Standby" }
                  ].map((node, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-green-500' : 'bg-yellow-500'}`} />
                          <div>
                            <p className="font-semibold text-sm">{node.label}</p>
                            <p className="text-xs text-muted-foreground font-mono">{node.region}</p>
                          </div>
                        </div>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          index === 0 ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'
                        }`}>
                          {node.status}
                        </span>
                      </div>
                      {index < 2 && (
                        <div className="flex justify-center py-2">
                          <div className="w-px h-4 bg-border" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground">Recovery Time Objective</p>
                  <p className="text-2xl font-bold text-accent">&lt;30 Sekunden</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real-Time Monitoring Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container-tight">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
                <Activity className="w-3.5 h-3.5" />
                Real-Time Monitoring
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Vollständige Transparenz in Echtzeit</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Überwachen Sie alle Systemmetriken und erhalten Sie sofortige Benachrichtigungen.
              </p>
            </div>

            {/* Dashboard Mockup */}
            <div className="mb-12 p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
              {/* Metrics Header */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Response Time", value: "42ms", trend: "↓ 12%" },
                  { label: "Error Rate", value: "0.01%", trend: "↓ 5%" },
                  { label: "Throughput", value: "12.4k/s", trend: "↑ 8%" },
                  { label: "Active Connections", value: "2,847", trend: "↑ 3%" }
                ].map((metric, index) => (
                  <div key={index} className="p-4 rounded-xl bg-background/50 border border-border">
                    <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                    <p className="text-xl font-bold font-mono">{metric.value}</p>
                    <p className="text-xs text-green-500">{metric.trend}</p>
                  </div>
                ))}
              </div>

              {/* Graph Mockup */}
              <div className="h-32 rounded-xl bg-background/50 border border-border p-4 relative overflow-hidden">
                <div className="absolute inset-0 flex items-end justify-around px-4 pb-4">
                  {[40, 65, 45, 80, 55, 70, 60, 75, 50, 85, 65, 70].map((height, index) => (
                    <div
                      key={index}
                      className="w-full max-w-[20px] bg-gradient-to-t from-primary to-accent rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <Radio className="w-3 h-3 text-green-500 animate-pulse" />
                  <span className="text-xs font-mono text-muted-foreground">Live</span>
                </div>
              </div>

              {/* Service Status */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                {["API Gateway", "Auth Service", "Database", "CDN"].map((service, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-background/50 border border-border">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Activity, title: "24/7 Anomalie-Erkennung", desc: "ML-basierte Analyse" },
                { icon: Bell, title: "Automatische Alerts", desc: "Multi-Channel" },
                { icon: Eye, title: "Public Status Page", desc: "Transparente Kommunikation" },
                { icon: BarChart3, title: "API Health Endpoints", desc: "/health & /metrics" }
              ].map((feature, index) => (
                <div key={index} className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary mb-2" />
                  <h4 className="font-semibold text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* API Code Snippet */}
            <div className="mt-8 p-4 rounded-xl bg-background border border-border">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-xs text-muted-foreground font-mono">health-check.sh</span>
              </div>
              <pre className="text-sm font-mono text-muted-foreground overflow-x-auto">
                <code>{`curl -X GET https://api.metanetwork.agency/v1/health
{
  "status": "operational",
  "latency": "42ms",
  "services": {
    "api": "healthy",
    "database": "healthy",
    "cache": "healthy"
  }
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container-tight">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border border-primary/20 p-8 md:p-12 text-center">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
              </div>
              
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 backdrop-blur-sm border border-border mb-6">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Enterprise-Grade Security</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Bereit für zuverlässige Werbeinfrastruktur?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Starten Sie noch heute mit MetaNetwork und profitieren Sie von 
                  unserer sicheren, skalierbaren Infrastruktur.
                </p>
                <Button size="lg" className="gap-2">
                  Registrieren & starten
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SecurityPage;
