import HelmetTitle from "@/components/layout/HelmetTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend, PieChart, Pie, Cell } from "recharts";

const txData = [
  { name: "Mon", sent: 320, received: 200 },
  { name: "Tue", sent: 280, received: 260 },
  { name: "Wed", sent: 450, received: 300 },
  { name: "Thu", sent: 500, received: 380 },
  { name: "Fri", sent: 520, received: 410 },
  { name: "Sat", sent: 390, received: 340 },
  { name: "Sun", sent: 420, received: 360 },
];

const pieData = [
  { name: "Transfers", value: 45 },
  { name: "Cash In", value: 25 },
  { name: "Cash Out", value: 15 },
  { name: "Bills", value: 15 },
];

const COLORS = ["#3b82f6", "#22d3ee", "#10b981", "#f59e0b"]; // Tailwind blue, cyan, emerald, amber

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <HelmetTitle title="Analytics" />

      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Analytics Dashboard
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              A quick overview of your recent activity and performance.
            </p>
          </div>
          <Button asChild>
            <Link to="/auth/signup">Get Pro Insights</Link>
          </Button>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="container mx-auto grid gap-6 md:grid-cols-2">
          <Card className="h-[380px]">
            <CardHeader>
              <CardTitle>Weekly Transactions</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={txData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sent" stroke="#3b82f6" strokeWidth={2} />
                  <Line type="monotone" dataKey="received" stroke="#22d3ee" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="h-[380px]">
            <CardHeader>
              <CardTitle>Daily Volume</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={txData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sent" fill="#3b82f6" />
                  <Bar dataKey="received" fill="#22d3ee" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="h-[380px] md:col-span-2">
            <CardHeader>
              <CardTitle>Activity Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={110} label>
                    {pieData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
