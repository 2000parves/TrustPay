import HelmetTitle from "@/components/layout/HelmetTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router";
import { HelpCircle, Mail, MessageCircle, Shield, Wallet } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      q: "What is TrustPay?",
      a: "TrustPay is a secure digital wallet platform that lets you send, receive, and manage money with ease."
    },
    {
      q: "Is my money safe with TrustPay?",
      a: "Yes. We use bank‑grade encryption, device binding, fraud detection, and multi‑factor authentication to secure your account and transactions."
    },
    {
      q: "How do I add money to my wallet?",
      a: "You can add money via linked bank accounts, debit/credit cards, or by depositing cash through our nationwide agent network."
    },
    {
      q: "Are there any fees?",
      a: "Most core features are free. We charge low, transparent fees for certain services like instant cash out or international transfers."
    },
    {
      q: "Can I use TrustPay on mobile?",
      a: "Absolutely. TrustPay is optimized for mobile and works seamlessly across devices."
    },
    {
      q: "How can I contact support?",
      a: "You can reach our 24/7 support via in‑app chat, email, or phone. See the contact options below."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HelmetTitle title="FAQ" />

      {/* Hero */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto text-center">
          <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to common questions about using TrustPay.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-3xl space-y-4">
          {faqs.map((item, idx) => (
            <Card key={idx} className="border-muted/40">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">{item.q}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{item.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto grid gap-6 md:grid-cols-3">
          <Card className="p-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <Wallet className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">Get Started</h3>
            <p className="text-sm text-muted-foreground mb-4">Create your free account in minutes and start transacting.</p>
            <Button asChild>
              <Link to="/auth/signup">Create Account</Link>
            </Button>
          </Card>

          <Card className="p-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <MessageCircle className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">Live Chat</h3>
            <p className="text-sm text-muted-foreground mb-4">Chat with our support team directly from the app 24/7.</p>
            <Button variant="secondary" asChild>
              <Link to="/contact">Open Chat</Link>
            </Button>
          </Card>

          <Card className="p-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">Email Us</h3>
            <p className="text-sm text-muted-foreground mb-4">Prefer email? Our team responds promptly around the clock.</p>
            <Button variant="outline" asChild>
              <a href="mailto:support@trustpay.app" className="inline-flex items-center">
                <Mail className="h-4 w-4 mr-2" /> support@trustpay.app
              </a>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
