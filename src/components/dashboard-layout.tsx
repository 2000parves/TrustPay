import type { ReactNode } from "react";
import { NavLink } from "react-router";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface DashboardLayoutProps {
  userRole?: "user" | "agent" | "admin";
  children: ReactNode;
}

export const DashboardLayout = ({ userRole = "user", children }: DashboardLayoutProps) => {
  const userNav = [
    { to: "/dashboard/user", label: "Profile" },
    { to: "/dashboard/user/wallet", label: "Wallet" },
    { to: "/dashboard/user/transactions", label: "Transactions" },
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 py-8 px-4">
        <aside className="md:col-span-1 border rounded-lg p-4 h-fit sticky top-4">
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">{userRole.toUpperCase()} Dashboard</p>
            <Separator className="my-3" />
          </div>
          <nav className="flex flex-col gap-2">
            {userNav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 rounded-md text-sm",
                    isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>
        <main className="md:col-span-4">{children}</main>
      </div>
    </div>
  );
};
