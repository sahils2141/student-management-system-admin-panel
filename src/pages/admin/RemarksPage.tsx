
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Plus, MessageSquare, User } from "lucide-react";
import { toast } from "sonner";

const RemarksPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  
  const remarks = [
    { 
      id: 1, 
      student: "John Doe", 
      grade: "10th", 
      remark: "Excellent performance in mathematics. Needs to improve in language skills.", 
      teacher: "Mr. Johnson", 
      date: "2023-05-10",
      type: "Academic"
    },
    { 
      id: 2, 
      student: "Jane Smith", 
      grade: "9th", 
      remark: "Shows great leadership skills. Active participant in class discussions.", 
      teacher: "Ms. Williams", 
      date: "2023-05-12",
      type: "Behavior"
    },
    { 
      id: 3, 
      student: "David Wilson", 
      grade: "11th", 
      remark: "Outstanding performance in science projects. Very creative and innovative.", 
      teacher: "Dr. Martin", 
      date: "2023-05-15",
      type: "Academic"
    },
    { 
      id: 4, 
      student: "Sarah Johnson", 
      grade: "10th", 
      remark: "Frequently absent from classes. Needs to improve attendance.", 
      teacher: "Mrs. Davis", 
      date: "2023-05-18",
      type: "Attendance"
    },
    { 
      id: 5, 
      student: "Michael Brown", 
      grade: "12th", 
      remark: "Excellent sportsmanship. Represents school in various tournaments.", 
      teacher: "Mr. Thompson", 
      date: "2023-05-20",
      type: "Extra-curricular"
    },
  ];
  
  const filteredRemarks = remarks.filter(remark => 
    remark.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
    remark.remark.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleAddRemark = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Remark added successfully");
    setIsAddDialogOpen(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Student Remarks</h2>

        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Remark
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>Add New Student Remark</DialogTitle>
            </DialogHeader>
            <form className="grid gap-6 py-4" onSubmit={handleAddRemark}>
              <div className="space-y-2">
                <Label htmlFor="student">Student</Label>
                <Select>
                  <SelectTrigger id="student">
                    <SelectValue placeholder="Select student" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="john">John Doe</SelectItem>
                    <SelectItem value="jane">Jane Smith</SelectItem>
                    <SelectItem value="david">David Wilson</SelectItem>
                    <SelectItem value="sarah">Sarah Johnson</SelectItem>
                    <SelectItem value="michael">Michael Brown</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Remark Type</Label>
                  <Select>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="academic">Academic</SelectItem>
                      <SelectItem value="behavior">Behavior</SelectItem>
                      <SelectItem value="attendance">Attendance</SelectItem>
                      <SelectItem value="extracurricular">Extra-curricular</SelectItem>
                      <SelectItem value="general">General</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="visibility">Visibility</Label>
                  <Select>
                    <SelectTrigger id="visibility">
                      <SelectValue placeholder="Select visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="private">Staff Only</SelectItem>
                      <SelectItem value="student">Student & Staff</SelectItem>
                      <SelectItem value="parent">Parent & Staff</SelectItem>
                      <SelectItem value="all">All</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="remark">Remark</Label>
                <Textarea id="remark" placeholder="Enter remark" className="min-h-[120px]" />
              </div>
              
              <div className="flex justify-end gap-4">
                <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Save Remark</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center mb-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search remarks..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredRemarks.map((remark) => (
          <Card key={remark.id} className="card-hover overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 bg-secondary p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">{remark.student}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Grade: {remark.grade}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      remark.type === "Academic" 
                        ? "bg-blue-100 text-blue-800" 
                        : remark.type === "Behavior"
                        ? "bg-green-100 text-green-800"
                        : remark.type === "Attendance"
                        ? "bg-red-100 text-red-800"
                        : "bg-purple-100 text-purple-800"
                    }`}>
                      {remark.type}
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-3/4 p-4">
                  <div className="flex items-start">
                    <MessageSquare className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <p className="text-sm">{remark.remark}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      By {remark.teacher} • {remark.date}
                    </div>
                    <Button variant="ghost" size="sm">Reply</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RemarksPage;
