import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="border-t border-primary/20 bg-card/50 backdrop-blur-xl mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icon name="Bot" className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-neon text-primary">NEXUS</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Мощные Discord боты для вашего сообщества. Аренда или кастомная разработка под ваши задачи.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Навигация</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Главная</Link>
              <Link to="/bots" className="text-muted-foreground hover:text-primary transition-colors">Боты</Link>
              <Link to="/changelog" className="text-muted-foreground hover:text-primary transition-colors">Обновления</Link>
              <Link to="/contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary">Связь</h3>
            <div className="flex space-x-4">
              <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
                <Icon name="MessageCircle" className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
                <Icon name="Twitter" className="h-6 w-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
                <Icon name="Github" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/10">
          <p className="text-center text-muted-foreground text-sm">
            © 2025 NEXUS Bot Service. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;