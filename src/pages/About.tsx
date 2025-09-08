import HelmetTitle from "@/components/layout/HelmetTitle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Award, Heart, Target, Users } from "lucide-react";
import { Link } from "react-router";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <HelmetTitle title="About Us" />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About TrustPay
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're on a mission to make digital payments accessible, secure, and simple for everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At TrustPay, we believe that everyone deserves access to secure, fast, and affordable digital payment solutions. We're building the future of money transfer, one transaction at a time.
              </p>
              <p className="text-lg text-muted-foreground">
                Founded in 2020, we've grown to serve over 10 million users across multiple countries, processing billions in transactions while maintaining the highest security standards.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary">10M+</div>
                  <CardTitle className="text-sm">Active Users</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center p-6">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary">$50B+</div>
                  <CardTitle className="text-sm">Processed</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center p-6">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <CardTitle className="text-sm">Agents</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center p-6">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <CardTitle className="text-sm">Uptime</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at TrustPay.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We build trust through transparency, security, and reliability in every interaction.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Inclusion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Financial services should be accessible to everyone, regardless of background or location.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We strive for excellence in everything we do, from product design to customer service.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We genuinely care about our users' financial well-being and success.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of the digital payment revolution. Start your TrustPay journey today.
          </p>
          <Button size="lg" className="text-lg px-8" asChild>
            <Link to="/auth/signup">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
