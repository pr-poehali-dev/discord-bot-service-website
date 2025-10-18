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
    { icon: 'Users', title: 'Списки участников', description: 'Полный каталог участников с профилями' },
    { icon: 'Award', title: 'Система баллов', description: 'Геймификация с наградами и достижениями' },
    { icon: 'ShoppingCart', title: 'Магазин', description: 'Виртуальный магазин для серверных предметов' },
    { icon: 'FileCheck', title: 'Обработка заявок', description: 'Автоматизированные процессы заявок' },
    { icon: 'MessageSquare', title: 'Управление ветками', description: 'Эффективная организация обсуждений' },
    { icon: 'BarChart3', title: 'Аналитика', description: 'Отслеживание метрик вовлеченности сообщества' },
  ];

  const tournamentBotFeatures = [
    { icon: 'Trophy', title: 'Поддержка MCL', description: 'Полная интеграция с турнирами MCL' },
    { icon: 'Gamepad2', title: 'Интеграция VZM', description: 'Автоматическая регистрация VZM' },
    { icon: 'Package', title: 'Управление паками', description: 'Обработка рабочих процессов паков' },
    { icon: 'Zap', title: 'Авто-регистрация', description: 'Мгновенная запись на турниры' },
    { icon: 'Calendar', title: 'Система расписания', description: 'Таймеры событий и напоминания' },
    { icon: 'Palette', title: 'Приоритет цветов', description: 'Кастомная система выбора цветов' },
  ];

  const customBotFeatures = [
    { icon: 'Code2', title: 'Кастомная разработка', description: 'Создан с нуля под ваши потребности' },
    { icon: 'Puzzle', title: 'Полная интеграция', description: 'Подключение к любым внешним сервисам' },
    { icon: 'Shield', title: 'Корпоративная безопасность', description: 'Защита данных банковского уровня' },
    { icon: 'Headphones', title: 'Премиум поддержка', description: 'Выделенная помощь 24/7' },
    { icon: 'Rocket', title: 'Масштабируемость', description: 'Растет вместе с вашим сообществом' },
    { icon: 'RefreshCw', title: 'Регулярные обновления', description: 'Постоянные улучшения' },
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
              Каталог ботов
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black">
              <span className="text-primary">НАШИ</span>{' '}
              <span className="text-secondary">РЕШЕНИЯ</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Изучите наши боты и найдите идеальное решение для вашего Discord сервера
            </p>
          </div>

          <Tabs defaultValue="family" className="space-y-8">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 bg-card/50 border border-primary/20">
              <TabsTrigger value="family" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Семейный бот
              </TabsTrigger>
              <TabsTrigger value="tournament" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
                Турнирный бот
              </TabsTrigger>
              <TabsTrigger value="custom" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                Кастомный бот
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
                      <CardTitle className="text-3xl text-primary">Бот для семейного сообщества</CardTitle>
                      <CardDescription className="text-lg mt-2">Комплексное решение для управления вашим Discord сообществом</CardDescription>
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
                        Арендовать
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
                      <CardTitle className="text-3xl text-secondary">Бот для турнирной регистрации</CardTitle>
                      <CardDescription className="text-lg mt-2">Автоматизация регистрации и управления турнирами</CardDescription>
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
                        Арендовать
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
                      <CardTitle className="text-3xl text-accent">Кастомное решение</CardTitle>
                      <CardDescription className="text-lg mt-2">Индивидуальный Discord бот, созданный точно под ваши требования</CardDescription>
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
                        Заказать
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