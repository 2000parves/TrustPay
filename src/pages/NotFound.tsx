import HelmetTitle from "@/components/layout/HelmetTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Search } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <HelmetTitle title="Page Not Found" />
      <div className="text-center max-w-lg">
        <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
          <Search className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-2">404</h1>
        <p className="text-lg text-muted-foreground mb-6">We couldn't find the page you're looking for.</p>
        <div className="flex items-center justify-center gap-3">
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
