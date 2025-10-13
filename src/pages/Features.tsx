import HelmetTitle from "@/components/layout/HelmetTitle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  CreditCard,
  Globe,
  Shield,
  Smartphone,
  Users,
  Zap,
  Lock,
  Clock,
  DollarSign,
} from "lucide-react";
import { Link } from "react-router";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <HelmetTitle title="Features" />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Powerful Features for Modern Banking
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover all the features that make TrustPay the most trusted digital wallet platform.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Advanced Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Multi-layer security with biometric authentication, end-to-end encryption, and fraud detection.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Instant Transfers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Send money instantly to anyone, anywhere. Real-time processing with zero delays.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Mobile Optimized</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Native mobile apps with offline capabilities and seamless synchronization.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Agent Network</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access cash through 50,000+ agents nationwide. Deposit and withdraw easily.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Multiple Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Link bank accounts, debit cards, credit cards, or use cash through agents.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Round-the-clock customer support via chat, phone, and email in multiple languages.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Privacy Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Your data is never shared. Complete privacy with GDPR compliance and data sovereignty.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Transaction History</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Detailed transaction history with search, filters, and export capabilities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Low Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Transparent pricing with the lowest fees in the industry. No hidden charges.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join millions of users who trust TrustPay for secure digital transactions.
          </p>
          <Button size="lg" className="text-lg px-8" asChild>
            <Link to="/auth/signup">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
