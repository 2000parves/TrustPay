import HelmetTitle from "@/components/layout/HelmetTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

const AdminDashboard = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="min-h-[70vh] container mx-auto px-4 py-10">
      <HelmetTitle title="Admin Dashboard" />
      <h1 className="text-3xl font-bold mb-6">Admin Console{user?.data?.name ? ` - ${user.data.name}` : ""}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">1,234</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>System Health</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">All systems operational. Demo data.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Button>Invite Admin</Button>
            <Button variant="outline">View Logs</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
