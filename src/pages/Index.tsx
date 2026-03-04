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
const LAPTOP_IMG =
  "https://cdn.poehali.dev/projects/7b734c4e-f3f6-48d8-8bec-e3d412064f76/files/2e44619c-bd55-496d-9f50-2d6db119c871.jpg";

const scrollToForm = () =>
  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });

/* ─── Sticky CTA ─────────────────────────────────────────────────────────── */
function StickyButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
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

/* ─── Navbar ─────────────────────────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = [
    ["#for-whom", "Для кого"],
    ["#services", "Услуги"],
    ["#portfolio", "Портфолио"],
    ["#pricing", "Тарифы"],
    ["#faq", "FAQ"],
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 backdrop-blur border-b border-[var(--brand-border)] ${
        scrolled ? "bg-white/98 shadow-sm" : "bg-white/95"
      }`}
    >
      <div className="container-main flex items-center justify-between h-16">
        <span className="font-montserrat font-extrabold text-lg text-[var(--brand-dark)]">LandPro</span>
        <nav className="hidden md:flex items-center gap-7 text-sm font-golos text-[var(--brand-muted)]">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-[var(--brand-blue)] transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <button
          onClick={scrollToForm}
          className="hidden md:inline-flex items-center gap-2 bg-[var(--brand-blue)] text-white font-montserrat font-semibold text-sm px-5 py-2.5 rounded-lg shadow hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          Получить консультацию
        </button>
        <button className="md:hidden p-2 text-[var(--brand-dark)]" onClick={() => setOpen(!open)}>
          <Icon name={open ? "X" : "Menu"} size={22} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-[var(--brand-border)] px-4 py-4 flex flex-col gap-3 text-sm font-golos">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="py-2 text-[var(--brand-dark)]">
              {label}
            </a>
          ))}
          <button
            onClick={() => { setOpen(false); scrollToForm(); }}
            className="mt-2 bg-[var(--brand-blue)] text-white font-montserrat font-semibold px-5 py-2.5 rounded-lg"
          >
            Получить консультацию
          </button>
        </div>
      )}
    </header>
  );
}

/* ─── Hero ───────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="pt-28 pb-24 md:pt-36 md:pb-32 bg-white overflow-hidden">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          {/* text */}
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[var(--brand-blue)] text-xs font-montserrat font-semibold px-3 py-1.5 rounded-full mb-5 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-blue)] animate-pulse" />
              Запуск за 7 дней
            </div>

            <h1 className="font-montserrat font-black text-4xl sm:text-5xl leading-[1.1] text-[var(--brand-dark)] mb-4 animate-fade-in-up">
              Лендинг под ключ за 7 дней, который приводит заявки из рекламы
            </h1>

            <p className="font-golos text-lg text-[var(--brand-muted)] mb-2 animate-fade-in-up delay-100">
              Структура, тексты, дизайн и запуск — чтобы посетители превращались в клиентов.
            </p>
            <p className="font-golos text-base text-[var(--brand-blue)] font-semibold mb-8 animate-fade-in-up delay-200">
              Лендинги для услуг, инфобизнеса и B2B
            </p>

            {/* buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mb-7 animate-fade-in-up delay-300">
              <button
                onClick={scrollToForm}
                style={{ height: 52 }}
                className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white font-montserrat font-bold text-base px-7 rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-[1.03] active:scale-95 transition-all duration-200"
              >
                Получить структуру лендинга
                <Icon name="ArrowRight" size={18} />
              </button>
              <a
                href="https://t.me/username"
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 52 }}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] font-montserrat font-semibold text-base px-7 rounded-xl hover:bg-blue-50 hover:scale-[1.03] active:scale-95 transition-all duration-200"
              >
                <Icon name="Send" size={18} className="text-[var(--brand-blue)]" />
                Написать в Telegram
              </a>
            </div>

            {/* trust row */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4 animate-fade-in-up delay-400">
              {["Работаем по договору", "Срок разработки — от 7 дней", "Оплата по этапам"].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-[14px] font-golos text-[var(--brand-muted)]">
                  <Icon name="Check" size={14} className="text-[var(--brand-blue)] shrink-0" />
                  {t}
                </div>
              ))}
            </div>
            {/* segmentation */}
            <p className="font-golos text-[#6B7280] animate-fade-in-up delay-450" style={{ fontSize: 14, marginTop: 12 }}>
              Подходит для: услуги • инфобизнес • B2B
            </p>
            <p className="font-golos text-sm text-[var(--brand-muted)] flex items-center gap-1.5 mt-3 animate-fade-in-up delay-500">
              <Icon name="Clock" size={14} className="text-[var(--brand-blue)]" />
              Отвечаем в Telegram в течение 10–15 минут
            </p>
          </div>

          {/* laptop image */}
          <div className="flex-shrink-0 w-full lg:w-[550px] self-center animate-fade-in delay-300">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl blur-2xl opacity-60" />
              <img
                src={LAPTOP_IMG}
                alt="Макет лендинга"
                className="relative w-full rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── For Whom ───────────────────────────────────────────────────────────── */
