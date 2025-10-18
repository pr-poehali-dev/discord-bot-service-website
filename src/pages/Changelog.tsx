import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Changelog = () => {
  const updates = [
    {
      version: '2.1.0',
      date: 'October 15, 2025',
      type: 'feature',
      items: [
        { icon: 'Sparkles', text: 'Added Tournament Bot color priority system' },
        { icon: 'Shield', text: 'Enhanced security for custom bot configurations' },
        { icon: 'Zap', text: 'Improved performance for high-traffic servers' },
      ],
    },
    {
      version: '2.0.5',
      date: 'October 1, 2025',
      type: 'update',
      items: [
        { icon: 'Settings', text: 'Updated Family Bot point system calculations' },
        { icon: 'Bug', text: 'Fixed threading issues in community management' },
        { icon: 'RefreshCw', text: 'Optimized database queries for faster responses' },
      ],
    },
    {
      version: '2.0.0',
      date: 'September 20, 2025',
      type: 'feature',
      items: [
        { icon: 'Rocket', text: 'Launched new dashboard interface' },
        { icon: 'CreditCard', text: 'Integrated Stripe payment system' },
        { icon: 'Bell', text: 'Added subscription expiry notifications' },
        { icon: 'Users', text: 'Introduced multi-server support' },
      ],
    },
    {
      version: '1.9.2',
      date: 'September 5, 2025',
      type: 'fix',
      items: [
        { icon: 'Bug', text: 'Fixed tournament registration time zone issues' },
        { icon: 'AlertCircle', text: 'Resolved Discord API rate limiting problems' },
        { icon: 'Database', text: 'Patched data migration bugs' },
      ],
    },
    {
      version: '1.9.0',
      date: 'August 25, 2025',
      type: 'feature',
      items: [
        { icon: 'Trophy', text: 'Added Tournament Registration Bot' },
        { icon: 'Calendar', text: 'Implemented event scheduling system' },
        { icon: 'Palette', text: 'Created custom color selection for Pack events' },
      ],
    },
    {
      version: '1.8.5',
      date: 'August 10, 2025',
      type: 'update',
      items: [
        { icon: 'ShoppingCart', text: 'Enhanced shop system with new item types' },
        { icon: 'BarChart3', text: 'Added analytics dashboard for server admins' },
        { icon: 'FileCheck', text: 'Improved application approval workflow' },
      ],
    },
  ];

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'feature':
        return 'bg-primary/20 text-primary border-primary/50';
      case 'update':
        return 'bg-secondary/20 text-secondary border-secondary/50';
      case 'fix':
        return 'bg-accent/20 text-accent border-accent/50';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted/50';
    }
  };

  const getBadgeText = (type: string) => {
    switch (type) {
      case 'feature':
        return 'New Feature';
      case 'update':
        return 'Update';
      case 'fix':
        return 'Bug Fix';
      default:
        return 'Release';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="grid-pattern fixed inset-0 opacity-20 pointer-events-none" />

      <main className="relative pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 space-y-4 animate-slide-up">
            <Badge className="bg-primary/20 text-primary border-primary/50 glow-cyan text-lg px-4 py-2">
              <Icon name="FileText" className="mr-2 h-4 w-4 inline" />
              Product Updates
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black text-neon">
              <span className="text-primary">CHANGE</span>
              <span className="text-secondary">LOG</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Track our latest features, updates, and improvements
            </p>
          </div>

          <div className="space-y-8">
            {updates.map((update, idx) => (
              <Card 
                key={update.version} 
                className="border-primary/30 bg-card/80 backdrop-blur-sm hover:border-primary/50 transition-all animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-primary/20 border border-primary/50">
                        <Icon name="Package" className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-neon">Version {update.version}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{update.date}</p>
                      </div>
                    </div>
                    <Badge className={getBadgeColor(update.type)}>
                      {getBadgeText(update.type)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {update.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 group">
                        <div className="p-2 rounded-lg bg-primary/10 border border-primary/30 group-hover:border-primary/50 transition-all mt-0.5">
                          <Icon name={item.icon} className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-foreground pt-1.5">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-accent/30 bg-gradient-to-br from-card/80 to-accent/10 backdrop-blur-sm glow-purple mt-12">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-neon text-accent">Stay Updated</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Subscribe to our newsletter to get notified about new features and updates
              </p>
              <div className="flex gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="flex-1 px-4 py-2 rounded-md bg-background/50 border border-accent/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50"
                />
                <button className="px-6 py-2 rounded-md bg-accent hover:bg-accent/80 text-accent-foreground font-semibold transition-all glow-purple">
                  Subscribe
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Changelog;
