import { useState, useEffect } from "react";
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
const LAPTOP_IMG = "https://cdn.poehali.dev/projects/7b734c4e-f3f6-48d8-8bec-e3d412064f76/files/2e44619c-bd55-496d-9f50-2d6db119c871.jpg";

const scrollToForm = () => {
  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
};
const scrollToPortfolio = () => {
  document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
};

// ─── Sticky CTA Button ────────────────────────────────────────────────────────
function StickyButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
      <button
        onClick={scrollToForm}
        className="flex items-center gap-2 bg-[var(--brand-blue)] text-white font-montserrat font-bold text-sm px-5 py-3.5 rounded-full shadow-2xl shadow-blue-400/40 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <Icon name="MessageSquare" size={16} />
        Получить консультацию
      </button>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/98 shadow-sm" : "bg-white/95"} backdrop-blur border-b border-[var(--brand-border)]`}>
      <div className="container-main flex items-center justify-between h-16">
        <span className="font-montserrat font-extrabold text-lg text-[var(--brand-dark)]">LandPro</span>
        <nav className="hidden md:flex items-center gap-7 text-sm font-golos text-[var(--brand-muted)]">
          <a href="#for-whom" className="hover:text-[var(--brand-blue)] transition-colors">Для кого</a>
          <a href="#services" className="hover:text-[var(--brand-blue)] transition-colors">Услуги</a>
          <a href="#portfolio" className="hover:text-[var(--brand-blue)] transition-colors">Портфолио</a>
          <a href="#pricing" className="hover:text-[var(--brand-blue)] transition-colors">Тарифы</a>
          <a href="#faq" className="hover:text-[var(--brand-blue)] transition-colors">FAQ</a>
        </nav>
        <button
          onClick={scrollToForm}
          className="hidden md:inline-flex items-center gap-2 bg-[var(--brand-blue)] text-white font-montserrat font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          Получить консультацию
        </button>
        <button className="md:hidden p-2 text-[var(--brand-dark)]" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--brand-border)] px-4 py-4 flex flex-col gap-3 text-sm font-golos">
          {[["#for-whom","Для кого"],["#services","Услуги"],["#portfolio","Портфолио"],["#pricing","Тарифы"],["#faq","FAQ"]].map(([href,label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} className="py-2 text-[var(--brand-dark)]">{label}</a>
          ))}
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
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-white overflow-hidden">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[var(--brand-blue)] text-xs font-montserrat font-semibold px-3 py-1.5 rounded-full mb-5 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-blue)] animate-pulse" />
              Запуск за 7 дней
            </div>
            <h1 className="font-montserrat font-black text-4xl sm:text-5xl leading-[1.1] text-[var(--brand-dark)] mb-4 animate-fade-in-up">
              Лендинг под ключ за 7 дней, который приводит заявки из рекламы
            </h1>
            <p className="font-golos text-base text-[var(--brand-blue)] font-semibold mb-3 animate-fade-in-up delay-100">
              Лендинги для услуг, инфобизнеса и B2B
            </p>
            <p className="font-golos text-lg text-[var(--brand-muted)] mb-8 animate-fade-in-up delay-200">
              Структура, тексты, дизайн и запуск — чтобы посетители превращались в клиентов.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8 animate-fade-in-up delay-300">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white font-montserrat font-bold text-base px-7 py-4 rounded-xl hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-blue-200"
              >
                Получить прототип лендинга
                <Icon name="ArrowRight" size={18} />
              </button>
              <button
                onClick={scrollToPortfolio}
                className="inline-flex items-center justify-center gap-2 border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] font-montserrat font-semibold text-base px-7 py-4 rounded-xl hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Посмотреть примеры
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-[var(--brand-border)] animate-fade-in-up delay-400">
              {[
                { text: "Работаем по договору" },
                { text: "Запуск за 7 дней" },
                { text: "Оплата по этапам" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm font-golos text-[var(--brand-muted)]">
                  <Icon name="Check" size={15} className="text-[var(--brand-blue)] shrink-0" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 w-full lg:w-[520px] animate-fade-in delay-300">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl blur-2xl opacity-60" />
              <img src={LAPTOP_IMG} alt="Макет лендинга" className="relative w-full rounded-2xl shadow-2xl object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── For Whom ─────────────────────────────────────────────────────────────────
function ForWhom() {
  const segments = [
    { icon: "Store", title: "Малый бизнес", desc: "Лендинги для услуг, которые приводят заявки из рекламы.", color: "bg-blue-50", iconColor: "text-[var(--brand-blue)]" },
    { icon: "GraduationCap", title: "Инфобизнес", desc: "Страницы для вебинаров, запусков и онлайн-курсов.", color: "bg-indigo-50", iconColor: "text-indigo-600" },
    { icon: "BarChart2", title: "B2B", desc: "Лендинги для сложных услуг и корпоративных клиентов.", color: "bg-slate-50", iconColor: "text-slate-700" },
  ];
  return (
    <section id="for-whom" className="section-padding bg-[var(--brand-gray)]">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-[var(--brand-blue)] font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Для кого</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--brand-dark)]">Кому подходит наша услуга</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {segments.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-8 border border-[var(--brand-border)] hover:shadow-xl hover:-translate-y-2 hover:border-blue-200 transition-all duration-300 cursor-default">
              <div className={`w-16 h-16 rounded-2xl ${s.color} flex items-center justify-center mb-5`}>
                <Icon name={s.icon} size={36} className={s.iconColor} />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-[var(--brand-dark)] mb-2">{s.title}</h3>
              <p className="font-golos text-[var(--brand-muted)] text-base leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 bg-[var(--brand-dark)] text-white font-montserrat font-semibold px-7 py-3.5 rounded-xl hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-200"
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
    { icon: "Search", title: "Анализ ниши и конкурентов", sub: "чтобы создать сильный оффер" },
    { icon: "Layout", title: "Маркетинговая структура страницы", sub: "которая ведёт пользователя к заявке" },
    { icon: "FileText", title: "Продающие тексты", sub: "которые снимают возражения клиента" },
    { icon: "Palette", title: "Дизайн интерфейса", sub: "адаптированный под конверсию" },
    { icon: "Code2", title: "Разработка и мобильная адаптация", sub: "для корректной работы на всех устройствах" },
    { icon: "BarChart2", title: "Подключение аналитики и форм заявок", sub: "для отслеживания результатов" },
  ];
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-[var(--brand-blue)] font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Состав услуги</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--brand-dark)]">Что вы получите</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="flex items-start gap-4 p-6 rounded-xl border border-[var(--brand-border)] hover:border-blue-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <Icon name={item.icon} size={28} className="text-[var(--brand-blue)]" />
              </div>
              <div>
                <span className="font-montserrat font-semibold text-xs text-[var(--brand-muted)] mb-1 block">0{i + 1}</span>
                <h3 className="font-montserrat font-bold text-sm text-[var(--brand-dark)] mb-1">{item.title}</h3>
                <p className="font-golos text-xs text-[var(--brand-muted)]">{item.sub}</p>
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
  const [hovered, setHovered] = useState<number | null>(null);
  const projects = [
    { img: PORTFOLIO_IMAGES[0], title: "Лендинг для онлайн-школы", desc: "Цель: регистрация на вебинар" },
    { img: PORTFOLIO_IMAGES[1], title: "Лендинг для услуг", desc: "Цель: получение заявок" },
    { img: PORTFOLIO_IMAGES[2], title: "Лендинг для B2B", desc: "Цель: привлечение корпоративных клиентов" },
  ];
  return (
    <section id="portfolio" className="section-padding bg-[var(--brand-gray)]">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-[var(--brand-blue)] font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Наши работы</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--brand-dark)]">Примеры лендингов</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl overflow-hidden border border-[var(--brand-border)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className={`w-full h-full object-cover object-top transition-transform duration-500 ${hovered === i ? "scale-105" : "scale-100"}`}
                />
                <div className={`absolute inset-0 bg-[var(--brand-blue)]/70 flex items-center justify-center transition-opacity duration-300 ${hovered === i ? "opacity-100" : "opacity-0"}`}>
                  <button
                    onClick={scrollToForm}
                    className="bg-white text-[var(--brand-blue)] font-montserrat font-bold text-sm px-5 py-2.5 rounded-lg hover:scale-105 transition-transform"
                  >
                    Посмотреть проект
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-bold text-base text-[var(--brand-dark)] mb-1">{p.title}</h3>
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
    { title: "Нет структуры", desc: "пользователь не понимает, что делать дальше" },
    { title: "Слабый оффер", desc: "не ясно, какую проблему решает продукт" },
    { title: "Нет доверия", desc: "отсутствуют отзывы и доказательства" },
    { title: "Плохая мобильная версия", desc: "сайт неудобно использовать на телефоне" },
    { title: "Медленная загрузка", desc: "пользователь уходит со страницы" },
  ];
  return (
    <section className="section-padding" style={{ background: "linear-gradient(135deg, #0d1117 0%, #111827 60%, #0f172a 100%)" }}>
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-blue-400 font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Экспертный взгляд</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white">Почему лендинги не дают заявки</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {errors.map((err, i) => (
            <div key={err.title} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 cursor-default">
              <div className="w-9 h-9 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0">
                <Icon name="X" size={18} className="text-red-400" />
              </div>
              <div>
                <span className="font-montserrat font-semibold text-xs text-gray-500 mb-1 block">Ошибка {String(i + 1).padStart(2, "0")}</span>
                <p className="font-montserrat font-bold text-sm text-gray-100 mb-0.5">{err.title}</p>
                <p className="font-golos text-xs text-gray-400">{err.desc}</p>
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
    { icon: "Filter", title: "Маркетинговая структура страницы", desc: "Строим страницу по проверенным фреймворкам, которые конвертируют посетителей." },
    { icon: "MousePointerClick", title: "UX-дизайн для удобства пользователя", desc: "Интерфейс, который интуитивно понятен и подталкивает к целевому действию." },
    { icon: "Zap", title: "Быстрая загрузка сайта", desc: "Оптимизация кода и изображений — это напрямую влияет на конверсию и рекламу." },
    { icon: "TrendingUp", title: "Подготовка сайта под рекламу", desc: "Настройка целей, пикселей и форм для эффективной работы с Яндекс.Директ." },
    { icon: "LineChart", title: "Аналитика и тестирование", desc: "Подключение Яндекс.Метрики, настройка целей и A/B тестирование ключевых элементов." },
  ];
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-[var(--brand-blue)] font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Наш подход</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--brand-dark)]">Как мы увеличиваем конверсию</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex gap-5 p-7 rounded-2xl border border-[var(--brand-border)] hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <Icon name={item.icon} size={24} className="text-[var(--brand-blue)]" />
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
    { icon: "MessageCircle", title: "Обсуждение проекта и брифинг", desc: "Выясняем вашу нишу, цели и пожелания к лендингу." },
    { icon: "Search", title: "Анализ ниши и конкурентов", desc: "Изучаем рынок, офферы конкурентов и целевую аудиторию." },
    { icon: "Layout", title: "Создание прототипа и текстов", desc: "Разрабатываем структуру страницы и продающие тексты." },
    { icon: "Palette", title: "Дизайн и разработка лендинга", desc: "Создаём визуальный дизайн и верстаем адаптивную страницу." },
    { icon: "Rocket", title: "Запуск сайта", desc: "Размещаем сайт, подключаем аналитику и формы заявок." },
  ];
  return (
    <section className="section-padding bg-[var(--brand-gray)]">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-[var(--brand-blue)] font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Как мы работаем</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--brand-dark)]">Процесс разработки</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-5 group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[var(--brand-blue)] text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-blue-200">
                  <Icon name={step.icon} size={22} />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-[var(--brand-blue)] to-[var(--brand-border)] my-1" />
                )}
              </div>
              <div className="pb-8 last:pb-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-montserrat font-bold text-xs text-[var(--brand-blue)] uppercase tracking-wide">Шаг {i + 1}</span>
                </div>
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
      icon: "Rocket",
      name: "Базовый",
      price: "от 40 000 ₽",
      desc: "Лендинг + дизайн",
      features: ["Структура страницы", "Дизайн интерфейса", "Адаптация под мобильные"],
      popular: false,
    },
    {
      icon: "Zap",
      name: "Стандарт",
      price: "от 60 000 ₽",
      desc: "Структура + тексты + дизайн",
      features: ["Структура страницы", "Продающие тексты", "Дизайн интерфейса", "Адаптация под мобильные", "Запуск сайта"],
      popular: true,
    },
    {
      icon: "Crown",
      name: "Премиум",
      price: "от 80 000 ₽",
      desc: "Лендинг под ключ",
      features: ["Разработка под ключ", "Подключение аналитики", "Интеграции и CRM", "Расширенная поддержка"],
      popular: false,
    },
  ];
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-[var(--brand-blue)] font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Стоимость</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--brand-dark)]">Тарифы</h2>
          <p className="font-golos text-[var(--brand-muted)] mt-3">Оплата по этапам. Работаем по договору.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border flex flex-col hover:-translate-y-2 transition-all duration-300 ${
                plan.popular
                  ? "bg-[var(--brand-blue)] border-[var(--brand-blue)] text-white shadow-2xl shadow-blue-200 scale-[1.03]"
                  : "bg-white border-[var(--brand-border)] hover:shadow-xl hover:border-blue-200"
              }`}
            >
              {plan.popular && (
                <div className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-montserrat font-semibold px-3 py-1 rounded-full mb-4 self-start">
                  <Icon name="Star" size={12} />Популярный
                </div>
              )}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${plan.popular ? "bg-white/20" : "bg-blue-50"}`}>
                <Icon name={plan.icon} size={24} className={plan.popular ? "text-white" : "text-[var(--brand-blue)]"} />
              </div>
              <h3 className={`font-montserrat font-bold text-xl mb-1 ${plan.popular ? "text-white" : "text-[var(--brand-dark)]"}`}>{plan.name}</h3>
              <p className={`font-golos text-sm mb-4 ${plan.popular ? "text-blue-100" : "text-[var(--brand-muted)]"}`}>{plan.desc}</p>
              <p className={`font-montserrat font-black text-3xl mb-6 ${plan.popular ? "text-white" : "text-[var(--brand-dark)]"}`}>{plan.price}</p>
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 font-golos text-sm">
                    <Icon name="Check" size={15} className={plan.popular ? "text-blue-200" : "text-[var(--brand-blue)]"} />
                    <span className={plan.popular ? "text-blue-50" : "text-[var(--brand-dark)]"}>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToForm}
                className={`w-full font-montserrat font-bold py-3.5 rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 ${
                  plan.popular ? "bg-white text-[var(--brand-blue)] hover:bg-blue-50" : "bg-[var(--brand-blue)] text-white hover:bg-blue-700"
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
    { q: "Сколько стоит разработка лендинга?", a: "Стоимость зависит от сложности проекта и выбранного тарифа. Базовые пакеты начинаются от 40 000 рублей. Стоимость всегда фиксируется в договоре до начала работ." },
    { q: "Сколько длится разработка?", a: "Стандартный срок — 7 рабочих дней с момента получения всех необходимых материалов от клиента. Для премиум-проектов срок может составлять до 14 дней." },
    { q: "Можно ли внести правки?", a: "Да, мы обсуждаем промежуточные варианты и вносим правки на каждом этапе. После сдачи проекта предусмотрено 2 раунда правок без дополнительной оплаты." },
    { q: "Что нужно от клиента для начала работы?", a: "Бриф, логотип и фирменные цвета (если есть), описание услуги и целевой аудитории. Если материалов нет — поможем их сформировать." },
    { q: "Работаете ли вы по договору?", a: "Да, мы работаем только по официальному договору. В нём фиксируются сроки, стоимость, состав работ и условия оплаты." },
    { q: "Можно ли подключить CRM?", a: "Да, подключаем AmoCRM, Битрикс24 и другие CRM-системы. Это входит в тариф Премиум или добавляется отдельно к любому тарифу." },
  ];
  return (
    <section id="faq" className="section-padding bg-[var(--brand-gray)]">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-[var(--brand-blue)] font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Вопросы и ответы</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--brand-dark)]">Часто задаваемые вопросы</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white border border-[var(--brand-border)] rounded-xl px-6 data-[state=open]:border-blue-200 data-[state=open]:shadow-md transition-all duration-200"
              >
                <AccordionTrigger className="font-montserrat font-semibold text-sm text-[var(--brand-dark)] text-left py-5 hover:no-underline gap-3">
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-50 text-[var(--brand-blue)] font-montserrat font-bold text-xs flex items-center justify-center shrink-0">?</span>
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="font-golos text-sm text-[var(--brand-muted)] pb-5 leading-relaxed pl-9">
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
  const [form, setForm] = useState({ name: "", phone: "", niche: "", budget: "" });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  const fields = [
    { key: "name",   icon: "User",    label: "Имя",             placeholder: "Ваше имя",                          type: "text" },
    { key: "phone",  icon: "Phone",   label: "Телефон",          placeholder: "+7 (999) 000-00-00",                type: "tel" },
    { key: "niche",  icon: "Briefcase",label: "Ниша бизнеса",   placeholder: "Например: стоматология, онлайн-курсы...", type: "text" },
    { key: "budget", icon: "Wallet",  label: "Бюджет проекта",   placeholder: "Например: 50 000 – 70 000 ₽",       type: "text" },
  ];
  return (
    <section id="contact-form" className="section-padding bg-white">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="flex-1 w-full max-w-xl">
            <div className="mb-10">
              <p className="text-[var(--brand-blue)] font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Заявка</p>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--brand-dark)]">Оставить заявку</h2>
              <p className="font-golos text-[var(--brand-muted)] mt-3">Расскажите о проекте — мы свяжемся в течение 1 рабочего дня.</p>
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
                {fields.map((field) => (
                  <div key={field.key} className="flex flex-col gap-1.5">
                    <label className="font-montserrat font-semibold text-xs text-[var(--brand-muted)] uppercase tracking-wide">{field.label}</label>
                    <div className="relative">
                      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Icon name={field.icon} size={16} className="text-gray-400" />
                      </div>
                      <input
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full bg-white border border-[var(--brand-border)] rounded-lg pl-10 pr-4 py-3 font-golos text-sm text-[var(--brand-dark)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                      />
                    </div>
                  </div>
                ))}
                <button
                  type="submit"
                  className="mt-2 w-full bg-[var(--brand-blue)] text-white font-montserrat font-bold text-base py-4 rounded-xl hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-blue-200"
                >
                  Получить консультацию
                </button>
                <p className="text-center font-golos text-xs text-[var(--brand-muted)]">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
          <div className="hidden lg:block flex-shrink-0 w-[440px]">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl blur-2xl opacity-50" />
              <img src={LAPTOP_IMG} alt="Пример лендинга" className="relative w-full rounded-2xl shadow-xl object-cover" />
            </div>
          </div>
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
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--brand-dark)]">Контакты</h2>
          <p className="font-golos text-[var(--brand-muted)] mt-3 flex items-center justify-center gap-2">
            <Icon name="Clock" size={15} className="text-[var(--brand-blue)]" />
            Отвечаем в течение 15 минут
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-6">
          <a
            href="https://t.me/username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 bg-[#229ED9] text-white font-montserrat font-semibold px-6 py-4 rounded-xl hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Icon name="Send" size={20} />Telegram
          </a>
          <a
            href="https://wa.me/79000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 bg-[#25D366] text-white font-montserrat font-semibold px-6 py-4 rounded-xl hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Icon name="MessageCircle" size={20} />WhatsApp
          </a>
          <a
            href="mailto:hello@example.com"
            className="flex-1 flex items-center justify-center gap-3 bg-[var(--brand-dark)] text-white font-montserrat font-semibold px-6 py-4 rounded-xl hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Icon name="Mail" size={20} />Email
          </a>
        </div>
        <div className="text-center">
          <a
            href="tel:+79000000000"
            className="inline-flex items-center gap-2 font-montserrat font-semibold text-[var(--brand-dark)] hover:text-[var(--brand-blue)] transition-colors text-lg"
          >
            <Icon name="Phone" size={20} className="text-[var(--brand-blue)]" />
            +7 (900) 000-00-00
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="relative py-24 bg-[var(--brand-blue)] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none">
        <img src={LAPTOP_IMG} alt="" className="w-full h-full object-cover opacity-10 blur-sm scale-105" />
      </div>
      <div className="relative container-main text-center">
        <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl text-white max-w-2xl mx-auto leading-[1.15] mb-4">
          Получите структуру лендинга для вашего проекта
        </h2>
        <p className="font-golos text-blue-100 text-lg mb-10 max-w-lg mx-auto">
          и консультацию по запуску рекламы
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center gap-2 bg-white text-[var(--brand-blue)] font-montserrat font-bold text-base px-8 py-4 rounded-xl hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl"
          >
            Оставить заявку
            <Icon name="ArrowRight" size={18} />
          </button>
          <a
            href="https://t.me/username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-montserrat font-semibold text-base px-8 py-4 rounded-xl hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Icon name="Send" size={18} />Написать в Telegram
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
      <StickyButton />
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
