import { useState } from "react";
import Icon from "@/components/ui/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { scrollToForm } from "./HeroSection";

const LAPTOP_IMG =
  "https://cdn.poehali.dev/projects/7b734c4e-f3f6-48d8-8bec-e3d412064f76/files/2e44619c-bd55-496d-9f50-2d6db119c871.jpg";

/* ─── Pricing Types ──────────────────────────────────────────────────────── */
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

/* ─── PricingCard ────────────────────────────────────────────────────────── */
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

/* ─── Pricing ────────────────────────────────────────────────────────────── */
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
    { q: "Сколько стоит разработка лендинга?",  a: "Стоимость зависит от сложности проекта и выбранного тарифа. Базовые пакеты начинаются от 40 000 рублей. Стоимость всегда фиксируется в договоре." },
    { q: "Сколько длится разработка?",           a: "Стандартный срок — 7 рабочих дней с момента получения всех необходимых материалов. Для премиум-проектов — до 14 дней." },
    { q: "Можно ли внести правки?",              a: "Да. Мы обсуждаем промежуточные варианты и вносим правки на каждом этапе. После сдачи предусмотрено 2 раунда правок без доплаты." },
    { q: "Работаете ли вы по договору?",         a: "Да, только по официальному договору. В нём фиксируются сроки, стоимость, состав работ и условия оплаты." },
    { q: "Что нужно для начала работы?",         a: "Бриф, логотип и фирменные цвета (если есть), описание услуги и целевой аудитории. Если материалов нет — поможем сформировать." },
    { q: "Можно ли подключить CRM?",             a: "Да, подключаем AmoCRM, Битрикс24 и другие системы. Входит в тариф Премиум или добавляется отдельно." },
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

/* ─── Export ─────────────────────────────────────────────────────────────── */
export default function ConversionSection() {
  return (
    <>
      <Pricing />
      <FAQ />
      <ContactForm />
      <Contacts />
      <FinalCTA />
      <Footer />
    </>
  );
}
