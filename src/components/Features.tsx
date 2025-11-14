import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Bell, Filter, Users, MapPin, Calendar } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Browse Tasks",
    description: "Discover meaningful volunteer opportunities in your area that match your skills and interests.",
  },
  {
    icon: Users,
    title: "Apply to Help",
    description: "Connect directly with people who need assistance and make a real impact in your community.",
  },
  {
    icon: Bell,
    title: "Real-time Notifications",
    description: "Get instant alerts when someone needs help or when your application is accepted.",
  },
  {
    icon: Filter,
    title: "Smart Filtering",
    description: "Filter opportunities by category, location, time commitment, and skills required.",
  },
  {
    icon: MapPin,
    title: "Location-based",
    description: "Find volunteer opportunities near you and see where you can make a difference.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Choose tasks that fit your schedule and availability, from one-time to recurring commitments.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Make an Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, powerful tools to connect volunteers with those who need help most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="card-glow bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
