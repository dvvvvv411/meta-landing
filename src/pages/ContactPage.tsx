import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Contact Section - Dark Theme */}
      <section className="relative flex-1 bg-slate-950 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 hero-grid-pattern opacity-40" />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 orb-blue rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 orb-violet rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="relative z-10 section-padding py-24 md:py-32 flex items-center justify-center min-h-[70vh]">
          <div className="container-tight">
            {/* One Large Glassmorphism Card */}
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 max-w-5xl mx-auto">
              {/* Gradient glow behind card */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 -z-10 blur-2xl" />
              
              <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">
                
                {/* Left Side - Intro */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium text-white/80">Kontakt</span>
                  </div>
                  
                  <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                    Sprechen Sie mit uns.
                  </h1>
                  
                  <p className="text-white/60 text-lg leading-relaxed">
                    Haben Sie Fragen zu unserer Plattform oder möchten Sie mehr erfahren? 
                    Wir freuen uns auf Ihre Nachricht und antworten schnell und unkompliziert.
                  </p>
                  
                  {/* Response time badge */}
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Antwort innerhalb von 24 Stunden</span>
                  </div>
                </div>
                
                {/* Right Side - Contact Options Stacked */}
                <div className="flex flex-col gap-4">
                  
                  {/* Email Mini-Card */}
                  <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 shadow-lg">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white mb-1">E-Mail</h3>
                        <p className="font-mono text-white/80 text-sm mb-3 break-all">info@metanetwork.agency</p>
                        <Button variant="hero" size="sm" asChild>
                          <a href="mailto:info@metanetwork.agency">E-Mail schreiben</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Telegram Mini-Card */}
                  <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shrink-0 shadow-lg">
                        <Send className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white mb-1">Telegram</h3>
                        <p className="font-mono text-white/80 text-sm mb-3">@metanetwork.agency</p>
                        <Button variant="hero" size="sm" asChild>
                          <a href="https://t.me/metanetwork_agency" target="_blank" rel="noopener noreferrer">Chat starten</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
