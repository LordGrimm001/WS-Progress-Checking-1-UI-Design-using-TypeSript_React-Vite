import { UserPlus, Search, HandHeart, Star } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your free account and tell us about your interests and availability.",
  },
  {
    icon: Search,
    title: "Find Tasks",
    description: "Browse volunteer opportunities that match your skills and location.",
  },
  {
    icon: HandHeart,
    title: "Help Out",
    description: "Apply to tasks, connect with those in need, and make a difference.",
  },
  {
    icon: Star,
    title: "Build Impact",
    description: "Track your contributions and see the positive change you're creating.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-violet-dark/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. Follow these four easy steps to begin making a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center relative z-10">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                )}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
            <p className="text-lg mb-4">Ready to make a difference in your community?</p>
            <button className="px-8 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all hover:scale-105">
              Join Now - It's Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
