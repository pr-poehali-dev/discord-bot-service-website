import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Changelog = () => {
  const updates = [
    {
      version: '2.1.0',
      date: '15 октября 2025',
      type: 'feature',
      items: [
        { icon: 'Sparkles', text: 'Добавлена система приоритета цветов для турнирного бота' },
        { icon: 'Shield', text: 'Улучшенная безопасность для конфигураций кастомных ботов' },
        { icon: 'Zap', text: 'Улучшена производительность для серверов с высоким трафиком' },
      ],
    },
    {
      version: '2.0.5',
      date: '1 октября 2025',
      type: 'update',
      items: [
        { icon: 'Settings', text: 'Обновлены расчеты системы баллов семейного бота' },
        { icon: 'Bug', text: 'Исправлены проблемы с ветками в управлении сообществом' },
        { icon: 'RefreshCw', text: 'Оптимизированы запросы к базе данных для более быстрых ответов' },
      ],
    },
    {
      version: '2.0.0',
      date: '20 сентября 2025',
      type: 'feature',
      items: [
        { icon: 'Rocket', text: 'Запущен новый интерфейс панели управления' },
        { icon: 'CreditCard', text: 'Интегрирована платежная система Stripe' },
        { icon: 'Bell', text: 'Добавлены уведомления об истечении подписки' },
        { icon: 'Users', text: 'Введена поддержка нескольких серверов' },
      ],
    },
    {
      version: '1.9.2',
      date: '5 сентября 2025',
      type: 'fix',
      items: [
        { icon: 'Bug', text: 'Исправлены проблемы с часовыми поясами в регистрации турниров' },
        { icon: 'AlertCircle', text: 'Решены проблемы с ограничением частоты запросов Discord API' },
        { icon: 'Database', text: 'Исправлены ошибки миграции данных' },
      ],
    },
    {
      version: '1.9.0',
      date: '25 августа 2025',
      type: 'feature',
      items: [
        { icon: 'Trophy', text: 'Добавлен бот для регистрации на турниры' },
        { icon: 'Calendar', text: 'Реализована система планирования событий' },
        { icon: 'Palette', text: 'Создана кастомная система выбора цветов для событий паков' },
      ],
    },
    {
      version: '1.8.5',
      date: '10 августа 2025',
      type: 'update',
      items: [
        { icon: 'ShoppingCart', text: 'Улучшена система магазина с новыми типами предметов' },
        { icon: 'BarChart3', text: 'Добавлена панель аналитики для администраторов сервера' },
        { icon: 'FileCheck', text: 'Улучшен рабочий процесс одобрения заявок' },
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
        return 'Новая функция';
      case 'update':
        return 'Обновление';
      case 'fix':
        return 'Исправление';
      default:
        return 'Релиз';
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
              Обновления продукта
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black text-neon">
              <span className="text-primary">СПИСОК</span>
              <span className="text-secondary">ИЗМЕНЕНИЙ</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Отслеживайте наши последние функции, обновления и улучшения
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
                        <CardTitle className="text-2xl text-neon">Версия {update.version}</CardTitle>
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
              <CardTitle className="text-2xl text-neon text-accent">Будьте в курсе</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Подпишитесь на нашу рассылку, чтобы получать уведомления о новых функциях и обновлениях
              </p>
              <div className="flex gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="flex-1 px-4 py-2 rounded-md bg-background/50 border border-accent/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50"
                />
                <button className="px-6 py-2 rounded-md bg-accent hover:bg-accent/80 text-accent-foreground font-semibold transition-all glow-purple">
                  Подписаться
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
