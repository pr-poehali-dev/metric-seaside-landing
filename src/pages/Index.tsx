import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="MessageCircle" className="text-telegram-blue" size={32} />
            <h1 className="text-2xl font-bold text-black">Метр у моря</h1>
          </div>
          <Button className="bg-gradient-to-r from-telegram-blue to-telegram-light hover:from-telegram-light hover:to-telegram-blue">
            Открыть бота
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-telegram-blue text-white">Телеграм-бот для риелторов</Badge>
              <h2 className="text-5xl font-bold text-black leading-tight">
                Найди идеальную недвижимость 
                <span className="text-telegram-blue"> у моря</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Первый в России телеграм-бот для риелторов с умным поиском объектов недвижимости 
                у моря. Размещайте объявления, находите клиентов и закрывайте сделки быстрее.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-telegram-blue to-telegram-light hover:from-telegram-light hover:to-telegram-blue">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Начать в Telegram
                </Button>
                <Button size="lg" variant="outline" className="border-telegram-blue text-telegram-blue hover:bg-telegram-blue hover:text-white">
                  <Icon name="Play" className="mr-2" size={20} />
                  Посмотреть видео
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-telegram-blue to-telegram-light rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-telegram-blue rounded-full flex items-center justify-center">
                      <Icon name="Bot" className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black">Метр у моря</h3>
                      <p className="text-sm text-gray-500">онлайн</p>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden mb-4">
                    <img 
                      src="/img/d6fd97dd-f435-4b02-a289-868fcae3f072.jpg" 
                      alt="Недвижимость у моря" 
                      className="w-full h-32 object-cover"
                    />
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">🏠 Найдено 247 объектов недвижимости</p>
                    <p className="text-sm text-gray-700">💰 Средняя цена: 8.5 млн ₽</p>
                    <p className="text-sm text-gray-700">📍 Сочи, Анапа, Геленджик</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Преимущества для риелторов</h2>
            <p className="text-xl text-gray-700">Всё что нужно для эффективной работы с недвижимостью</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-telegram-blue to-telegram-light rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Search" className="text-white" size={24} />
                </div>
                <CardTitle className="text-black">Умный поиск</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Найдите нужный объект по району, цене, площади и другим параметрам. 
                  Алгоритм учитывает ваши предпочтения и показывает релевантные варианты.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-telegram-blue to-telegram-light rounded-lg flex items-center justify-center mb-4">
                  <Icon name="PlusCircle" className="text-white" size={24} />
                </div>
                <CardTitle className="text-black">Быстрое размещение</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Добавляйте объявления за 2 минуты. Загружайте фото, указывайте цену и описание. 
                  Автоматическая модерация и публикация в базе.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-telegram-blue to-telegram-light rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Bell" className="text-white" size={24} />
                </div>
                <CardTitle className="text-black">Уведомления</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Получайте моментальные уведомления о новых объектах, которые подходят вашим клиентам. 
                  Не упустите выгодные предложения.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-telegram-blue to-telegram-light rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Heart" className="text-white" size={24} />
                </div>
                <CardTitle className="text-black">Избранное</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Сохраняйте интересные объекты в избранное для быстрого доступа. 
                  Создавайте подборки для разных клиентов.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-telegram-blue to-telegram-light rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BarChart" className="text-white" size={24} />
                </div>
                <CardTitle className="text-black">Аналитика</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Отслеживайте статистику просмотров ваших объявлений, анализируйте рынок и 
                  принимайте взвешенные решения.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-telegram-blue to-telegram-light rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-white" size={24} />
                </div>
                <CardTitle className="text-black">Сеть контактов</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Общайтесь с коллегами, обменивайтесь опытом и находите партнеров для совместных сделок. 
                  Профессиональное комьюнити риелторов.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Как работает бот</h2>
            <p className="text-xl text-gray-700">Простые шаги для начала работы</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-telegram-blue to-telegram-light rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-black">Запустите бота</h3>
              <p className="text-gray-600">
                Нажмите "Начать в Telegram" и следуйте простым инструкциям для регистрации. 
                Подтвердите, что вы риелтор.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-telegram-blue to-telegram-light rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-black">Настройте профиль</h3>
              <p className="text-gray-600">
                Укажите регион работы, специализацию и предпочтения. Бот будет показывать 
                релевантные объекты и клиентов.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-telegram-blue to-telegram-light rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-black">Работайте эффективно</h3>
              <p className="text-gray-600">
                Ищите объекты, размещайте объявления, получайте уведомления и заключайте сделки. 
                Всё в одном месте.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Отзывы риелторов</h2>
            <p className="text-xl text-gray-700">Реальные истории успеха наших пользователей</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-telegram-blue to-telegram-light rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-white" size={20} />
                  </div>
                  <div>
                    <CardTitle className="text-black">Анна Смирнова</CardTitle>
                    <CardDescription>Риелтор, Сочи</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "За первый месяц использования бота закрыла на 40% больше сделок! 
                  Очень удобно получать уведомления о новых объектах прямо в Telegram."
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-telegram-blue to-telegram-light rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-white" size={20} />
                  </div>
                  <div>
                    <CardTitle className="text-black">Михаил Петров</CardTitle>
                    <CardDescription>Риелтор, Анапа</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Бот экономит массу времени на поиск подходящих объектов. 
                  Умный алгоритм действительно работает и показывает только релевантные варианты."
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-telegram-blue to-telegram-light rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-white" size={20} />
                  </div>
                  <div>
                    <CardTitle className="text-black">Елена Козлова</CardTitle>
                    <CardDescription>Риелтор, Геленджик</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Размещаю объявления буквально за 2 минуты. Клиенты находят меня быстрее, 
                  а я трачу больше времени на работу с ними, а не на поиск."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-telegram-blue to-telegram-light">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Готовы увеличить продажи?
            </h2>
            <p className="text-xl text-blue-100">
              Присоединяйтесь к 1000+ риелторов, которые уже используют "Метр у моря" 
              для эффективной работы с недвижимостью у моря.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-telegram-blue hover:bg-gray-100">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Начать работу в боте
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-telegram-blue">
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="MessageCircle" className="text-telegram-blue" size={24} />
                <h3 className="text-xl font-bold">Метр у моря</h3>
              </div>
              <p className="text-gray-400">
                Телеграм-бот для риелторов, работающих с недвижимостью у моря.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Возможности</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Поиск объектов</li>
                <li>Размещение объявлений</li>
                <li>Уведомления</li>
                <li>Аналитика</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Техническая поддержка</li>
                <li>Обучение</li>
                <li>FAQ</li>
                <li>Контакты</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@metrumora.ru</li>
                <li>+7 (999) 123-45-67</li>
                <li>Telegram: @metrumora</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Метр у моря. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;