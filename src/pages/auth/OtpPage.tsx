import HelmetTitle from "@/components/layout/HelmetTitle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useVerifyOtpMutation } from "@/redux/api/authApi";
import Cookies from "js-cookie";
import { Key } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "sonner";

export default function OtpPage() {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [verifyOtp] = useVerifyOtpMutation();

  const userEmail = Cookies.get("email") || "";
  const queryParams = new URLSearchParams(location.search);
  const redirect = queryParams.get("redirect") || "";

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!otp) {
      const errorMsg = "Please enter the OTP.";
      setError(errorMsg);
      toast.error(errorMsg);
      return;
    }

    if (!userEmail) {
      const errorMsg = "Email not found. Please try registering again.";
      setError(errorMsg);
      toast.error(errorMsg);
      navigate("/auth/signup");
      return;
    }

    try {
      setIsLoading(true);

      // Convert OTP to number and verify it
      const otpNumber = parseInt(otp.trim(), 10);
      if (isNaN(otpNumber)) {
        throw new Error("Invalid OTP format");
      }

      const result = await verifyOtp({
        email: userEmail,
        oneTimeCode: otpNumber,
      }).unwrap();

      if (result?.success) {
        toast.success("Email verified successfully!");

        // Redirect based on the redirect parameter
        if (redirect === "login") {
          navigate("/auth/login");
        } else if (redirect === "reset-password") {
          navigate("/auth/change-password");
        } else {
          navigate("/auth/login");
        }

        // Clear the email from cookies
        Cookies.remove("email");
      }
    } catch (err: unknown) {
      const errorMessage = (err as { data?: { message?: string } })?.data?.message || "Failed to verify OTP. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem("isAuthenticated") === "true" ||
      Cookies.get("isAuthenticated") === "true"
    ) {
      navigate("/");
    }
  }, [navigate]);

  if (error) {
    toast.error(error);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <HelmetTitle title="OTP Verification" />
      <div className="w-full max-w-md space-y-6">
        {/* Logo/Brand */}
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4">
            <Key className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">PayWallet</h1>
          <p className="text-muted-foreground">Financial Dashboard System</p>
        </div>

        {/* OTP Form */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Enter OTP</CardTitle>
            <CardDescription>
              We sent a One-Time Password (OTP) to your email address.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <div>
                <Label htmlFor="otp">One-Time Password (OTP)</Label>
                <div className="relative">
                  <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="otp"
                    type="text"
                    placeholder="Enter OTP"
                    className="pl-10"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isLoading || !otp} // Button disabled if OTP is empty
              >
                {isLoading ? "Verifying OTP..." : "Verify OTP"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex-col space-y-4">
            <div className="text-center text-sm">
              <Link
                to="/auth/resend-otp"
                className="text-primary hover:underline"
              >
                Resend OTP
              </Link>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              Having trouble?{" "}
              <Link to="/auth/support" className="text-primary hover:underline">
                Contact Support
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
