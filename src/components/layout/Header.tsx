
import { useState } from "react";
import { Bell, Menu, User, Settings, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";

interface HeaderProps {
  toggleSidebar: () => void;
  sidebarOpen: boolean;
}

const Header = ({ toggleSidebar, sidebarOpen }: HeaderProps) => {
  const [notificationsCount, setNotificationsCount] = useState(3);
  
  const handleNotificationClick = () => {
    toast.info("You have 3 unread notifications");
    // In a real app, you'd navigate to notifications page or open a notification panel
  };
  
  const handleProfileAction = (action: string) => {
    switch(action) {
      case "profile":
        toast.info("Profile page coming soon");
        break;
      case "settings":
        toast.info("Settings page coming soon");
        break;
      case "logout":
        toast.success("You have been logged out");
        // In a real app, you'd handle the logout process
        break;
    }
  };

  return (
    <header className="h-16 flex items-center justify-between px-4 border-b bg-card">
      <div className="flex items-center space-x-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar}
          className="hover:bg-secondary transition-colors"
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div className="hidden md:block">
          <h1 className="text-lg font-medium">Student Management System</h1>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full relative"
          onClick={handleNotificationClick}
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          {notificationsCount > 0 && (
            <span className="absolute top-0 right-0 w-4 h-4 bg-primary rounded-full flex items-center justify-center text-[10px] text-white font-bold">
              {notificationsCount}
            </span>
          )}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative rounded-full h-8 w-8 flex items-center justify-center">
              <Avatar className="h-8 w-8">
                <AvatarImage src="" />
                <AvatarFallback className="bg-primary text-primary-foreground">AD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleProfileAction("profile")}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleProfileAction("settings")}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleProfileAction("logout")}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
