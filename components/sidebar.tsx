"use client";

import { useAuth } from "@/lib/auth-context";
import { LoginDialog } from "@/components/login-dialog";
import { Button } from "@/components/ui/button";
import { Instagram, Home, BarChart3, Users, Settings, Link as LinkIcon } from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: BarChart3, label: "Analytics", href: "#" },
  { icon: Users, label: "Audience", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
];

export function Sidebar() {
  const { user } = useAuth();
  const [activeItem, setActiveItem] = useState("Home");
  const [linkingInstagram, setLinkingInstagram] = useState(false);

  const handleLinkInstagram = async () => {
    try {
      setLinkingInstagram(true);
      // Redirect to our Instagram OAuth API route
      window.location.href = '/api/auth/instagram';
    } catch (error) {
      console.error("Error linking Instagram:", error);
    } finally {
      setLinkingInstagram(false);
    }
  };

  return (
    <aside className="fixed left-0 top-14 z-40 h-[calc(100vh-3.5rem)] w-64 border-r border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-full flex-col gap-4 p-4">
        {/* Link Your Instagram Section */}
        <div className="rounded-lg border border-border bg-gradient-to-br from-pink-50 to-purple-50 p-4 dark:from-pink-950/20 dark:to-purple-950/20">
          <div className="mb-3 flex items-center gap-2">
            <Instagram className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Link Your Instagram</h3>
          </div>
          {user ? (
            <div className="space-y-2">
              <div className="flex items-center gap-2 rounded-md bg-white/80 p-2 dark:bg-black/20">
                <div className="h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName || ""} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xs font-bold text-white">
                      {user.email?.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="truncate text-sm font-medium text-foreground">{user.displayName || user.email}</p>
                  <p className="text-xs text-muted-foreground">Connected</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={handleLinkInstagram}
                disabled={linkingInstagram}
              >
                <LinkIcon className="mr-2 h-4 w-4" />
                {linkingInstagram ? "Linking..." : "Link Instagram"}
              </Button>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Connect your Instagram account to unlock analytics and insights
              </p>
              <LoginDialog>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90">
                  <Instagram className="mr-2 h-4 w-4" />
                  Sign in to Connect
                </Button>
              </LoginDialog>
            </div>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  activeItem === item.label
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:bg-accent hover:text-foreground"
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-border pt-4">
          <p className="text-xs text-muted-foreground">
            © 2024 InstaFlow
          </p>
        </div>
      </div>
    </aside>
  );
}
