
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import StudentsPage from "./pages/admin/StudentsPage";
import FeesPage from "./pages/admin/FeesPage";
import NotesPage from "./pages/admin/NotesPage";
import ResultsPage from "./pages/admin/ResultsPage";
import NotificationsPage from "./pages/admin/NotificationsPage";
import RemarksPage from "./pages/admin/RemarksPage";
import AttendancePage from "./pages/admin/AttendancePage";
import StaffPage from "./pages/admin/StaffPage";
import ExpensesPage from "./pages/admin/ExpensesPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-right" closeButton />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="students" element={<StudentsPage />} />
            <Route path="fees" element={<FeesPage />} />
            <Route path="notes" element={<NotesPage />} />
            <Route path="results" element={<ResultsPage />} />
            <Route path="notifications" element={<NotificationsPage />} />
            <Route path="remarks" element={<RemarksPage />} />
            <Route path="attendance" element={<AttendancePage />} />
            <Route path="staff" element={<StaffPage />} />
            <Route path="expenses" element={<ExpensesPage />} />
          </Route>
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
