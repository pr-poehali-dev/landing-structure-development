import { useState } from "react";
import Icon from "@/components/ui/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PORTFOLIO_IMAGES = [
  "https://cdn.poehali.dev/projects/7b734c4e-f3f6-48d8-8bec-e3d412064f76/files/f04aa4c0-351d-4fb2-ae76-d9c696956573.jpg",
  "https://cdn.poehali.dev/projects/7b734c4e-f3f6-48d8-8bec-e3d412064f76/files/db90e62c-a2b5-41e1-8f4e-5148b9bc56f2.jpg",
  "https://cdn.poehali.dev/projects/7b734c4e-f3f6-48d8-8bec-e3d412064f76/files/ff98f690-0e75-42fa-b905-b9e1e113203f.jpg",
];

const scrollToForm = () => {
  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
};

// ─── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-[var(--brand-border)]">
      <div className="container-main flex items-center justify-between h-16">
        <span className="font-montserrat font-800 text-lg text-[var(--brand-dark)]">
          LandPro
        </span>
        <nav className="hidden md:flex items-center gap-7 text-sm font-golos text-[var(--brand-muted)]">
          <a href="#for-whom" className="hover:text-[var(--brand-blue)] transition-colors">Для кого</a>
          <a href="#services" className="hover:text-[var(--brand-blue)] transition-colors">Услуги</a>
          <a href="#portfolio" className="hover:text-[var(--brand-blue)] transition-colors">Портфолио</a>
          <a href="#pricing" className="hover:text-[var(--brand-blue)] transition-colors">Тарифы</a>
          <a href="#faq" className="hover:text-[var(--brand-blue)] transition-colors">FAQ</a>
        </nav>
        <button
          onClick={scrollToForm}
          className="hidden md:inline-flex items-center gap-2 bg-[var(--brand-blue)] text-white font-montserrat font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Получить консультацию
        </button>
        <button
          className="md:hidden p-2 text-[var(--brand-dark)]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--brand-border)] px-4 py-4 flex flex-col gap-3 text-sm font-golos">
          <a href="#for-whom" onClick={() => setMenuOpen(false)} className="py-2 text-[var(--brand-dark)]">Для кого</a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="py-2 text-[var(--brand-dark)]">Услуги</a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)} className="py-2 text-[var(--brand-dark)]">Портфолио</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="py-2 text-[var(--brand-dark)]">Тарифы</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="py-2 text-[var(--brand-dark)]">FAQ</a>
          <button onClick={() => { setMenuOpen(false); scrollToForm(); }} className="mt-2 bg-[var(--brand-blue)] text-white font-montserrat font-semibold px-5 py-2.5 rounded-lg">
            Получить консультацию
          </button>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-white">
      <div className="container-main">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[var(--brand-blue)] text-xs font-montserrat font-semibold px-3 py-1.5 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-blue)] animate-pulse" />
            Запуск за 7 дней
          </div>

          <h1 className="font-montserrat font-black text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-[var(--brand-dark)] mb-6 animate-fade-in-up">
            Лендинг под ключ за 7 дней, который приводит заявки из рекламы
          </h1>

          <p className="font-golos text-lg md:text-xl text-[var(--brand-muted)] mb-8 max-w-2xl animate-fade-in-up delay-100">
            Структура, тексты, дизайн и запуск — чтобы посетители превращались в клиентов.
          </p>

          <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-10 animate-fade-in-up delay-200">
            {[
              { icon: "LayoutTemplate", text: "Прототип и структура под вашу нишу" },
              { icon: "Smartphone", text: "Адаптация под мобильные устройства" },
              { icon: "BarChart2", text: "Подключение аналитики и форм заявок" },
            ].map((item) => (
              <li key={item.text} className="flex items-center gap-2 text-sm font-golos text-[var(--brand-dark)]">
                <Icon name={item.icon} size={16} className="text-[var(--brand-blue)] shrink-0" />
                {item.text}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up delay-300">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white font-montserrat font-bold text-base px-7 py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              Получить структуру лендинга
              <Icon name="ArrowRight" size={18} />
            </button>
            <a
              href="https://t.me/username"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] font-montserrat font-semibold text-base px-7 py-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Icon name="Send" size={18} />
              Написать в Telegram
            </a>
          </div>

          <div className="mt-12 pt-10 border-t border-[var(--brand-border)] flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-400">
            {[
              { icon: "FileText", text: "Работаем по договору" },
              { icon: "Zap", text: "Запуск за 7 дней" },
              { icon: "CreditCard", text: "Оплата по этапам" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2.5 text-sm font-golos text-[var(--brand-muted)]">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <Icon name={item.icon} size={16} className="text-[var(--brand-blue)]" />
                </div>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── For Whom ─────────────────────────────────────────────────────────────────
function ForWhom() {
  const segments = [
    {
      icon: "Store",
      title: "Малый бизнес",
      desc: "Лендинги для услуг и локального бизнеса.",
      color: "bg-blue-50",
      iconColor: "text-[var(--brand-blue)]",
    },
    {
      icon: "GraduationCap",
      title: "Инфобизнес",
      desc: "Лендинги для вебинаров, курсов и онлайн-запусков.",
      color: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      icon: "Briefcase",
      title: "B2B",
      desc: "Лендинги для сложных услуг и корпоративных клиентов.",
      color: "bg-slate-50",
      iconColor: "text-slate-700",
    },
  ];

  return (
    <section id="for-whom" className="section-padding bg-[var(--brand-gray)]">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-[var(--brand-blue)] font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Для кого</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--brand-dark)]">
            Кому подходит наша услуга
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {segments.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-8 border border-[var(--brand-border)] card-hover">
              <div className={`w-14 h-14 rounded-xl ${s.color} flex items-center justify-center mb-5`}>
                <Icon name={s.icon} size={26} className={s.iconColor} />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-[var(--brand-dark)] mb-2">{s.title}</h3>
              <p className="font-golos text-[var(--brand-muted)] text-base leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 bg-[var(--brand-dark)] text-white font-montserrat font-semibold px-7 py-3.5 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Обсудить проект
            <Icon name="ArrowRight" size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function Services() {
  const items = [
    { icon: "Search", title: "Анализ ниши и конкурентов" },
    { icon: "Layout", title: "Структура лендинга" },
    { icon: "PenTool", title: "Продающие тексты" },
    { icon: "Palette", title: "Дизайн интерфейса" },
    { icon: "Code2", title: "Верстка и мобильная адаптация" },
    { icon: "BarChart2", title: "Подключение аналитики и форм заявок" },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-[var(--brand-blue)] font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Состав услуги</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--brand-dark)]">
            Что вы получите
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="flex items-start gap-4 p-6 rounded-xl border border-[var(--brand-border)] hover:border-blue-200 hover:bg-blue-50/40 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <Icon name={item.icon} size={20} className="text-[var(--brand-blue)]" />
              </div>
              <div>
                <span className="font-montserrat font-semibold text-sm text-[var(--brand-muted)] mb-1 block">0{i + 1}</span>
                <h3 className="font-montserrat font-bold text-base text-[var(--brand-dark)]">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Portfolio ────────────────────────────────────────────────────────────────
function Portfolio() {
  const projects = [
    { img: PORTFOLIO_IMAGES[0], title: "Лендинг для онлайн-школы", desc: "Страница для регистрации на онлайн-курс." },
    { img: PORTFOLIO_IMAGES[1], title: "Лендинг для услуг", desc: "Лендинг для генерации заявок на услуги." },
    { img: PORTFOLIO_IMAGES[2], title: "Лендинг для B2B", desc: "Корпоративная посадочная страница для привлечения клиентов." },
  ];

  return (
    <section id="portfolio" className="section-padding bg-[var(--brand-gray)]">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-[var(--brand-blue)] font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Наши работы</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--brand-dark)]">
            Примеры лендингов
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl overflow-hidden border border-[var(--brand-border)] card-hover">
              <div className="h-48 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-bold text-base text-[var(--brand-dark)] mb-2">{p.title}</h3>
                <p className="font-golos text-sm text-[var(--brand-muted)]">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Problems ─────────────────────────────────────────────────────────────────
function Problems() {
  const errors = [
    "Нет четкой структуры страницы",
    "Слабый или непонятный оффер",
    "Отсутствие доверия (отзывы, кейсы)",
    "Плохая мобильная версия",
    "Медленная загрузка сайта",
  ];

  return (
    <section className="section-padding bg-[var(--brand-dark)]">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-blue-400 font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Экспертный взгляд</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white">
            Почему лендинги не дают заявки
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {errors.map((err, i) => (
            <div key={err} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0">
                <Icon name="X" size={14} className="text-red-400" />
              </div>
              <div>
                <span className="font-montserrat font-semibold text-xs text-gray-500 mb-1 block">Ошибка {String(i + 1).padStart(2, "0")}</span>
                <p className="font-golos text-sm text-gray-200">{err}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Advantages ───────────────────────────────────────────────────────────────
function Advantages() {
  const items = [
    { icon: "Target", title: "Маркетинговая структура страницы", desc: "Строим страницу по проверенным фреймворкам, которые конвертируют посетителей." },
    { icon: "Users", title: "UX-дизайн для удобства пользователя", desc: "Интерфейс, который интуитивно понятен и подталкивает к целевому действию." },
    { icon: "Zap", title: "Быстрая загрузка сайта", desc: "Оптимизация кода и изображений для скорости — это влияет на конверсию и рекламу." },
    { icon: "MousePointerClick", title: "Подготовка сайта под рекламу", desc: "Настройка целей, пикселей и форм для эффективной работы с Яндекс.Директ." },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-[var(--brand-blue)] font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Наш подход</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--brand-dark)]">
            Как мы увеличиваем конверсию
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div key={item.title} className="flex gap-5 p-7 rounded-2xl border border-[var(--brand-border)] hover:border-blue-200 hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <Icon name={item.icon} size={22} className="text-[var(--brand-blue)]" />
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-base text-[var(--brand-dark)] mb-2">{item.title}</h3>
                <p className="font-golos text-sm text-[var(--brand-muted)] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────
function Process() {
  const steps = [
    { title: "Обсуждение проекта и брифинг", desc: "Выясняем вашу нишу, цели и пожелания к лендингу." },
    { title: "Анализ ниши и конкурентов", desc: "Изучаем рынок, офферы конкурентов и целевую аудиторию." },
    { title: "Создание прототипа и текстов", desc: "Разрабатываем структуру страницы и продающие тексты." },
    { title: "Дизайн и разработка лендинга", desc: "Создаём визуальный дизайн и верстаем адаптивную страницу." },
    { title: "Запуск сайта", desc: "Размещаем сайт, подключаем аналитику и формы заявок." },
  ];

  return (
    <section className="section-padding bg-[var(--brand-gray)]">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-[var(--brand-blue)] font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Как мы работаем</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--brand-dark)]">
            Процесс разработки
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-5 mb-6 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[var(--brand-blue)] text-white font-montserrat font-bold text-sm flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-[var(--brand-border)] mt-2" />
                )}
              </div>
              <div className="pb-6 last:pb-0">
                <h3 className="font-montserrat font-bold text-base text-[var(--brand-dark)] mb-1">{step.title}</h3>
                <p className="font-golos text-sm text-[var(--brand-muted)] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
function Pricing() {
  const plans = [
    {
      name: "Базовый",
      price: "от 40 000 ₽",
      desc: "Лендинг + дизайн",
      features: ["Разработка дизайна", "Верстка лендинга", "Мобильная адаптация", "Базовая SEO-оптимизация"],
      popular: false,
    },
    {
      name: "Стандарт",
      price: "от 60 000 ₽",
      desc: "Структура + тексты + дизайн",
      features: ["Анализ ниши", "Маркетинговая структура", "Продающие тексты", "Дизайн и верстка", "Мобильная адаптация", "Форма заявки"],
      popular: true,
    },
    {
      name: "Премиум",
      price: "от 80 000 ₽",
      desc: "Лендинг под ключ + аналитика + интеграции",
      features: ["Всё из Стандарта", "Подключение аналитики", "Настройка целей", "Интеграция с CRM", "Поддержка 1 месяц"],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-[var(--brand-blue)] font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Стоимость</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--brand-dark)]">
            Тарифы
          </h2>
          <p className="font-golos text-[var(--brand-muted)] mt-3 max-w-md mx-auto">
            Оплата по этапам. Работаем по договору.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border flex flex-col ${
                plan.popular
                  ? "bg-[var(--brand-blue)] border-[var(--brand-blue)] text-white shadow-xl shadow-blue-200 scale-[1.02]"
                  : "bg-white border-[var(--brand-border)] text-[var(--brand-dark)]"
              }`}
            >
              {plan.popular && (
                <div className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-montserrat font-semibold px-3 py-1 rounded-full mb-4 self-start">
                  <Icon name="Star" size={12} />
                  Популярный
                </div>
              )}
              <h3 className={`font-montserrat font-bold text-xl mb-1 ${plan.popular ? "text-white" : "text-[var(--brand-dark)]"}`}>
                {plan.name}
              </h3>
              <p className={`font-golos text-sm mb-4 ${plan.popular ? "text-blue-100" : "text-[var(--brand-muted)]"}`}>
                {plan.desc}
              </p>
              <p className={`font-montserrat font-black text-3xl mb-6 ${plan.popular ? "text-white" : "text-[var(--brand-dark)]"}`}>
                {plan.price}
              </p>
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 font-golos text-sm">
                    <Icon
                      name="Check"
                      size={15}
                      className={plan.popular ? "text-blue-200" : "text-[var(--brand-blue)]"}
                    />
                    <span className={plan.popular ? "text-blue-50" : "text-[var(--brand-dark)]"}>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToForm}
                className={`w-full font-montserrat font-bold py-3.5 rounded-lg transition-colors ${
                  plan.popular
                    ? "bg-white text-[var(--brand-blue)] hover:bg-blue-50"
                    : "bg-[var(--brand-blue)] text-white hover:bg-blue-700"
                }`}
              >
                Заказать
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQ() {
  const faqs = [
    {
      q: "Сколько стоит разработка лендинга?",
      a: "Стоимость зависит от сложности проекта и выбранного тарифа. Базовые пакеты начинаются от 40 000 рублей. Мы всегда оговариваем стоимость до начала работ и фиксируем её в договоре.",
    },
    {
      q: "Сколько длится разработка?",
      a: "Стандартный срок — 7 рабочих дней с момента получения всех необходимых материалов от клиента. Для премиум-проектов с интеграциями срок может составлять до 14 дней.",
    },
    {
      q: "Можно ли вносить правки?",
      a: "Да, в процессе разработки мы обсуждаем промежуточные варианты и вносим правки на каждом этапе. После сдачи проекта предусмотрено 2 раунда правок.",
    },
    {
      q: "Что нужно от клиента для начала работы?",
      a: "Для старта нужно заполнить бриф, предоставить логотип и фирменные цвета (если есть), описание услуги и целевой аудитории. Если материалов нет — поможем их сформировать.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-[var(--brand-gray)]">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-[var(--brand-blue)] font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Вопросы и ответы</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--brand-dark)]">
            Часто задаваемые вопросы
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white border border-[var(--brand-border)] rounded-xl px-6 data-[state=open]:border-blue-200"
              >
                <AccordionTrigger className="font-montserrat font-semibold text-sm text-[var(--brand-dark)] text-left py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-golos text-sm text-[var(--brand-muted)] pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", niche: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-form" className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[var(--brand-blue)] font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Заявка</p>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--brand-dark)]">
              Оставить заявку
            </h2>
            <p className="font-golos text-[var(--brand-muted)] mt-3">
              Расскажите о проекте — мы свяжемся в течение 1 рабочего дня.
            </p>
          </div>

          {submitted ? (
            <div className="text-center bg-green-50 border border-green-200 rounded-2xl p-12">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle2" size={32} className="text-green-600" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-[var(--brand-dark)] mb-2">Заявка отправлена!</h3>
              <p className="font-golos text-[var(--brand-muted)]">Мы свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[var(--brand-gray)] border border-[var(--brand-border)] rounded-2xl p-8 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-montserrat font-semibold text-xs text-[var(--brand-muted)] uppercase tracking-wide">Имя</label>
                <input
                  type="text"
                  required
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white border border-[var(--brand-border)] rounded-lg px-4 py-3 font-golos text-sm text-[var(--brand-dark)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-montserrat font-semibold text-xs text-[var(--brand-muted)] uppercase tracking-wide">Телефон</label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (999) 000-00-00"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white border border-[var(--brand-border)] rounded-lg px-4 py-3 font-golos text-sm text-[var(--brand-dark)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-montserrat font-semibold text-xs text-[var(--brand-muted)] uppercase tracking-wide">Ниша бизнеса</label>
                <input
                  type="text"
                  required
                  placeholder="Например: стоматология, онлайн-курсы..."
                  value={form.niche}
                  onChange={(e) => setForm({ ...form, niche: e.target.value })}
                  className="w-full bg-white border border-[var(--brand-border)] rounded-lg px-4 py-3 font-golos text-sm text-[var(--brand-dark)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full bg-[var(--brand-blue)] text-white font-montserrat font-bold text-base py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                Получить консультацию
              </button>
              <p className="text-center font-golos text-xs text-[var(--brand-muted)]">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Contacts ─────────────────────────────────────────────────────────────────
function Contacts() {
  return (
    <section className="section-padding bg-[var(--brand-gray)]">
      <div className="container-main">
        <div className="text-center mb-10">
          <p className="text-[var(--brand-blue)] font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Связаться</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--brand-dark)]">
            Контакты
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
          <a
            href="https://t.me/username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 bg-[#229ED9] text-white font-montserrat font-semibold px-6 py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            <Icon name="Send" size={20} />
            Telegram
          </a>
          <a
            href="https://wa.me/79000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 bg-[#25D366] text-white font-montserrat font-semibold px-6 py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            <Icon name="MessageCircle" size={20} />
            WhatsApp
          </a>
          <a
            href="mailto:hello@example.com"
            className="flex-1 flex items-center justify-center gap-3 bg-[var(--brand-dark)] text-white font-montserrat font-semibold px-6 py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            <Icon name="Mail" size={20} />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="py-24 bg-[var(--brand-blue)]">
      <div className="container-main text-center">
        <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl text-white max-w-2xl mx-auto leading-[1.15] mb-6">
          Получите структуру лендинга для вашего проекта
        </h2>
        <p className="font-golos text-blue-100 text-lg mb-10 max-w-lg mx-auto">
          Бесплатная консультация и готовая структура страницы под вашу нишу — за 7 дней до запуска.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center gap-2 bg-white text-[var(--brand-blue)] font-montserrat font-bold text-base px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-xl"
          >
            Оставить заявку
            <Icon name="ArrowRight" size={18} />
          </button>
          <a
            href="https://t.me/username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-montserrat font-semibold text-base px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
          >
            <Icon name="Send" size={18} />
            Написать в Telegram
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-8 bg-[var(--brand-dark)] border-t border-white/10">
      <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-montserrat font-bold text-white text-base">LandPro</span>
        <p className="font-golos text-xs text-gray-500">© 2024 LandPro. Все права защищены.</p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ForWhom />
      <Services />
      <Portfolio />
      <Problems />
      <Advantages />
      <Process />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Contacts />
      <FinalCTA />
      <Footer />
    </div>
  );
}
