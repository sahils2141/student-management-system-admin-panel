
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Calculator, Bell, Download, BarChart } from "lucide-react";
import { 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { toast } from "sonner";

const Dashboard = () => {
  const [reportType, setReportType] = useState("attendance");

  const statCards = [
    {
      title: "Total Students",
      value: "1,234",
      icon: <Users className="h-8 w-8 text-primary" />,
      change: "+5.2%",
      changeType: "positive"
    },
    {
      title: "Staff Members",
      value: "64",
      icon: <Users className="h-8 w-8 text-primary" />,
      change: "+2.4%",
      changeType: "positive"
    },
    {
      title: "Fees Collected",
      value: "$124,350",
      icon: <Calculator className="h-8 w-8 text-primary" />,
      change: "+12.5%",
      changeType: "positive"
    },
    {
      title: "Pending Notifications",
      value: "23",
      icon: <Bell className="h-8 w-8 text-primary" />,
      change: "-5%",
      changeType: "negative"
    }
  ];

  const attendanceData = [
    { name: 'Jan', present: 85, absent: 15 },
    { name: 'Feb', present: 80, absent: 20 },
    { name: 'Mar', present: 88, absent: 12 },
    { name: 'Apr', present: 90, absent: 10 },
    { name: 'May', present: 92, absent: 8 },
    { name: 'Jun', present: 89, absent: 11 }
  ];

  const feesData = [
    { name: 'Tuition', value: 60 },
    { name: 'Transportation', value: 15 },
    { name: 'Lab', value: 10 },
    { name: 'Library', value: 5 },
    { name: 'Other', value: 10 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#9146FF'];

  const handleDownloadReport = () => {
    // In a real application, this would generate and download a report
    toast.success(`${reportType} report is being downloaded`);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center gap-2">
          <select 
            className="border rounded px-2 py-1 text-sm"
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
          >
            <option value="attendance">Attendance Report</option>
            <option value="fees">Fees Report</option>
            <option value="results">Results Report</option>
            <option value="staff">Staff Report</option>
          </select>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleDownloadReport}
            className="flex items-center gap-1"
          >
            <Download className="h-4 w-4" />
            Download Report
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((card, index) => (
          <Card key={index} className="card-hover">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              {card.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className={`text-xs ${
                card.changeType === "positive" 
                  ? "text-green-500" 
                  : "text-red-500"
              }`}>
                {card.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5" />
              Attendance Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer
                config={{
                  present: {
                    label: "Present",
                    color: "#0088FE"
                  },
                  absent: {
                    label: "Absent",
                    color: "#FF8042"
                  }
                }}
              >
                <RechartsBarChart data={attendanceData} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="present" fill="#0088FE" name="Present" />
                  <Bar dataKey="absent" fill="#FF8042" name="Absent" />
                </RechartsBarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Fees Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                  <Pie
                    data={feesData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {feesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Recent Admissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Student {i}</p>
                      <p className="text-sm text-muted-foreground">Grade {Math.floor(Math.random() * 12) + 1}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Today</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center p-2 rounded-lg hover:bg-secondary transition-colors">
                  <div className="bg-primary/10 h-12 w-12 rounded flex flex-col items-center justify-center mr-4">
                    <span className="font-bold text-primary">
                      {Math.floor(Math.random() * 28) + 1}
                    </span>
                    <span className="text-xs text-muted-foreground">June</span>
                  </div>
                  <div>
                    <p className="font-medium">Event {i}</p>
                    <p className="text-sm text-muted-foreground">Campus Auditorium</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
