import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { TaskShowcase } from "@/components/TaskShowcase";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <TaskShowcase />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
