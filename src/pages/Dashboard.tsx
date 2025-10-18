import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const [isLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="grid-pattern fixed inset-0 opacity-20 pointer-events-none" />
        
        <main className="relative pt-24 pb-20">
          <div className="container mx-auto px-4 max-w-md">
            <Card className="border-primary/30 bg-card/80 backdrop-blur-sm glow-cyan">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-lg bg-primary/20 border border-primary/50">
                    <Icon name="UserCircle" className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-3xl text-neon text-primary">SIGN IN</CardTitle>
                <CardDescription>Access your dashboard and manage your bots</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="bg-background/50 border-primary/30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" className="bg-background/50 border-primary/30" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-bold glow-cyan">
                  <Icon name="LogIn" className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
                <div className="text-center">
                  <Button variant="link" className="text-muted-foreground hover:text-primary">
                    Don't have an account? Register
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="grid-pattern fixed inset-0 opacity-20 pointer-events-none" />

      <main className="relative pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-8 space-y-2">
            <h1 className="text-4xl md:text-5xl font-black text-neon">
              <span className="text-primary">DASHBOARD</span>
            </h1>
            <p className="text-muted-foreground text-lg">Manage your bots and subscriptions</p>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full max-w-3xl grid-cols-4 bg-card/50 border border-primary/20">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-primary/30 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-muted-foreground">Active Bots</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary">0</div>
                  </CardContent>
                </Card>
                <Card className="border-secondary/30 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-muted-foreground">Total Servers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-secondary">0</div>
                  </CardContent>
                </Card>
                <Card className="border-accent/30 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-muted-foreground">Balance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-accent">$0.00</div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-primary/30 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-neon">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button className="bg-primary hover:bg-primary/80 text-primary-foreground">
                    <Icon name="Plus" className="mr-2 h-4 w-4" />
                    Add Bot
                  </Button>
                  <Button className="bg-secondary hover:bg-secondary/80 text-secondary-foreground">
                    <Icon name="Settings" className="mr-2 h-4 w-4" />
                    Configure
                  </Button>
                  <Button className="bg-accent hover:bg-accent/80 text-accent-foreground">
                    <Icon name="DollarSign" className="mr-2 h-4 w-4" />
                    Top Up
                  </Button>
                  <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                    <Icon name="HelpCircle" className="mr-2 h-4 w-4" />
                    Support
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="subscriptions" className="space-y-6">
              <Card className="border-primary/30 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-neon">Active Subscriptions</CardTitle>
                  <CardDescription>No active subscriptions yet</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Icon name="Package" className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">You don't have any active bot subscriptions</p>
                    <Button className="bg-primary hover:bg-primary/80 text-primary-foreground glow-cyan">
                      <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                      Browse Bots
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card className="border-primary/30 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-neon">Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" placeholder="YourUsername" className="bg-background/50 border-primary/30" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-settings">Email</Label>
                    <Input id="email-settings" type="email" placeholder="your@email.com" className="bg-background/50 border-primary/30" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-secondary/30 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-neon">Notification Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Subscription Expiry Alerts</Label>
                      <p className="text-sm text-muted-foreground">Get notified before your subscription ends</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Feature Updates</Label>
                      <p className="text-sm text-muted-foreground">Receive updates about new features</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Product Announcements</Label>
                      <p className="text-sm text-muted-foreground">Be the first to know about new bots</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="billing" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-accent/30 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-neon">Current Balance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-4xl font-bold text-accent">$0.00</div>
                    <Button className="w-full bg-accent hover:bg-accent/80 text-accent-foreground glow-purple">
                      <Icon name="Plus" className="mr-2 h-4 w-4" />
                      Top Up Balance
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-primary/30 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-neon">Payment History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Icon name="Receipt" className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">No payment history yet</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