function ForWhom() {
  const segments = [
    { icon: "Store",        title: "Малый бизнес", desc: "Лендинги для услуг, которые приводят заявки из рекламы.",       color: "bg-blue-50",   iconColor: "text-[var(--brand-blue)]" },
    { icon: "GraduationCap", title: "Инфобизнес",  desc: "Страницы для вебинаров, запусков и онлайн-курсов.",             color: "bg-indigo-50", iconColor: "text-indigo-600" },
    { icon: "TrendingUp",   title: "B2B",           desc: "Лендинги для сложных услуг и корпоративных клиентов.",          color: "bg-slate-50",  iconColor: "text-slate-700" },
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
            <div
              key={s.title}
              className="bg-white rounded-2xl p-8 border border-[var(--brand-border)] hover:scale-[1.03] hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-default"
            >
              <div className={`w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center mb-5`}>
                <Icon name={s.icon} size={32} className={s.iconColor} />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-[var(--brand-dark)] mb-2">{s.title}</h3>
              <p className="font-golos text-[var(--brand-muted)] text-base leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 bg-[var(--brand-dark)] text-white font-montserrat font-semibold px-7 py-3.5 rounded-xl shadow hover:bg-gray-800 hover:scale-[1.03] active:scale-95 transition-all duration-200"
          >
            Обсудить проект
            <Icon name="ArrowRight" size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── Services ───────────────────────────────────────────────────────────── */
function Services() {
  const items = [
    { icon: "Search",    title: "Анализ ниши и конкурентов",          sub: "чтобы создать сильный оффер" },
    { icon: "Layout",    title: "Маркетинговая структура страницы",    sub: "которая ведёт пользователя к заявке" },
    { icon: "FileText",  title: "Продающие тексты",                    sub: "которые снимают возражения клиента" },
    { icon: "Palette",   title: "Дизайн интерфейса",                   sub: "адаптированный под конверсию" },
    { icon: "Code2",     title: "Разработка и мобильная адаптация",    sub: "для корректной работы на всех устройствах" },
    { icon: "ClipboardList", title: "Подключение форм заявок",         sub: "для получения лидов" },
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
              className="flex items-start gap-4 p-6 rounded-xl border border-[var(--brand-border)] hover:scale-[1.03] hover:shadow-md hover:border-blue-300 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <Icon name={item.icon} size={26} className="text-[var(--brand-blue)]" />
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

/* ─── Why Landing (NEW block) ─────────────────────────────────────────────── */
function WhyLanding() {
  const cards = [
    { icon: "Rocket",          title: "Быстрый запуск рекламы",             desc: "Лендинг готов к запуску Директа сразу после разработки." },
    { icon: "MousePointerClick", title: "Фокус на конверсии",               desc: "Каждый блок страницы ведёт пользователя к заявке." },
    { icon: "Layout",          title: "Готовая маркетинговая структура",     desc: "Страница строится по проверенным моделям продаж." },
    { icon: "Smartphone",      title: "Адаптация под мобильные устройства", desc: "Корректная работа на всех экранах и браузерах." },
  ];
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-[var(--brand-blue)] font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Преимущества</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--brand-dark)]">Почему бизнес выбирает лендинг</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => (
            <div
              key={c.title}
              className="flex flex-col gap-4 p-7 rounded-2xl border border-[var(--brand-border)] hover:scale-[1.03] hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <Icon name={c.icon} size={26} className="text-[var(--brand-blue)]" />
              </div>
              <h3 className="font-montserrat font-bold text-base text-[var(--brand-dark)]">{c.title}</h3>
              <p className="font-golos text-sm text-[var(--brand-muted)] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Portfolio ──────────────────────────────────────────────────────────── */
function Portfolio() {
  const [hovered, setHovered] = useState<number | null>(null);
  const projects = [
    { img: PORTFOLIO_IMAGES[0], title: "Лендинг для онлайн-школы",  desc: "Цель: регистрация на вебинар" },
    { img: PORTFOLIO_IMAGES[1], title: "Лендинг для услуг",          desc: "Цель: получение заявок" },
    { img: PORTFOLIO_IMAGES[2], title: "Лендинг для B2B",            desc: "Цель: привлечение корпоративных клиентов" },
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
              className="bg-white rounded-2xl overflow-hidden border border-[var(--brand-border)] hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 cursor-default"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative overflow-hidden" style={{ height: 300 }}>
                <img
                  src={p.img}
                  alt={p.title}
                  className={`w-full h-full object-cover object-top transition-transform duration-500 ${hovered === i ? "scale-105" : "scale-100"}`}
                />
                <div
                  className={`absolute inset-0 bg-[var(--brand-blue)]/70 flex items-center justify-center transition-opacity duration-300 ${
                    hovered === i ? "opacity-100" : "opacity-0"
                  }`}
                >
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

/* ─── Landing Structure Preview ─────────────────────────────────────────── */
function LandingStructure() {
  const blocks = [
    { icon: "Monitor",      label: "Первый экран (оффер)",  desc: "Заголовок, подзаголовок и кнопка призыва к действию" },
    { icon: "Star",         label: "Преимущества",          desc: "Ключевые выгоды вашего продукта или услуги" },
    { icon: "ClipboardList",label: "Описание услуги",       desc: "Подробное раскрытие того, что вы предлагаете" },
    { icon: "Trophy",       label: "Кейсы",                 desc: "Примеры реализованных проектов и результаты" },
    { icon: "MessageCircle",label: "Отзывы",                desc: "Социальные доказательства от реальных клиентов" },
    { icon: "HelpCircle",   label: "FAQ",                   desc: "Ответы на частые вопросы и снятие возражений" },
    { icon: "Mail",         label: "Форма заявки",          desc: "Простая форма для захвата контактов клиента" },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-[var(--brand-blue)] font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Структура</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--brand-dark)]">
            Как будет выглядеть ваш лендинг
          </h2>
          <p className="font-golos text-[var(--brand-muted)] mt-3 max-w-xl mx-auto">
            Мы строим страницы по проверенной маркетинговой структуре, которая проводит посетителя от знакомства до заявки
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* left: visual mockup */}
          <div className="flex-shrink-0 w-full lg:w-[340px]">
            <div className="relative bg-white rounded-2xl border border-[var(--brand-border)] shadow-2xl overflow-hidden">
              {/* browser bar */}
              <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-[var(--brand-border)]">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 bg-white rounded-md h-5 ml-2 border border-gray-200 flex items-center px-2">
                  <span className="font-golos text-[10px] text-gray-400 truncate">yoursite.ru</span>
                </div>
              </div>
              {/* mockup blocks */}
              <div className="p-4 flex flex-col gap-2">
                {/* hero */}
                <div className="bg-[var(--brand-blue)] rounded-lg p-4 text-white">
                  <div className="h-2.5 bg-white/60 rounded-full w-3/4 mb-2" />
                  <div className="h-2 bg-white/40 rounded-full w-1/2 mb-3" />
                  <div className="h-7 bg-white/30 rounded-lg w-2/5" />
                </div>
                {/* advantages */}
                <div className="grid grid-cols-3 gap-1.5">
                  {[0,1,2].map((i) => (
                    <div key={i} className="bg-blue-50 rounded-lg p-2.5">
                      <div className="w-5 h-5 rounded bg-blue-200 mb-1.5" />
                      <div className="h-1.5 bg-blue-200 rounded-full w-4/5 mb-1" />
                      <div className="h-1.5 bg-blue-100 rounded-full w-3/5" />
                    </div>
                  ))}
                </div>
                {/* service desc */}
                <div className="bg-gray-50 rounded-lg p-3 border border-[var(--brand-border)]">
                  <div className="h-2 bg-gray-300 rounded-full w-1/3 mb-2" />
                  <div className="flex flex-col gap-1">
                    {[0,1,2].map((i) => <div key={i} className="h-1.5 bg-gray-200 rounded-full" style={{ width: `${75 + i * 10}%` }} />)}
                  </div>
                </div>
                {/* cases + reviews */}
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="bg-indigo-50 rounded-lg p-3">
                    <div className="h-10 bg-indigo-100 rounded mb-1.5" />
                    <div className="h-1.5 bg-indigo-200 rounded-full w-4/5" />
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 border border-[var(--brand-border)]">
                    <div className="flex gap-0.5 mb-1.5">
                      {[0,1,2,3,4].map((s) => <span key={s} className="text-yellow-400 text-[8px]">★</span>)}
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-full w-full mb-1" />
                    <div className="h-1.5 bg-gray-200 rounded-full w-4/5" />
                  </div>
                </div>
                {/* faq */}
                <div className="bg-gray-50 rounded-lg p-3 border border-[var(--brand-border)]">
                  {[0,1].map((i) => (
                    <div key={i} className="flex items-center gap-2 py-1.5 border-b last:border-0 border-gray-200">
                      <div className="h-2 bg-gray-300 rounded-full flex-1" />
                      <div className="w-3 h-3 rounded-full bg-gray-200 shrink-0" />
                    </div>
                  ))}
                </div>
                {/* form */}
                <div className="bg-[var(--brand-blue)]/10 rounded-lg p-3 border border-blue-200">
                  <div className="h-2 bg-blue-200 rounded-full w-1/2 mb-2" />
                  <div className="h-7 bg-white rounded-lg border border-blue-100 mb-1.5" />
                  <div className="h-7 bg-white rounded-lg border border-blue-100 mb-2" />
                  <div className="h-7 bg-[var(--brand-blue)] rounded-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* right: list */}
          <div className="flex-1 flex flex-col gap-3">
            {blocks.map((b, i) => (
              <div
                key={b.label}
                className="flex items-start gap-4 p-5 rounded-xl border border-[var(--brand-border)] bg-white hover:scale-[1.02] hover:shadow-md hover:border-blue-200 transition-all duration-200 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Icon name={b.icon} size={20} className="text-[var(--brand-blue)]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-montserrat font-bold text-xs text-[var(--brand-blue)]">0{i + 1}</span>
                    <h3 className="font-montserrat font-bold text-sm text-[var(--brand-dark)]">{b.label}</h3>
                  </div>
                  <p className="font-golos text-xs text-[var(--brand-muted)]">{b.desc}</p>
                </div>
              </div>
            ))}

            <button
              onClick={scrollToForm}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white font-montserrat font-bold text-base px-7 rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-[1.03] active:scale-95 transition-all duration-200"
              style={{ height: 52 }}
            >
              Получить структуру лендинга
              <Icon name="ArrowRight" size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Problems ───────────────────────────────────────────────────────────── */
function Problems() {
  const errors = [
    { title: "Нет структуры",                    desc: "пользователь не понимает куда нажать" },
    { title: "Слабый оффер",                     desc: "не ясно, какую проблему решает продукт" },
    { title: "Нет доверия",                      desc: "отсутствуют отзывы и доказательства" },
    { title: "Плохая мобильная версия",           desc: "сайт неудобно использовать на телефоне" },
    { title: "Медленная загрузка",               desc: "пользователь покидает страницу" },
    { title: "Нет понятного призыва к действию", desc: "пользователь не понимает, куда нажать и что сделать дальше" },
  ];
  return (
    <section
      className="section-padding"
      style={{ background: "linear-gradient(135deg, #0d1117 0%, #111827 60%, #0f172a 100%)" }}
    >
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-blue-400 font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Экспертный взгляд</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white">Почему лендинги не дают заявки</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {errors.map((err, i) => (
            <div
              key={err.title}
              className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:scale-[1.03] hover:bg-white/10 transition-all duration-300 cursor-default"
            >
              <div className="w-9 h-9 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center shrink-0">
                <Icon name="X" size={18} className="text-red-400" />
              </div>
              <div>
                <span className="font-montserrat font-semibold text-xs text-gray-500 mb-1 block">
                  Ошибка {String(i + 1).padStart(2, "0")}
                </span>
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

/* ─── Advantages ─────────────────────────────────────────────────────────── */
function Advantages() {
  const items = [
    { icon: "Filter",             title: "Маркетинговая структура страницы",   desc: "Строим страницу по проверенным фреймворкам, которые конвертируют посетителей." },
    { icon: "MousePointerClick",  title: "UX-дизайн для удобства пользователя", desc: "Интерфейс интуитивно понятен и подталкивает к целевому действию." },
    { icon: "Zap",                title: "Быстрая загрузка сайта",             desc: "Оптимизация кода и изображений — напрямую влияет на конверсию и рекламу." },
    { icon: "TrendingUp",         title: "Подготовка сайта под рекламу",       desc: "Настройка целей, пикселей и форм для эффективной работы с Яндекс.Директ." },
    { icon: "LineChart",          title: "Аналитика и тестирование",           desc: "Яндекс.Метрика, настройка целей и A/B тестирование ключевых элементов." },
    { icon: "RefreshCw",          title: "Тестирование и улучшение",           desc: "Анализ поведения пользователей и улучшение ключевых элементов страницы." },
  ];
  return (
    <section className="section-padding bg-[var(--brand-gray)]">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-[var(--brand-blue)] font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Наш подход</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--brand-dark)]">Как мы увеличиваем конверсию</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex gap-5 p-7 rounded-2xl bg-white border border-[var(--brand-border)] hover:scale-[1.03] hover:shadow-lg hover:border-blue-200 transition-all duration-300 cursor-default"
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

/* ─── Process ────────────────────────────────────────────────────────────── */
function Process() {
  const steps = [
    { icon: "MessageCircle", title: "Обсуждение проекта и брифинг",    desc: "Выясняем вашу нишу, цели и пожелания к лендингу." },
    { icon: "Search",        title: "Анализ ниши и конкурентов",       desc: "Изучаем рынок, офферы конкурентов и целевую аудиторию." },
    { icon: "Layout",        title: "Создание прототипа и текстов",    desc: "Разрабатываем структуру страницы и продающие тексты." },
    { icon: "Palette",       title: "Дизайн и разработка лендинга",    desc: "Создаём визуальный дизайн и верстаем адаптивную страницу." },
    { icon: "Rocket",        title: "Запуск сайта",                    desc: "Размещаем сайт, подключаем аналитику и формы заявок." },
  ];
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-[var(--brand-blue)] font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Как мы работаем</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--brand-dark)]">Процесс разработки</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-6 group">
              {/* line + icon */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[var(--brand-blue)] text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-blue-200">
                  <Icon name={step.icon} size={22} />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-[var(--brand-blue)] to-[var(--brand-border)] my-1 min-h-[32px]" />
                )}
              </div>
              {/* content */}
              <div className="pb-10 last:pb-0">
                <span className="font-montserrat font-bold text-xs text-[var(--brand-blue)] uppercase tracking-wide mb-1 block">
                  Шаг {i + 1}
                </span>
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

/* ─── Pricing ────────────────────────────────────────────────────────────── */
type PlanFeatureSection = { label: string; items: string[] };
type Plan = {
  icon: string;
  name: string;
  price: string;
  sub?: string;
  subNote?: string;
  desc: string;
  sections: PlanFeatureSection[];
  popular: boolean;
};

function PricingCard({ plan }: { plan: Plan }) {
  const isPopular = plan.popular;
  const textColor = isPopular ? "text-white" : "text-[var(--brand-dark)]";
  const mutedColor = isPopular ? "text-blue-100" : "text-[var(--brand-muted)]";
  const checkColor = isPopular ? "text-blue-200" : "text-[var(--brand-blue)]";
  return (
    <div
      className={`rounded-2xl p-8 border flex flex-col hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 ${
        isPopular
          ? "bg-[var(--brand-blue)] border-[var(--brand-blue)] shadow-xl shadow-blue-200"
          : "bg-white border-[var(--brand-border)] hover:border-blue-200"
      }`}
    >
      {isPopular && (
        <div className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-montserrat font-semibold px-3 py-1 rounded-full mb-4 self-start">
          <Icon name="Star" size={12} />
          Популярный
        </div>
      )}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${isPopular ? "bg-white/20" : "bg-blue-50"}`}>
        <Icon name={plan.icon} size={24} className={isPopular ? "text-white" : "text-[var(--brand-blue)]"} />
      </div>
      <h3 className={`font-montserrat font-bold text-xl mb-1 ${textColor}`}>Тариф «{plan.name}»</h3>
      <p className={`font-golos text-sm mb-3 ${mutedColor}`}>{plan.desc}</p>
      <p className={`font-montserrat font-black text-4xl mb-1 ${isPopular ? "text-white" : "text-[var(--brand-blue)]"}`}>{plan.price}</p>
      {plan.sub && <p className={`font-golos text-xs mb-1 ${mutedColor}`}>{plan.sub}</p>}
      {plan.subNote && <p className={`font-golos text-xs mb-4 font-semibold ${isPopular ? "text-blue-100" : "text-[var(--brand-muted)]"}`}>{plan.subNote}</p>}
      {!plan.sub && <div className="mb-4" />}

      <div className="flex flex-col gap-5 flex-1">
        {plan.sections.map((section) => (
          <div key={section.label}>
            <p className={`font-montserrat font-bold text-xs uppercase tracking-wide mb-2 ${isPopular ? "text-blue-200" : "text-[var(--brand-blue)]"}`}>
              {section.label}:
            </p>
            <ul className="flex flex-col gap-2">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-2 font-golos text-sm">
                  <Icon name="Check" size={14} className={`${checkColor} shrink-0 mt-0.5`} />
                  <span className={isPopular ? "text-blue-50" : "text-[var(--brand-dark)]"}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button
        onClick={scrollToForm}
        style={{ height: 48 }}
        className={`mt-8 w-full font-montserrat font-bold rounded-xl shadow hover:scale-[1.03] active:scale-95 transition-all duration-200 ${
          isPopular
            ? "bg-white text-[var(--brand-blue)] hover:bg-blue-50"
            : "bg-[var(--brand-blue)] text-white hover:bg-blue-700"
        }`}
      >
        Заказать
      </button>
    </div>
  );
}

function Pricing() {
  const plans: Plan[] = [
    {
      icon: "Rocket",
      name: "Базовый",
      price: "40 000 ₽",
      desc: "Готовый лендинг под ключ",
      popular: false,
      sections: [
        {
          label: "Включено",
          items: [
            "Разработка лендинга под ключ",
            "Анализ ниши и конкурентов",
            "Прототипирование структуры страницы",
            "Дизайн для десктопа и мобильных устройств",
            "Продающий копирайтинг",
            "Базовая SEO-настройка (мета-теги, заголовки, структура)",
            "Вёрстка и запуск лендинга",
            "Проверка корректности работы на всех устройствах",
            "Установка SSL-сертификата (HTTPS)",
            "Оптимизация скорости загрузки страницы",
            "Создание адаптивных изображений",
            "Поддержка 3 дня после запуска",
          ],
        },
      ],
    },
    {
      icon: "Zap",
      name: "Стандарт",
      price: "60 000 ₽",
      desc: "Лендинг + Маркетинг",
      popular: true,
      sections: [
        {
          label: "Включено",
          items: ["Всё из тарифа «Базовый»"],
        },
        {
          label: "Дополнительно",
          items: [
            "Подключение Яндекс Метрики",
            "Настройка целей для кнопок и звонков",
            "Установка Яндекс Вебмастера",
            "Настройка рекламных кампаний в Яндекс Директ",
            "Проверка передачи данных в Метрику",
            "Настройка тепловых карт",
            "Создание объявлений",
            "Согласование ключевых слов",
            "Поддержка 7 дней после запуска",
          ],
        },
      ],
    },
    {
      icon: "Crown",
      name: "Премиум",
      price: "80 000 ₽",
      sub: "разовый запуск + 30 000 ₽ ежемесячное ведение",
      subNote: "(10 000 ₽ — администрирование сайта, 20 000 ₽ — ведение контекстной рекламы)",
      desc: "Полный цикл: сайт + маркетинг + ведение",
      popular: false,
      sections: [
        {
          label: "Включено",
          items: ["Всё из тарифа «Базовый»", "Всё из тарифа «Стандарт»"],
        },
        {
          label: "Дополнительно",
          items: [
            "Постоянное ведение Яндекс Директ",
            "Ежемесячная оптимизация рекламных кампаний",
            "Постоянное администрирование проекта",
            "Техническая поддержка на регулярной основе",
            "Аналитика эффективности и ежемесячные рекомендации",
            "Подключение домена и настройка хостинга",
            "Мониторинг работы сервера и устранение технических сбоев",
            "Еженедельные отчёты",
          ],
        },
      ],
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-[var(--brand-gray)]">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-[var(--brand-blue)] font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Стоимость</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--brand-dark)]">Тарифы</h2>
          <p className="font-golos text-[var(--brand-muted)] mt-3">Оплата по этапам. Работаем по договору.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => <PricingCard key={plan.name} plan={plan} />)}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ────────────────────────────────────────────────────────────────── */
function FAQ() {
  const faqs = [
    { q: "Сколько стоит разработка лендинга?",     a: "Стоимость зависит от сложности проекта и выбранного тарифа. Базовые пакеты начинаются от 40 000 рублей. Стоимость всегда фиксируется в договоре." },
    { q: "Сколько длится разработка?",              a: "Стандартный срок — 7 рабочих дней с момента получения всех необходимых материалов. Для премиум-проектов — до 14 дней." },
    { q: "Можно ли внести правки?",                 a: "Да. Мы обсуждаем промежуточные варианты и вносим правки на каждом этапе. После сдачи предусмотрено 2 раунда правок без доплаты." },
    { q: "Работаете ли вы по договору?",            a: "Да, только по официальному договору. В нём фиксируются сроки, стоимость, состав работ и условия оплаты." },
    { q: "Что нужно для начала работы?",            a: "Бриф, логотип и фирменные цвета (если есть), описание услуги и целевой аудитории. Если материалов нет — поможем сформировать." },
    { q: "Можно ли подключить CRM?",                a: "Да, подключаем AmoCRM, Битрикс24 и другие системы. Входит в тариф Премиум или добавляется отдельно." },
  ];
  return (
    <section id="faq" className="section-padding bg-white">
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
                    <span className="w-6 h-6 rounded-full bg-blue-50 text-[var(--brand-blue)] font-montserrat font-bold text-xs flex items-center justify-center shrink-0">
                      ?
                    </span>
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

/* ─── Contact Form ───────────────────────────────────────────────────────── */
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", niche: "", budget: "" });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const inputCls = "w-full bg-white border border-[var(--brand-border)] rounded-lg pl-10 pr-4 font-golos text-sm text-[var(--brand-dark)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition";

  return (
    <section id="contact-form" className="section-padding bg-[var(--brand-gray)]">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* form */}
          <div className="flex-1 w-full max-w-xl">
            <div className="mb-8">
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
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-[var(--brand-border)] rounded-2xl p-8 flex flex-col gap-5 shadow-sm"
              >
                {/* Имя */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-montserrat font-semibold text-xs text-[var(--brand-muted)] uppercase tracking-wide">Имя</label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Icon name="User" size={16} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Ваше имя"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputCls}
                      style={{ height: 48 }}
                    />
                  </div>
                </div>

                {/* Телефон */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-montserrat font-semibold text-xs text-[var(--brand-muted)] uppercase tracking-wide">Телефон</label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Icon name="Phone" size={16} className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (999) 000-00-00"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputCls}
                      style={{ height: 48 }}
                    />
                  </div>
                </div>

                {/* Ниша бизнеса */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-montserrat font-semibold text-xs text-[var(--brand-muted)] uppercase tracking-wide">Ниша бизнеса</label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Icon name="Briefcase" size={16} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Например: стоматология, онлайн-курсы..."
                      value={form.niche}
                      onChange={(e) => setForm({ ...form, niche: e.target.value })}
                      className={inputCls}
                      style={{ height: 48 }}
                    />
                  </div>
                </div>

                {/* Бюджет проекта */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-montserrat font-semibold text-xs text-[var(--brand-muted)] uppercase tracking-wide">Бюджет проекта</label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Icon name="Wallet" size={16} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Например: 50 000 – 70 000 ₽"
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className={inputCls}
                      style={{ height: 48 }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  style={{ height: 52 }}
                  className="w-full bg-[var(--brand-blue)] text-white font-montserrat font-bold text-base rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  Получить консультацию
                </button>
                <p className="text-center font-golos text-xs text-[var(--brand-muted)]">
                  Нажимая кнопку, вы соглашаетесь с{" "}
                  <a href="#" className="underline hover:text-[var(--brand-blue)]">политикой конфиденциальности</a>
                </p>
              </form>
            )}
          </div>

          {/* laptop */}
          <div className="hidden lg:block flex-shrink-0 w-[460px]">
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

/* ─── Contacts ───────────────────────────────────────────────────────────── */
function Contacts() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-10">
          <p className="text-[var(--brand-blue)] font-montserrat font-semibold text-sm uppercase tracking-widest mb-3">Связаться</p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[var(--brand-dark)]">Контакты</h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-6">
          <a
            href="https://t.me/username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#229ED9] text-white font-montserrat font-semibold px-6 py-4 rounded-xl shadow hover:opacity-90 hover:scale-[1.03] active:scale-95 transition-all duration-200"
          >
            <Icon name="Send" size={20} />Telegram
          </a>
          <a
            href="mailto:hello@landpro.ru"
            className="flex-1 flex items-center justify-center gap-2 bg-[var(--brand-dark)] text-white font-montserrat font-semibold px-6 py-4 rounded-xl shadow hover:opacity-90 hover:scale-[1.03] active:scale-95 transition-all duration-200"
          >
            <Icon name="Mail" size={20} />Email
          </a>
        </div>
        <div className="text-center mb-4">
          <a
            href="tel:+79000000000"
            className="inline-flex items-center gap-2 font-montserrat font-semibold text-[var(--brand-dark)] hover:text-[var(--brand-blue)] transition-colors text-xl"
          >
            <Icon name="Phone" size={22} className="text-[var(--brand-blue)]" />
            +7 (900) 000-00-00
          </a>
        </div>
        <p className="text-center font-golos text-sm text-[var(--brand-muted)] flex items-center justify-center gap-1.5">
          <Icon name="Clock" size={14} className="text-[var(--brand-blue)]" />
          Отвечаем в течение 15 минут
        </p>
      </div>
    </section>
  );
}

/* ─── Final CTA ──────────────────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="relative py-24 bg-[var(--brand-blue)] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none">
        <img src={LAPTOP_IMG} alt="" className="w-full h-full object-cover opacity-10 blur-sm scale-105" />
      </div>
      <div className="relative container-main text-center">
        <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl text-white max-w-2xl mx-auto leading-[1.15] mb-3">
          Получите структуру лендинга для вашего проекта
        </h2>
        <p className="font-golos text-blue-100 text-lg mb-10 max-w-lg mx-auto">
          и консультацию по запуску рекламы
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center gap-2 bg-white text-[var(--brand-blue)] font-montserrat font-bold text-base px-8 py-4 rounded-xl shadow-xl hover:bg-blue-50 hover:scale-[1.03] active:scale-95 transition-all duration-200"
          >
            Оставить заявку
            <Icon name="ArrowRight" size={18} />
          </button>
          <a
            href="https://t.me/username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-montserrat font-semibold text-base px-8 py-4 rounded-xl hover:bg-white/10 hover:scale-[1.03] active:scale-95 transition-all duration-200"
          >
            <Icon name="Send" size={18} />
            Написать в Telegram
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-[var(--brand-dark)] pt-10 pb-6 border-t border-white/10">
      <div className="container-main">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          {/* brand */}
          <div>
            <span className="font-montserrat font-extrabold text-white text-xl block mb-2">LandPro</span>
            <p className="font-golos text-sm text-gray-400 max-w-xs">
              Разрабатываем лендинги под ключ, которые приводят заявки из рекламы.
            </p>
          </div>
          {/* links */}
          <div className="flex flex-col gap-2">
            <p className="font-montserrat font-semibold text-xs text-gray-500 uppercase tracking-widest mb-1">Документы</p>
            <a href="#" className="font-golos text-sm text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="font-golos text-sm text-gray-400 hover:text-white transition-colors">Пользовательское соглашение</a>
            <a href="#" className="font-golos text-sm text-gray-400 hover:text-white transition-colors">Согласие на обработку персональных данных</a>
          </div>
          {/* contacts */}
          <div className="flex flex-col gap-2">
            <p className="font-montserrat font-semibold text-xs text-gray-500 uppercase tracking-widest mb-1">Контакты</p>
            <a href="mailto:hello@landpro.ru" className="font-golos text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
              <Icon name="Mail" size={14} className="text-[var(--brand-blue)]" />
              hello@landpro.ru
            </a>
            <a href="tel:+79000000000" className="font-golos text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
              <Icon name="Phone" size={14} className="text-[var(--brand-blue)]" />
              +7 (900) 000-00-00
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-5">
          <p className="font-golos text-xs text-gray-600 text-center">© 2026 LandPro. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <StickyButton />
      <Navbar />
      <Hero />
      <ForWhom />
      <Services />
      <WhyLanding />
      <Portfolio />
      <LandingStructure />
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