import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const bots = [
    {
      id: 1,
      name: 'Family Community Bot',
      description: 'Complete community management solution',
      features: ['Member Lists', 'Point System', 'Shop Integration', 'Application Processing', 'Thread Management'],
      icon: 'Users',
      color: 'primary',
    },
    {
      id: 2,
      name: 'Tournament Registration Bot',
      description: 'Automate tournament registration',
      features: ['MCL Support', 'VZM Integration', 'Pack Management', 'Auto Registration', 'Schedule System'],
      icon: 'Trophy',
      color: 'secondary',
    },
    {
      id: 3,
      name: 'Custom Bot Solution',
      description: 'Tailored to your specific needs',
      features: ['Custom Features', 'Full Integration', 'Premium Support', 'Scalable Architecture', 'Regular Updates'],
      icon: 'Sparkles',
      color: 'accent',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="grid-pattern fixed inset-0 opacity-20 pointer-events-none" />

      <main className="relative pt-16">
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="text-center space-y-8 animate-slide-up">
            <Badge className="bg-primary/20 text-primary border-primary/50 glow-cyan text-lg px-4 py-2">
              <Icon name="Zap" className="mr-2 h-4 w-4 inline" />
              Next-Gen Discord Bots
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-black text-neon">
              <span className="text-primary">POWERFUL</span>
              <br />
              <span className="text-secondary">DISCORD BOTS</span>
              <br />
              <span className="text-accent">FOR YOUR COMMUNITY</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              Rent ready-made solutions or develop custom Discord bots tailored to your server's unique needs
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/bots">
                <Button size="lg" className="glow-cyan bg-primary hover:bg-primary/80 text-primary-foreground font-bold text-lg px-8 py-6 group">
                  <Icon name="Rocket" className="mr-2 h-5 w-5 group-hover:animate-pulse-glow" />
                  Explore Bots
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 font-bold text-lg px-8 py-6">
                  <Icon name="UserCircle" className="mr-2 h-5 w-5" />
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-neon">
              <span className="text-primary">CHOOSE YOUR</span>{' '}
              <span className="text-secondary">SOLUTION</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Select from our ready-made bots or build a custom solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bots.map((bot, index) => (
              <Card 
                key={bot.id} 
                className={`border-${bot.color}/30 bg-card/80 backdrop-blur-sm hover:border-${bot.color} transition-all duration-300 hover:scale-105 glow-${bot.color === 'primary' ? 'cyan' : bot.color === 'secondary' ? 'magenta' : 'purple'} animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-${bot.color}/20 border border-${bot.color}/50`}>
                      <Icon name={bot.icon} className={`h-8 w-8 text-${bot.color}`} />
                    </div>
                    <Badge variant="outline" className={`text-${bot.color} border-${bot.color}/50`}>
                      {bot.id === 3 ? 'Custom' : 'Ready'}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-neon">{bot.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {bot.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {bot.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-foreground">
                        <Icon name="CheckCircle2" className={`mr-2 h-4 w-4 text-${bot.color}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to="/bots" className="w-full">
                    <Button 
                      className={`w-full bg-${bot.color} hover:bg-${bot.color}/80 text-${bot.color}-foreground font-semibold`}
                    >
                      {bot.id === 3 ? 'Order Now' : 'Rent Now'}
                      <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <Card className="border-accent/30 bg-gradient-to-br from-card/80 to-accent/10 backdrop-blur-sm glow-purple">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl md:text-5xl font-bold text-neon">
                <span className="text-accent">NEED SOMETHING UNIQUE?</span>
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground mt-4">
                We develop custom Discord bots tailored to your specific requirements
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {[
                  { icon: 'Code2', title: 'Custom Features', desc: 'Built exactly how you want' },
                  { icon: 'Shield', title: 'Secure & Reliable', desc: 'Enterprise-grade security' },
                  { icon: 'Headphones', title: 'Premium Support', desc: '24/7 dedicated assistance' },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-center">
                      <div className="p-4 rounded-lg bg-accent/20 border border-accent/50">
                        <Icon name={item.icon} className="h-8 w-8 text-accent" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
              <Link to="/dashboard">
                <Button size="lg" className="bg-accent hover:bg-accent/80 text-accent-foreground font-bold text-lg px-8 py-6 mt-6">
                  <Icon name="MessageSquare" className="mr-2 h-5 w-5" />
                  Start Your Project
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
