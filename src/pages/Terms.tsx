import HelmetTitle from "@/components/layout/HelmetTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <HelmetTitle title="Terms & Conditions" />

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using TrustPay.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                By creating an account or using TrustPay, you agree to these Terms and our Privacy Policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Eligibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                You must be legally able to enter into a binding agreement in your jurisdiction to use the service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Account & Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Fees & Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Some services may incur fees; any fees will be clearly presented before you authorize a transaction.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Acceptable Use</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                You agree not to use the service for illegal activities or to violate the rights of others.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may update these Terms from time to time. Continued use of the service constitutes acceptance of the changes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
