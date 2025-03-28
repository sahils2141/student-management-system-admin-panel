
import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { toast } from "sonner";
import { useMediaQuery } from "@/hooks/use-mobile";

const AdminLayout = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Close sidebar on mobile when route changes
    if (isMobile) {
      setSidebarOpen(false);
    }
  }, [location.pathname, isMobile]);
  
  useEffect(() => {
    // Page transition effect
    const main = document.querySelector("main");
    if (main) {
      main.classList.add("page-transition-enter");
      const timer = setTimeout(() => {
        main.classList.remove("page-transition-enter");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);
  
  useEffect(() => {
    // Update sidebar state when screen size changes
    setSidebarOpen(!isMobile);
  }, [isMobile]);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Overlay for mobile when sidebar is open */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" 
          onClick={toggleSidebar}
        />
      )}
      
      <Sidebar open={sidebarOpen} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 transition-all duration-300">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
