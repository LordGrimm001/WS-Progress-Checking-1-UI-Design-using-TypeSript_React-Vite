import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-volunteer.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-violet-dark/10 to-background" />
      
      {/* Hero image with overlay */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Community volunteers helping each other" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center animate-fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-muted/50 border border-primary/20 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Powered by Community</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Make a Difference,{" "}
          <span className="gradient-text glow-effect">
            One Task at a Time
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Connect volunteers with those who need help. Build stronger communities through 
          meaningful action and shared purpose.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 animate-glow group"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-primary/30 hover:border-primary hover:bg-primary/10"
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Volunteers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">25K+</div>
            <div className="text-sm text-muted-foreground">Tasks Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Communities</div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};
