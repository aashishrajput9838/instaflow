"use client";

import { useAuth } from "@/lib/auth-context";
import { LoginDialog } from "@/components/login-dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary to-secondary text-white font-bold">
            S
          </div>
          <span className="hidden sm:inline text-xl font-bold text-foreground">Sociafy</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Solutions
          </a>
          <a href="#" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Analytics
          </a>
          <a href="#" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.photoURL || ""} alt={user.displayName || ""} />
                    <AvatarFallback>
                      {user.email?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden sm:inline text-sm font-medium text-foreground">
                    {user.displayName || user.email}
                  </span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.displayName}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <LoginDialog>
                <button className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors cursor-pointer">
                  Login
                </button>
              </LoginDialog>
              <LoginDialog>
                <button className="px-6 py-2 rounded-full bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer">
                  Sign Up
                </button>
              </LoginDialog>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
