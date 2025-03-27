
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Plus, FileText, BarChart } from "lucide-react";
import { toast } from "sonner";

const ResultsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  
  const results = [
    { id: 1, student: "John Doe", grade: "10th", exam: "Mid Term", total: "450/500", percentage: "90%", rank: "1st" },
    { id: 2, student: "Jane Smith", grade: "9th", exam: "Final", total: "420/500", percentage: "84%", rank: "3rd" },
    { id: 3, student: "David Wilson", grade: "11th", exam: "Quarterly", total: "380/500", percentage: "76%", rank: "5th" },
    { id: 4, student: "Sarah Johnson", grade: "10th", exam: "Mid Term", total: "430/500", percentage: "86%", rank: "2nd" },
    { id: 5, student: "Michael Brown", grade: "12th", exam: "Final", total: "390/500", percentage: "78%", rank: "4th" },
  ];
  
  const filteredResults = results.filter(result => 
    result.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
    result.exam.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleAddResult = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Result added successfully");
    setIsAddDialogOpen(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Examination Results</h2>

        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Result
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Examination Result</DialogTitle>
            </DialogHeader>
            <form className="grid gap-6 py-4" onSubmit={handleAddResult}>
              <div className="grid grid-cols-2 gap-4">
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
                <div className="space-y-2">
                  <Label htmlFor="exam">Examination</Label>
                  <Select>
                    <SelectTrigger id="exam">
                      <SelectValue placeholder="Select exam" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="midterm">Mid Term</SelectItem>
                      <SelectItem value="final">Final</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="halfyearly">Half Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-4">
                <Label>Subject Marks</Label>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="mathematics">Mathematics</Label>
                    <Input id="mathematics" placeholder="Enter marks" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="science">Science</Label>
                    <Input id="science" placeholder="Enter marks" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="english">English</Label>
                    <Input id="english" placeholder="Enter marks" />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="socialScience">Social Science</Label>
                    <Input id="socialScience" placeholder="Enter marks" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Input id="language" placeholder="Enter marks" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="computerScience">Computer Science</Label>
                    <Input id="computerScience" placeholder="Enter marks" />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="totalMarks">Total Marks</Label>
                  <Input id="totalMarks" placeholder="Total marks" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rank">Rank</Label>
                  <Input id="rank" placeholder="Enter rank" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="remarks">Remarks</Label>
                <Input id="remarks" placeholder="Enter remarks" />
              </div>
              
              <div className="flex justify-end gap-4">
                <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Save Result</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Exams</TabsTrigger>
          <TabsTrigger value="midterm">Mid Term</TabsTrigger>
          <TabsTrigger value="final">Final</TabsTrigger>
          <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <Card>
            <CardHeader className="pb-1">
              <div className="flex items-center justify-between">
                <CardTitle>Examination Results</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <BarChart className="h-4 w-4" />
                    View Analytics
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search results..."
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
                      <TableHead>Examination</TableHead>
                      <TableHead>Total Marks</TableHead>
                      <TableHead>Percentage</TableHead>
                      <TableHead>Rank</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredResults.map((result) => (
                      <TableRow key={result.id}>
                        <TableCell className="font-medium">{result.student}</TableCell>
                        <TableCell>{result.grade}</TableCell>
                        <TableCell>{result.exam}</TableCell>
                        <TableCell>{result.total}</TableCell>
                        <TableCell>{result.percentage}</TableCell>
                        <TableCell>{result.rank}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" className="flex items-center gap-1 ml-auto">
                            <FileText className="h-4 w-4" />
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="midterm" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Mid Term Examination Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Showing mid term examination results.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="final" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Final Examination Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Showing final examination results.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="quarterly" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Quarterly Examination Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Showing quarterly examination results.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResultsPage;
