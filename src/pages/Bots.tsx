import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Bots = () => {
  const familyBotFeatures = [
    { icon: 'Users', title: 'Member Lists', description: 'Comprehensive member directory with profiles' },
    { icon: 'Award', title: 'Point System', description: 'Gamification with rewards and achievements' },
    { icon: 'ShoppingCart', title: 'Shop Integration', description: 'Virtual shop for server items' },
    { icon: 'FileCheck', title: 'Application Processing', description: 'Automated application workflows' },
    { icon: 'MessageSquare', title: 'Thread Management', description: 'Organize discussions efficiently' },
    { icon: 'BarChart3', title: 'Analytics', description: 'Track community engagement metrics' },
  ];

  const tournamentBotFeatures = [
    { icon: 'Trophy', title: 'MCL Support', description: 'Full integration with MCL tournaments' },
    { icon: 'Gamepad2', title: 'VZM Integration', description: 'Automated VZM registration' },
    { icon: 'Package', title: 'Pack Management', description: 'Handle pack-specific workflows' },
    { icon: 'Zap', title: 'Auto Registration', description: 'Instant tournament sign-ups' },
    { icon: 'Calendar', title: 'Schedule System', description: 'Event timing and reminders' },
    { icon: 'Palette', title: 'Color Priority', description: 'Custom color selection system' },
  ];

  const customBotFeatures = [
    { icon: 'Code2', title: 'Custom Development', description: 'Built from scratch for your needs' },
    { icon: 'Puzzle', title: 'Full Integration', description: 'Connects with any external service' },
    { icon: 'Shield', title: 'Enterprise Security', description: 'Bank-level data protection' },
    { icon: 'Headphones', title: 'Premium Support', description: '24/7 dedicated assistance' },
    { icon: 'Rocket', title: 'Scalable Architecture', description: 'Grows with your community' },
    { icon: 'RefreshCw', title: 'Regular Updates', description: 'Continuous improvements' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="grid-pattern fixed inset-0 opacity-20 pointer-events-none" />

      <main className="relative pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4 animate-slide-up">
            <Badge className="bg-primary/20 text-primary border-primary/50 glow-cyan text-lg px-4 py-2">
              <Icon name="Bot" className="mr-2 h-4 w-4 inline" />
              Bot Catalog
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black text-neon">
              <span className="text-primary">OUR</span>{' '}
              <span className="text-secondary">SOLUTIONS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our bot offerings and find the perfect fit for your Discord server
            </p>
          </div>

          <Tabs defaultValue="family" className="space-y-8">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 bg-card/50 border border-primary/20">
              <TabsTrigger value="family" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Family Bot
              </TabsTrigger>
              <TabsTrigger value="tournament" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
                Tournament Bot
              </TabsTrigger>
              <TabsTrigger value="custom" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                Custom Bot
              </TabsTrigger>
            </TabsList>

            <TabsContent value="family" className="space-y-8">
              <Card className="border-primary/30 bg-card/80 backdrop-blur-sm glow-cyan">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 rounded-lg bg-primary/20 border border-primary/50">
                      <Icon name="Users" className="h-12 w-12 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl text-neon text-primary">Family Community Bot</CardTitle>
                      <CardDescription className="text-lg mt-2">Complete solution for managing your Discord community</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {familyBotFeatures.map((feature, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-primary/10 border border-primary/30 hover:border-primary/50 transition-all">
                        <Icon name={feature.icon} className="h-8 w-8 text-primary mb-2" />
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Link to="/dashboard" className="flex-1">
                      <Button size="lg" className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-bold glow-cyan">
                        <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                        Rent Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tournament" className="space-y-8">
              <Card className="border-secondary/30 bg-card/80 backdrop-blur-sm glow-magenta">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 rounded-lg bg-secondary/20 border border-secondary/50">
                      <Icon name="Trophy" className="h-12 w-12 text-secondary" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl text-neon text-secondary">Tournament Registration Bot</CardTitle>
                      <CardDescription className="text-lg mt-2">Automate tournament registration and management</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tournamentBotFeatures.map((feature, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-secondary/10 border border-secondary/30 hover:border-secondary/50 transition-all">
                        <Icon name={feature.icon} className="h-8 w-8 text-secondary mb-2" />
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Link to="/dashboard" className="flex-1">
                      <Button size="lg" className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold glow-magenta">
                        <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                        Rent Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="custom" className="space-y-8">
              <Card className="border-accent/30 bg-card/80 backdrop-blur-sm glow-purple">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 rounded-lg bg-accent/20 border border-accent/50">
                      <Icon name="Sparkles" className="h-12 w-12 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl text-neon text-accent">Custom Bot Solution</CardTitle>
                      <CardDescription className="text-lg mt-2">Tailored Discord bot built exactly for your needs</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {customBotFeatures.map((feature, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-accent/10 border border-accent/30 hover:border-accent/50 transition-all">
                        <Icon name={feature.icon} className="h-8 w-8 text-accent mb-2" />
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Link to="/dashboard" className="flex-1">
                      <Button size="lg" className="w-full bg-accent hover:bg-accent/80 text-accent-foreground font-bold glow-purple">
                        <Icon name="MessageSquare" className="mr-2 h-5 w-5" />
                        Order Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Bots;
