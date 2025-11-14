import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users } from "lucide-react";

const sampleTasks = [
  {
   title: "Event Safety Monitor 🚨",
    description: "Ensure the safety of participants during school events by monitoring areas, guiding attendees, and responding to any issues.",
    category: "Event Safety",
    location: "School Campus",
    time: "3 hours",
    volunteers: "3 needed",
    urgent: true,

  },
  {
    title: "Guide First-Year College Students 💡",
    description: "Help freshmen adjust to college life and provide support with academic tasks. Flexible schedule.",
    category: "Education",
    location: "Net Central Gaming Center NCGC",
    time: "3 hours/week",
    volunteers: "3 needed",

  },
  {
    title: "Tree Planting Activity 🌱",
    description: "Help plant trees and create a greener space in and around the school or nearby community areas.",
    category: "Environment",
    location: "School Campus / Nearby Park",
    time: "4 hours",
    volunteers: "10 needed",
    urgent: false,
  },
];

export const TaskShowcase = () => {
  return (
    <section className="py-24 px-4 bg-muted/20 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Recent <span className="gradient-text">Opportunities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what people in your community need help with right now.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sampleTasks.map((task, index) => (
            <Card 
              key={index}
              className="card-glow bg-card border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant={task.urgent ? "destructive" : "secondary"}>
                    {task.category}
                  </Badge>
                  {task.urgent && (
                    <Badge variant="outline" className="border-destructive text-destructive">
                      Urgent
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl">{task.title}</CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                  {task.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  {task.location}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2 text-primary" />
                  {task.time}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mr-2 text-primary" />
                  {task.volunteers}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Apply to Help
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary/30 hover:border-primary">
            View All Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
};
