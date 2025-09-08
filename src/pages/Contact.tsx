import HelmetTitle from "@/components/layout/HelmetTitle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <HelmetTitle title="Contact Us" />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're here to help. Reach out to us anytime and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <Card className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <Mail className="h-5 w-5 text-primary mr-2" />
                    <CardTitle className="text-lg">Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      support@trustpay.com
                    </CardDescription>
                    <CardDescription className="text-sm text-muted-foreground">
                      We typically respond within 24 hours
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <Phone className="h-5 w-5 text-primary mr-2" />
                    <CardTitle className="text-lg">Phone</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      +1 (800) TRUST-PAY
                    </CardDescription>
                    <CardDescription className="text-sm text-muted-foreground">
                      Available 24/7 for urgent matters
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    <CardTitle className="text-lg">Address</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      123 Financial District<br />
                      New York, NY 10004<br />
                      United States
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <CardTitle className="text-lg">Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday: 10:00 AM - 4:00 PM EST<br />
                      Sunday: Closed
                    </CardDescription>
                    <CardDescription className="text-sm text-muted-foreground mt-2">
                      Emergency support available 24/7
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Check out our FAQ section for quick answers to common questions.
          </p>
          <Button size="lg" variant="outline" className="text-lg px-8">
            View FAQ
          </Button>
        </div>
      </section>
    </div>
  );
}
