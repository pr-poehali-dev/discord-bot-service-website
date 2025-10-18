import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="grid-pattern fixed inset-0 opacity-20 pointer-events-none" />

      <main className="relative pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 space-y-4 animate-slide-up">
            <Badge className="bg-primary/20 text-primary border-primary/50 glow-cyan text-lg px-4 py-2">
              <Icon name="MessageSquare" className="mr-2 h-4 w-4 inline" />
              Get In Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black text-neon">
              <span className="text-primary">CONTACT</span>{' '}
              <span className="text-secondary">US</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-primary/30 bg-card/80 backdrop-blur-sm glow-cyan">
              <CardHeader>
                <CardTitle className="text-2xl text-neon text-primary">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" className="bg-background/50 border-primary/30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="bg-background/50 border-primary/30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What's this about?" className="bg-background/50 border-primary/30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more..." 
                    className="bg-background/50 border-primary/30 min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-bold glow-cyan">
                  <Icon name="Send" className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-secondary/30 bg-card/80 backdrop-blur-sm glow-magenta">
                <CardHeader>
                  <CardTitle className="text-2xl text-neon text-secondary">Discord Community</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Join our Discord server for instant support, feature requests, and community discussions.
                  </p>
                  <Button className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold glow-magenta">
                    <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                    Join Discord Server
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-accent/30 bg-card/80 backdrop-blur-sm glow-purple">
                <CardHeader>
                  <CardTitle className="text-2xl text-neon text-accent">Direct Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Mail" className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">support@nexusbots.dev</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Clock" className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Globe" className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium">Support Hours</p>
                      <p className="text-sm text-muted-foreground">24/7 for premium users</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-neon">FAQ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-primary">How fast is bot deployment?</p>
                    <p className="text-muted-foreground">Instant for ready-made bots, 2-7 days for custom bots</p>
                  </div>
                  <div>
                    <p className="font-medium text-secondary">Can I cancel anytime?</p>
                    <p className="text-muted-foreground">Yes, no long-term commitments required</p>
                  </div>
                  <div>
                    <p className="font-medium text-accent">Do you offer refunds?</p>
                    <p className="text-muted-foreground">30-day money-back guarantee for all services</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
