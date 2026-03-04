import Icon from "@/components/ui/icon";

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
    { icon: "Filter",            title: "Маркетинговая структура страницы",    desc: "Строим страницу по проверенным фреймворкам, которые конвертируют посетителей." },
    { icon: "MousePointerClick", title: "UX-дизайн для удобства пользователя", desc: "Интерфейс интуитивно понятен и подталкивает к целевому действию." },
    { icon: "Zap",               title: "Быстрая загрузка сайта",              desc: "Оптимизация кода и изображений — напрямую влияет на конверсию и рекламу." },
    { icon: "TrendingUp",        title: "Подготовка сайта под рекламу",        desc: "Настройка целей, пикселей и форм для эффективной работы с Яндекс.Директ." },
    { icon: "LineChart",         title: "Аналитика и тестирование",            desc: "Яндекс.Метрика, настройка целей и A/B тестирование ключевых элементов." },
    { icon: "RefreshCw",         title: "Тестирование и улучшение",            desc: "Анализ поведения пользователей и улучшение ключевых элементов страницы." },
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
    { icon: "MessageCircle", title: "Обсуждение проекта и брифинг",  desc: "Выясняем вашу нишу, цели и пожелания к лендингу." },
    { icon: "Search",        title: "Анализ ниши и конкурентов",     desc: "Изучаем рынок, офферы конкурентов и целевую аудиторию." },
    { icon: "Layout",        title: "Создание прототипа и текстов",  desc: "Разрабатываем структуру страницы и продающие тексты." },
    { icon: "Palette",       title: "Дизайн и разработка лендинга",  desc: "Создаём визуальный дизайн и верстаем адаптивную страницу." },
    { icon: "Rocket",        title: "Запуск сайта",                  desc: "Размещаем сайт, подключаем аналитику и формы заявок." },
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

/* ─── Export ─────────────────────────────────────────────────────────────── */
export default function ExpertSection() {
  return (
    <>
      <Problems />
      <Advantages />
      <Process />
    </>
  );
}
