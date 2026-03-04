import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const LAPTOP_IMG =
  "https://cdn.poehali.dev/projects/7b734c4e-f3f6-48d8-8bec-e3d412064f76/files/2e44619c-bd55-496d-9f50-2d6db119c871.jpg";

export const scrollToForm = () =>
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

/* ─── Export ─────────────────────────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <>
      <StickyButton />
      <Navbar />
      <Hero />
    </>
  );
}
