import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="grid-pattern fixed inset-0 opacity-20 pointer-events-none" />
        
        <main className="relative pt-24 pb-20">
          <div className="container mx-auto px-4 max-w-md">
            <Card className="border-primary/30 bg-card/80 backdrop-blur-sm glow-cyan">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-lg bg-primary/20 border border-primary/50">
                    <Icon name="UserCircle" className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-3xl text-neon text-primary">ВХОД</CardTitle>
                <CardDescription>Войдите в личный кабинет для управления ботами</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={() => setIsLoggedIn(true)}
                  className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-bold glow-cyan"
                >
                  <Icon name="LogIn" className="mr-2 h-4 w-4" />
                  Войти
                </Button>
                <div className="text-center">
                  <Button 
                    variant="link" 
                    onClick={() => setIsLoggedIn(true)}
                    className="text-muted-foreground hover:text-primary"
                  >
                    Нет аккаунта? Зарегистрироваться
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="grid-pattern fixed inset-0 opacity-20 pointer-events-none" />

      <main className="relative pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-8 space-y-2">
            <h1 className="text-4xl md:text-5xl font-black text-neon">
              <span className="text-primary">КАБИНЕТ</span>
            </h1>
            <p className="text-muted-foreground text-lg">Управление ботами и подписками</p>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full max-w-3xl grid-cols-4 bg-card/50 border border-primary/20">
              <TabsTrigger value="overview">Обзор</TabsTrigger>
              <TabsTrigger value="subscriptions">Подписки</TabsTrigger>
              <TabsTrigger value="settings">Настройки</TabsTrigger>
              <TabsTrigger value="billing">Оплата</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-primary/30 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-muted-foreground">Активные боты</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary">0</div>
                  </CardContent>
                </Card>
                <Card className="border-secondary/30 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-muted-foreground">Всего серверов</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-secondary">0</div>
                  </CardContent>
                </Card>
                <Card className="border-accent/30 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-muted-foreground">Баланс</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-accent">$0.00</div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-primary/30 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-neon">Быстрые действия</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button className="bg-primary hover:bg-primary/80 text-primary-foreground">
                    <Icon name="Plus" className="mr-2 h-4 w-4" />
                    Добавить бота
                  </Button>
                  <Button className="bg-secondary hover:bg-secondary/80 text-secondary-foreground">
                    <Icon name="Settings" className="mr-2 h-4 w-4" />
                    Настроить
                  </Button>
                  <Button className="bg-accent hover:bg-accent/80 text-accent-foreground">
                    <Icon name="DollarSign" className="mr-2 h-4 w-4" />
                    Пополнить
                  </Button>
                  <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                    <Icon name="HelpCircle" className="mr-2 h-4 w-4" />
                    Поддержка
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="subscriptions" className="space-y-6">
              <Card className="border-primary/30 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-neon">Активные подписки</CardTitle>
                  <CardDescription>Пока нет активных подписок</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Icon name="Package" className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">У вас пока нет активных подписок на ботов</p>
                    <Button className="bg-primary hover:bg-primary/80 text-primary-foreground glow-cyan">
                      <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                      Выбрать бота
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card className="border-primary/30 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-neon">Настройки аккаунта</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="username">Имя пользователя</Label>
                    <Input id="username" placeholder="Ваш никнейм" className="bg-background/50 border-primary/30" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-settings">Email</Label>
                    <Input id="email-settings" type="email" placeholder="your@email.com" className="bg-background/50 border-primary/30" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-secondary/30 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-neon">Настройки уведомлений</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Окончание подписки</Label>
                      <p className="text-sm text-muted-foreground">Получать уведомления до истечения подписки</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Новые функции</Label>
                      <p className="text-sm text-muted-foreground">Получать обновления о новых возможностях</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Новые продукты</Label>
                      <p className="text-sm text-muted-foreground">Узнавайте первыми о новых ботах</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="billing" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-accent/30 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-neon">Текущий баланс</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-4xl font-bold text-accent">0 ₽</div>
                    <Button className="w-full bg-accent hover:bg-accent/80 text-accent-foreground glow-purple">
                      <Icon name="Plus" className="mr-2 h-4 w-4" />
                      Пополнить баланс
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-primary/30 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-neon">История платежей</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Icon name="Receipt" className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Пока нет истории платежей</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;