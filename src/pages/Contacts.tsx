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
              Свяжитесь с нами
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black">
              <span className="text-primary">НАШИ</span>{' '}
              <span className="text-secondary">КОНТАКТЫ</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Есть вопросы? Мы будем рады услышать вас
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-primary/30 bg-card/80 backdrop-blur-sm glow-cyan">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Отправить сообщение</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" className="bg-background/50 border-primary/30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="bg-background/50 border-primary/30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Тема</Label>
                  <Input id="subject" placeholder="О чем речь?" className="bg-background/50 border-primary/30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите подробнее..." 
                    className="bg-background/50 border-primary/30 min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-bold glow-cyan">
                  <Icon name="Send" className="mr-2 h-4 w-4" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-secondary/30 bg-card/80 backdrop-blur-sm glow-magenta">
                <CardHeader>
                  <CardTitle className="text-2xl text-secondary">Discord сообщество</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Присоединяйтесь к нашему Discord серверу для мгновенной поддержки, запросов функций и обсуждений сообщества.
                  </p>
                  <Button className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold glow-magenta">
                    <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                    Присоединиться к Discord серверу
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-accent/30 bg-card/80 backdrop-blur-sm glow-purple">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">Прямой контакт</CardTitle>
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
                      <p className="font-medium">Время ответа</p>
                      <p className="text-sm text-muted-foreground">Обычно в течение 24 часов</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Globe" className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium">Часы поддержки</p>
                      <p className="text-sm text-muted-foreground">24/7 для премиум пользователей</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">FAQ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-primary">Как быстро происходит развертывание бота?</p>
                    <p className="text-muted-foreground">Мгновенно для готовых ботов, 2-7 дней для кастомных ботов</p>
                  </div>
                  <div>
                    <p className="font-medium text-secondary">Могу ли я отменить в любое время?</p>
                    <p className="text-muted-foreground">Да, долгосрочные обязательства не требуются</p>
                  </div>
                  <div>
                    <p className="font-medium text-accent">Вы предлагаете возврат средств?</p>
                    <p className="text-muted-foreground">30-дневная гарантия возврата денег для всех услуг</p>
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