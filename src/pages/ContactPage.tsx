import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Mail, Send, ChevronDown, Clock, MessageCircle, Shield, Lock, BadgeCheck, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Contact Section - Dark Theme */}
      <section className="relative flex-1 bg-slate-950 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 hero-grid-pattern opacity-40" />
        
        {/* Animated Gradient Orbs - Enhanced */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] orb-blue rounded-full blur-3xl animate-pulse opacity-60" />
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] orb-violet rounded-full blur-3xl animate-pulse opacity-50" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] orb-blue rounded-full blur-3xl animate-pulse opacity-30" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-10 left-1/4 w-[300px] h-[300px] orb-violet rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDelay: "1s" }} />
        
        {/* Floating Decorative Elements - Top Area */}
        <div className="absolute top-20 left-[15%] w-16 h-16 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 animate-pulse opacity-60" style={{ animationDuration: "4s" }} />
        <div className="absolute top-32 right-[20%] w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse opacity-40" style={{ animationDuration: "3s", animationDelay: "1s" }} />
        <div className="absolute top-16 right-[35%] w-8 h-8 rounded-lg bg-white/10 border border-white/10 animate-pulse opacity-50" style={{ animationDuration: "5s" }} />
        <div className="absolute top-40 left-[8%] w-6 h-6 rounded-full bg-primary/30 animate-pulse opacity-60" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }} />
        
        {/* Floating Decorative Elements - Bottom Area */}
        <div className="absolute bottom-24 right-[15%] w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 animate-pulse opacity-50" style={{ animationDuration: "4.5s", animationDelay: "2s" }} />
        <div className="absolute bottom-32 left-[20%] w-10 h-10 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 animate-pulse opacity-60" style={{ animationDuration: "3s" }} />
        <div className="absolute bottom-16 left-[40%] w-6 h-6 rounded-md bg-primary/20 animate-pulse opacity-40" style={{ animationDuration: "4s", animationDelay: "1.5s" }} />
        <div className="absolute bottom-40 right-[8%] w-8 h-8 rounded-lg bg-accent/20 animate-pulse opacity-50" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }} />
        
        {/* Network Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="rgb(139, 92, 246)" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <line x1="10%" y1="20%" x2="25%" y2="35%" stroke="url(#lineGradient1)" strokeWidth="1" className="animate-pulse" />
          <line x1="75%" y1="15%" x2="88%" y2="35%" stroke="url(#lineGradient1)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
          <line x1="12%" y1="75%" x2="28%" y2="60%" stroke="url(#lineGradient1)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: "1s" }} />
          <line x1="80%" y1="70%" x2="92%" y2="55%" stroke="url(#lineGradient1)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: "1.5s" }} />
        </svg>
        
        {/* Network Nodes */}
        <div className="absolute top-[15%] left-[12%] w-3 h-3 rounded-full bg-primary/60 animate-ping" style={{ animationDuration: "3s" }} />
        <div className="absolute top-[25%] right-[18%] w-2 h-2 rounded-full bg-accent/60 animate-ping" style={{ animationDuration: "4s", animationDelay: "1s" }} />
        <div className="absolute bottom-[20%] left-[25%] w-2.5 h-2.5 rounded-full bg-primary/50 animate-ping" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }} />
        <div className="absolute bottom-[30%] right-[22%] w-2 h-2 rounded-full bg-accent/50 animate-ping" style={{ animationDuration: "4.5s", animationDelay: "2s" }} />
        <div className="absolute top-[40%] left-[5%] w-2 h-2 rounded-full bg-primary/40 animate-ping" style={{ animationDuration: "3s", animationDelay: "1.5s" }} />
        <div className="absolute bottom-[45%] right-[8%] w-2.5 h-2.5 rounded-full bg-accent/40 animate-ping" style={{ animationDuration: "4s", animationDelay: "0.5s" }} />
        
        <div className="relative z-10 section-padding py-16 md:py-20">
          <div className="container-tight">
            
            {/* Trust Stats Bar - Above Card */}
            <div 
              className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-white/60 text-sm">{"< 24h Antwortzeit"}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="text-white/60 text-sm">Direkter Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-white/60 text-sm">DSGVO-konform</span>
              </div>
            </div>
            
            {/* Main Glassmorphism Card */}
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 max-w-5xl mx-auto">
              {/* Gradient glow behind card */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 -z-10 blur-2xl" />
              
              <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">
                
                {/* Left Side - Intro */}
                <div className="space-y-6">
                  <div 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm opacity-0 animate-fade-in"
                    style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium text-white/80">Kontakt</span>
                  </div>
                  
                  <h1 
                    className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white opacity-0 animate-fade-in"
                    style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
                  >
                    Sprechen Sie mit uns.
                  </h1>
                  
                  <p 
                    className="text-white/60 text-lg leading-relaxed opacity-0 animate-fade-in"
                    style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
                  >
                    Haben Sie Fragen zu unserer Plattform oder möchten Sie mehr erfahren? 
                    Wir freuen uns auf Ihre Nachricht und antworten schnell und unkompliziert.
                  </p>
                  
                  {/* Response time badge */}
                  <div 
                    className="flex items-center gap-2 text-white/50 text-sm opacity-0 animate-fade-in"
                    style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Antwort innerhalb von 24 Stunden</span>
                  </div>
                </div>
                
                {/* Right Side - Contact Options Stacked */}
                <div className="flex flex-col gap-4">
                  
                  {/* Email Mini-Card */}
                  <div 
                    className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 opacity-0 animate-fade-in"
                    style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
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
                  <div 
                    className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 opacity-0 animate-fade-in"
                    style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
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
            
            {/* Contact Form - Below Card */}
            <div 
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 mt-12 max-w-3xl mx-auto opacity-0 animate-fade-in"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Send className="w-5 h-5 text-primary" />
                <h2 className="font-display text-lg font-semibold text-white">Nachricht senden</h2>
              </div>
              
              <form className="space-y-5">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-white/70 text-sm font-medium">Name</label>
                    <Input 
                      type="text" 
                      placeholder="Ihr vollständiger Name"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/50 focus-visible:ring-primary/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/70 text-sm font-medium">E-Mail</label>
                    <Input 
                      type="email" 
                      placeholder="ihre@email.de"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/50 focus-visible:ring-primary/30"
                    />
                  </div>
                </div>
                
                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-white/70 text-sm font-medium">Telefonnummer</label>
                  <Input 
                    type="tel" 
                    placeholder="+49 123 456789"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/50 focus-visible:ring-primary/30"
                  />
                </div>
                
                {/* Message */}
                <div className="space-y-2">
                  <label className="text-white/70 text-sm font-medium">Nachricht</label>
                  <Textarea 
                    placeholder="Wie können wir Ihnen helfen?"
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/50 focus-visible:ring-primary/30 min-h-[150px] resize-none"
                  />
                </div>
                
                {/* Submit Button */}
                <Button variant="hero" className="w-full" type="button">
                  Nachricht absenden
                </Button>
              </form>
            </div>
            
            {/* Trust Badges Row */}
            <div 
              className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/10 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
            >
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-white/40" />
                <span className="text-white/40 text-xs">SSL Verschlüsselt</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-white/40" />
                <span className="text-white/40 text-xs">Verifiziertes Unternehmen</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-white/40" />
                <span className="text-white/40 text-xs">EU-basiert</span>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <span className="text-xs text-white/40">Scrollen</span>
          <ChevronDown className="w-5 h-5 text-white/40" />
        </div>
      </section>
      
      <Footer hideCTA />
    </div>
  );
};

export default ContactPage;
