import HelmetTitle from "@/components/layout/HelmetTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

const AgentDashboard = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="min-h-[70vh] container mx-auto px-4 py-10">
      <HelmetTitle title="Agent Dashboard" />
      <h1 className="text-3xl font-bold mb-6">Agent Panel{user?.data?.name ? ` - ${user.data.name}` : ""}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Pending Verifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">8</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Todays Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">42 processed. Demo only.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Button>Verify KYC</Button>
            <Button variant="outline">Resolve Issue</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AgentDashboard;
