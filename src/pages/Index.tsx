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
      name: 'Семейный бот',
      description: 'Полное решение для управления сообществом',
      features: ['Списки участников', 'Система баллов', 'Магазин', 'Обработка заявок', 'Управление ветками'],
      icon: 'Users',
      color: 'primary',
    },
    {
      id: 2,
      name: 'Турнирный бот',
      description: 'Автоматизация регистрации на турниры',
      features: ['Поддержка MCL', 'Интеграция VZM', 'Управление паками', 'Авто-регистрация', 'Система расписания'],
      icon: 'Trophy',
      color: 'secondary',
    },
    {
      id: 3,
      name: 'Кастомный бот',
      description: 'Разработка под ваши задачи',
      features: ['Любые функции', 'Полная интеграция', 'Премиум поддержка', 'Масштабируемость', 'Регулярные обновления'],
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
              Discord боты нового поколения
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-black text-neon">
              <span className="text-primary">МОЩНЫЕ</span>
              <br />
              <span className="text-secondary">DISCORD БОТЫ</span>
              <br />
              <span className="text-accent">ДЛЯ ВАШЕГО СЕРВЕРА</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              Арендуйте готовые решения или закажите кастомного Discord бота под ваши уникальные задачи
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/bots">
                <Button size="lg" className="glow-cyan bg-primary hover:bg-primary/80 text-primary-foreground font-bold text-lg px-8 py-6 group">
                  <Icon name="Rocket" className="mr-2 h-5 w-5 group-hover:animate-pulse-glow" />
                  Выбрать бота
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 font-bold text-lg px-8 py-6">
                  <Icon name="UserCircle" className="mr-2 h-5 w-5" />
                  Начать
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-neon">
              <span className="text-primary">ВЫБЕРИТЕ</span>{' '}
              <span className="text-secondary">РЕШЕНИЕ</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Готовые боты или кастомная разработка под ваши задачи
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
                      {bot.id === 3 ? 'Под заказ' : 'Готово'}
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
                      {bot.id === 3 ? 'Заказать' : 'Арендовать'}
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
                <span className="text-accent">НУЖНО ЧТО-ТО УНИКАЛЬНОЕ?</span>
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground mt-4">
                Мы разрабатываем кастомных Discord ботов под ваши специфические требования
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {[
                  { icon: 'Code2', title: 'Любые функции', desc: 'Реализуем именно то, что нужно' },
                  { icon: 'Shield', title: 'Надёжность', desc: 'Корпоративный уровень безопасности' },
                  { icon: 'Headphones', title: 'Премиум поддержка', desc: 'Помощь 24/7' },
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
                  Начать проект
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