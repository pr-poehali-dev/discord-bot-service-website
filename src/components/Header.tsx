import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Боты', path: '/bots' },
    { name: 'Обновления', path: '/changelog' },
    { name: 'Контакты', path: '/contacts' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Icon name="Bot" className="h-8 w-8 text-primary group-hover:animate-glitch" />
              <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all" />
            </div>
            <span className="text-2xl font-bold text-primary">NEXUS</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/10 transition-all">
                  {link.name}
                </Button>
              </Link>
            ))}
            <Link to="/dashboard">
              <Button className="ml-4 glow-cyan bg-primary hover:bg-primary/80 text-primary-foreground font-semibold">
                <Icon name="UserCircle" className="mr-2 h-4 w-4" />
                Кабинет
              </Button>
            </Link>
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" className="h-6 w-6 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-card border-primary/20">
              <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-foreground hover:text-primary hover:bg-primary/10">
                      {link.name}
                    </Button>
                  </Link>
                ))}
                <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                  <Button className="w-full glow-cyan bg-primary hover:bg-primary/80 text-primary-foreground">
                    <Icon name="UserCircle" className="mr-2 h-4 w-4" />
                    Кабинет
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;