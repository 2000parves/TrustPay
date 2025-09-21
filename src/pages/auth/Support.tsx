import HelmetTitle from "@/components/layout/HelmetTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

export default function SupportPage() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate support ticket submission
    setTimeout(() => {
      alert("Thanks! Your message has been sent to support.");
      setMessage("");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-background">
      <HelmetTitle title="Support" />

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            We're here to help
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact our support team 24/7 via chat, email, or phone.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto grid gap-6 md:grid-cols-3">
          <Card className="p-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <MessageCircle className="h-5 w-5 text-primary" />
            </div>
            <CardHeader className="p-0">
              <CardTitle>Live Chat</CardTitle>
            </CardHeader>
            <CardContent className="p-0 pt-2 text-muted-foreground">
              Chat with our team directly from the app.
            </CardContent>
          </Card>

          <Card className="p-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <CardHeader className="p-0">
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent className="p-0 pt-2 text-muted-foreground">
              support@trustpay.app
            </CardContent>
          </Card>

          <Card className="p-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <CardHeader className="p-0">
              <CardTitle>Phone</CardTitle>
            </CardHeader>
            <CardContent className="p-0 pt-2 text-muted-foreground">
              +1 (800) 555-1234
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    rows={5}
                    placeholder="How can we help?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
