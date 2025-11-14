import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-4 relative">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary fill-primary" />
              </div>
              <span className="text-xl font-bold">VolunteerHub</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Connecting volunteers with those who need help. Building stronger communities through meaningful action.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Browse Tasks</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Become a Volunteer</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Request Help</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>&copy; 2024 VolunteerHub. Made with <Heart className="inline w-4 h-4 text-primary fill-primary" /> for communities everywhere.</p>
        </div>
      </div>
    </footer>
  );
};
