
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, Calculator, Bell } from "lucide-react";

const Dashboard = () => {
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

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Welcome back, Admin</p>
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
