
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Users, BookOpen, Calculator, FileText, Bell, 
  MessageSquare, Calendar, User, BarChart, Settings, X
} from "lucide-react";
import { useMediaQuery } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  open: boolean;
}

const Sidebar = ({ open }: SidebarProps) => {
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  const menuItems = [
    { 
      title: "Dashboard", 
      path: "/admin", 
      icon: <BarChart className="w-5 h-5" /> 
    },
    { 
      title: "Students", 
      path: "/admin/students", 
      icon: <Users className="w-5 h-5" /> 
    },
    { 
      title: "Staff", 
      path: "/admin/staff", 
      icon: <User className="w-5 h-5" /> 
    },
    { 
      title: "Attendance", 
      path: "/admin/attendance", 
      icon: <Calendar className="w-5 h-5" /> 
    },
    { 
      title: "Fees", 
      path: "/admin/fees", 
      icon: <Calculator className="w-5 h-5" /> 
    },
    { 
      title: "Results", 
      path: "/admin/results", 
      icon: <FileText className="w-5 h-5" /> 
    },
    { 
      title: "Notes", 
      path: "/admin/notes", 
      icon: <BookOpen className="w-5 h-5" /> 
    },
    { 
      title: "Notifications", 
      path: "/admin/notifications", 
      icon: <Bell className="w-5 h-5" /> 
    },
    { 
      title: "Remarks", 
      path: "/admin/remarks", 
      icon: <MessageSquare className="w-5 h-5" /> 
    },
    { 
      title: "Expenses", 
      path: "/admin/expenses", 
      icon: <Calculator className="w-5 h-5" /> 
    },
    { 
      title: "Settings", 
      path: "/admin/settings", 
      icon: <Settings className="w-5 h-5" /> 
    }
  ];

  return (
    <div 
      className={`h-full bg-sidebar fixed md:static top-0 left-0 z-50 md:z-auto transition-all duration-300 ease-in-out ${
        open ? "translate-x-0 w-64" : "md:w-20 -translate-x-full md:translate-x-0"
      } border-r border-sidebar-border`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-sidebar-border flex items-center justify-between h-16">
          <h1 className={`font-bold text-sidebar-foreground transition-opacity duration-200 ${open ? 'opacity-100' : 'opacity-0 hidden'}`}>
            EduAdmin
          </h1>
          <span className={`text-2xl font-bold text-primary ${!open && !isMobile ? 'block' : 'hidden'}`}>E</span>
          
          {isMobile && open && (
            <Button variant="ghost" size="icon" className="md:hidden" onClick={(e) => {
              // This is handled by the parent component
              e.stopPropagation();
            }}>
              <X className="h-5 w-5 text-sidebar-foreground" />
            </Button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center p-3 rounded-md transition-all duration-200 ${
                    location.pathname === item.path
                      ? "bg-sidebar-accent text-primary"
                      : "text-sidebar-foreground hover:bg-sidebar-accent"
                  } ${!open && !isMobile ? "justify-center" : "justify-start"}`}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  <span 
                    className={`ml-3 transition-opacity duration-200 ${
                      open ? "opacity-100" : "opacity-0 hidden"
                    }`}
                  >
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
