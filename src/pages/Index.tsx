
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Add a slight delay for better UX
    const timer = setTimeout(() => {
      // Redirect to admin dashboard
      navigate("/admin");
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center max-w-md">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Student Management System</h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-4">Redirecting to admin panel...</p>
        <div className="flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    </div>
  );
};

export default Index;
