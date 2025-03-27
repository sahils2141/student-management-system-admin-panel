
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Calendar, BarChart } from "lucide-react";
import { toast } from "sonner";

const AttendancePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMarkDialogOpen, setIsMarkDialogOpen] = useState(false);
  
  const students = [
    { id: 1, name: "John Doe", grade: "10th", section: "A", present: 18, absent: 2, percentage: "90%" },
    { id: 2, name: "Jane Smith", grade: "9th", section: "B", present: 16, absent: 4, percentage: "80%" },
    { id: 3, name: "David Wilson", grade: "11th", section: "A", present: 19, absent: 1, percentage: "95%" },
    { id: 4, name: "Sarah Johnson", grade: "10th", section: "C", present: 15, absent: 5, percentage: "75%" },
    { id: 5, name: "Michael Brown", grade: "12th", section: "B", present: 17, absent: 3, percentage: "85%" },
  ];
  
  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.grade.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleMarkAttendance = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Attendance marked successfully");
    setIsMarkDialogOpen(false);
  };

  // Mock data for today's attendance
  const todayAttendance = [
    { id: 1, name: "John Doe", status: "present" },
    { id: 2, name: "Jane Smith", status: "present" },
    { id: 3, name: "David Wilson", status: "present" },
    { id: 4, name: "Sarah Johnson", status: "absent" },
    { id: 5, name: "Michael Brown", status: "present" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Attendance</h2>

        <Dialog open={isMarkDialogOpen} onOpenChange={setIsMarkDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Mark Attendance
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[650px]">
            <DialogHeader>
              <DialogTitle>Mark Attendance</DialogTitle>
            </DialogHeader>
            <form className="grid gap-6 py-4" onSubmit={handleMarkAttendance}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" defaultValue={new Date().toISOString().slice(0, 10)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="class">Class</Label>
                  <Select>
                    <SelectTrigger id="class">
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10a">10th - Section A</SelectItem>
                      <SelectItem value="10b">10th - Section B</SelectItem>
                      <SelectItem value="10c">10th - Section C</SelectItem>
                      <SelectItem value="11a">11th - Section A</SelectItem>
                      <SelectItem value="12b">12th - Section B</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="border rounded-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">No.</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead className="w-24 text-center">Present</TableHead>
                      <TableHead className="w-24 text-center">Absent</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {todayAttendance.map((student, index) => (
                      <TableRow key={student.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{student.name}</TableCell>
                        <TableCell className="text-center">
                          <Checkbox 
                            id={`present-${student.id}`} 
                            defaultChecked={student.status === "present"}
                            onCheckedChange={() => {}}
                            className="mx-auto"
                          />
                        </TableCell>
                        <TableCell className="text-center">
                          <Checkbox 
                            id={`absent-${student.id}`} 
                            defaultChecked={student.status === "absent"}
                            onCheckedChange={() => {}}
                            className="mx-auto"
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="flex justify-end gap-4">
                <Button type="button" variant="outline" onClick={() => setIsMarkDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Save Attendance</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="card-hover">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Present Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-green-500">92% of total</p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Absent Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14</div>
            <p className="text-xs text-red-500">8% of total</p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89%</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Most Absences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10th C</div>
            <p className="text-xs text-red-500">15% absence rate</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="summary">
        <TabsList>
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="summary" className="mt-6">
          <Card>
            <CardHeader className="pb-1">
              <div className="flex items-center justify-between">
                <CardTitle>Attendance Summary</CardTitle>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <BarChart className="h-4 w-4" />
                  View Analytics
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search students..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Grade</TableHead>
                      <TableHead>Section</TableHead>
                      <TableHead>Present Days</TableHead>
                      <TableHead>Absent Days</TableHead>
                      <TableHead>Attendance %</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredStudents.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell className="font-medium">{student.name}</TableCell>
                        <TableCell>{student.grade}</TableCell>
                        <TableCell>{student.section}</TableCell>
                        <TableCell>{student.present}</TableCell>
                        <TableCell>{student.absent}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <span className={`mr-2 ${
                              parseInt(student.percentage) >= 90 
                                ? "text-green-600" 
                                : parseInt(student.percentage) >= 75 
                                ? "text-yellow-600" 
                                : "text-red-600"
                            }`}>
                              {student.percentage}
                            </span>
                            <div className="w-24 h-2 bg-secondary rounded-full">
                              <div 
                                className={`h-2 rounded-full ${
                                  parseInt(student.percentage) >= 90 
                                    ? "bg-green-500" 
                                    : parseInt(student.percentage) >= 75 
                                    ? "bg-yellow-500" 
                                    : "bg-red-500"
                                }`}
                                style={{ width: student.percentage }}
                              />
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="daily" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Daily Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Daily attendance view will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="monthly" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Monthly attendance view will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Attendance reports will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AttendancePage;
