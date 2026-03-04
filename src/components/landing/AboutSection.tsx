import { useState } from "react";
import Icon from "@/components/ui/icon";
import { scrollToForm } from "./HeroSection";

const PORTFOLIO_IMAGES = [
  "https://cdn.poehali.dev/projects/7b734c4e-f3f6-48d8-8bec-e3d412064f76/files/f04aa4c0-351d-4fb2-ae76-d9c696956573.jpg",
  "https://cdn.poehali.dev/projects/7b734c4e-f3f6-48d8-8bec-e3d412064f76/files/db90e62c-a2b5-41e1-8f4e-5148b9bc56f2.jpg",
  "https://cdn.poehali.dev/projects/7b734c4e-f3f6-48d8-8bec-e3d412064f76/files/ff98f690-0e75-42fa-b905-b9e1e113203f.jpg",
];

/* ─── For Whom ───────────────────────────────────────────────────────────── */
function ForWhom() {
  const segments = [
    { icon: "Store",         title: "Малый бизнес", desc: "Лендинги для услуг, которые приводят заявки из рекламы.",      color: "bg-blue-50",   iconColor: "text-[var(--brand-blue)]" },
    { icon: "GraduationCap", title: "Инфобизнес",   desc: "Страницы для вебинаров, запусков и онлайн-курсов.",            color: "bg-indigo-50", iconColor: "text-indigo-600" },
    { icon: "TrendingUp",    title: "B2B",           desc: "Лендинги для сложных услуг и корпоративных клиентов.",         color: "bg-slate-50",  iconColor: "text-slate-700" },
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
    { icon: "Search",        title: "Анализ ниши и конкурентов",         sub: "чтобы создать сильный оффер" },
    { icon: "Layout",        title: "Маркетинговая структура страницы",   sub: "которая ведёт пользователя к заявке" },
    { icon: "FileText",      title: "Продающие тексты",                   sub: "которые снимают возражения клиента" },
    { icon: "Palette",       title: "Дизайн интерфейса",                  sub: "адаптированный под конверсию" },
    { icon: "Code2",         title: "Разработка и мобильная адаптация",   sub: "для корректной работы на всех устройствах" },
    { icon: "ClipboardList", title: "Подключение форм заявок",            sub: "для получения лидов" },
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

/* ─── Why Landing ─────────────────────────────────────────────────────────── */
function WhyLanding() {
  const cards = [
    { icon: "Rocket",           title: "Быстрый запуск рекламы",             desc: "Лендинг готов к запуску Директа сразу после разработки." },
    { icon: "MousePointerClick", title: "Фокус на конверсии",                desc: "Каждый блок страницы ведёт пользователя к заявке." },
    { icon: "Layout",           title: "Готовая маркетинговая структура",     desc: "Страница строится по проверенным моделям продаж." },
    { icon: "Smartphone",       title: "Адаптация под мобильные устройства", desc: "Корректная работа на всех экранах и браузерах." },
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
    { img: PORTFOLIO_IMAGES[0], title: "Лендинг для онлайн-школы", desc: "Цель: регистрация на вебинар" },
    { img: PORTFOLIO_IMAGES[1], title: "Лендинг для услуг",         desc: "Цель: получение заявок" },
    { img: PORTFOLIO_IMAGES[2], title: "Лендинг для B2B",           desc: "Цель: привлечение корпоративных клиентов" },
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
    { icon: "Monitor",       label: "Первый экран (оффер)",  desc: "Заголовок, подзаголовок и кнопка призыва к действию" },
    { icon: "Star",          label: "Преимущества",          desc: "Ключевые выгоды вашего продукта или услуги" },
    { icon: "ClipboardList", label: "Описание услуги",       desc: "Подробное раскрытие того, что вы предлагаете" },
    { icon: "Trophy",        label: "Кейсы",                 desc: "Примеры реализованных проектов и результаты" },
    { icon: "MessageCircle", label: "Отзывы",                desc: "Социальные доказательства от реальных клиентов" },
    { icon: "HelpCircle",    label: "FAQ",                   desc: "Ответы на частые вопросы и снятие возражений" },
    { icon: "Mail",          label: "Форма заявки",          desc: "Простая форма для захвата контактов клиента" },
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
                  {[0, 1, 2].map((i) => (
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
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="h-1.5 bg-gray-200 rounded-full" style={{ width: `${75 + i * 10}%` }} />
                    ))}
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
                      {[0, 1, 2, 3, 4].map((s) => (
                        <span key={s} className="text-yellow-400 text-[8px]">★</span>
                      ))}
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-full w-full mb-1" />
                    <div className="h-1.5 bg-gray-200 rounded-full w-4/5" />
                  </div>
                </div>
                {/* faq */}
                <div className="bg-gray-50 rounded-lg p-3 border border-[var(--brand-border)]">
                  {[0, 1].map((i) => (
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

/* ─── Export ─────────────────────────────────────────────────────────────── */
export default function AboutSection() {
  return (
    <>
      <ForWhom />
      <Services />
      <WhyLanding />
      <Portfolio />
      <LandingStructure />
    </>
  );
}
