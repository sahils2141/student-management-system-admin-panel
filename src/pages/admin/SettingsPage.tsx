
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Settings, Bell, Moon, Sun, UserCog, Shield } from "lucide-react";

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [loginAlerts, setLoginAlerts] = useState(true);
  
  const handleSaveSettings = () => {
    toast.success("Settings saved successfully!");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <Button onClick={handleSaveSettings}>Save Changes</Button>
      </div>

      <Tabs defaultValue="appearance" className="w-full">
        <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
          <TabsTrigger value="appearance" className="flex gap-2 items-center">
            <Sun className="h-4 w-4" />
            <span className="hidden sm:inline">Appearance</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex gap-2 items-center">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="privacy" className="flex gap-2 items-center">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">Privacy</span>
          </TabsTrigger>
          <TabsTrigger value="account" className="flex gap-2 items-center">
            <UserCog className="h-4 w-4" />
            <span className="hidden sm:inline">Account</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="appearance" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex gap-2 items-center">
                <Settings className="h-5 w-5" />
                Appearance Settings
              </CardTitle>
              <CardDescription>Customize how the application looks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable dark mode for a more comfortable viewing experience in low light
                  </p>
                </div>
                <Switch 
                  id="dark-mode" 
                  checked={darkMode} 
                  onCheckedChange={setDarkMode}
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium leading-none">Color Theme</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <Button variant="outline" className="justify-start">
                    <span className="mr-2 h-4 w-4 rounded-full bg-primary"></span>
                    <span>Default</span>
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <span className="mr-2 h-4 w-4 rounded-full bg-blue-500"></span>
                    <span>Blue</span>
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <span className="mr-2 h-4 w-4 rounded-full bg-green-500"></span>
                    <span>Green</span>
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <span className="mr-2 h-4 w-4 rounded-full bg-purple-500"></span>
                    <span>Purple</span>
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <span className="mr-2 h-4 w-4 rounded-full bg-amber-500"></span>
                    <span>Amber</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex gap-2 items-center">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications via email
                  </p>
                </div>
                <Switch 
                  id="email-notifications" 
                  checked={emailNotifications} 
                  onCheckedChange={setEmailNotifications}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="push-notifications">Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications in your browser
                  </p>
                </div>
                <Switch 
                  id="push-notifications" 
                  checked={pushNotifications} 
                  onCheckedChange={setPushNotifications}
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium leading-none">Notification Types</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="student-updates">Student Updates</Label>
                    <Switch id="student-updates" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="fee-reminders">Fee Reminders</Label>
                    <Switch id="fee-reminders" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="system-alerts">System Alerts</Label>
                    <Switch id="system-alerts" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="privacy" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex gap-2 items-center">
                <Shield className="h-5 w-5" />
                Privacy & Security
              </CardTitle>
              <CardDescription>Manage your privacy settings and security options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="login-alerts">Login Alerts</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified when someone logs into your account
                  </p>
                </div>
                <Switch 
                  id="login-alerts" 
                  checked={loginAlerts} 
                  onCheckedChange={setLoginAlerts}
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium leading-none">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="text-sm">Protect your account with 2FA</p>
                    <p className="text-xs text-muted-foreground">
                      Not enabled
                    </p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => toast.info("2FA setup would launch here")}>
                    Setup
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium leading-none">Data & Privacy</h3>
                <div className="grid gap-2">
                  <Button variant="outline" className="justify-start">
                    View Data Usage
                  </Button>
                  <Button variant="outline" className="justify-start">
                    Download Personal Data
                  </Button>
                  <Button variant="outline" className="justify-start text-destructive">
                    Delete Account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="account" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex gap-2 items-center">
                <UserCog className="h-5 w-5" />
                Account Settings
              </CardTitle>
              <CardDescription>Update your account preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium leading-none">Session Management</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Current Session</p>
                      <p className="text-xs text-muted-foreground">
                        Started 2 hours ago • Chrome on Windows
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Current
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Mobile Session</p>
                      <p className="text-xs text-muted-foreground">
                        Started 1 day ago • Safari on iPhone
                      </p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => toast.success("Session terminated successfully")}
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium leading-none">Timezone Settings</h3>
                <div className="grid gap-2">
                  <Button variant="outline" className="justify-between">
                    <span>Current: (UTC-05:00) Eastern Time</span>
                    <span>Change</span>
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium leading-none">Account Actions</h3>
                <div className="grid gap-2">
                  <Button className="w-full" onClick={handleSaveSettings}>
                    Save All Settings
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => toast.info("Settings restored to defaults")}>
                    Reset to Defaults
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
