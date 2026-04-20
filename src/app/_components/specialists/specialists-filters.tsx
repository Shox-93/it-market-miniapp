type SpecialistsFiltersProps = {
  selectedRegions: string[];
  onRegionChange: (region: string) => void;
  onApply: () => void;
};

const specializations = [
  "Разработка сайтов",
  "Разработка приложений",
  "Комплексные решения",
  "Тестирование",
  "Digital-маркетинг",
  "Поисковая оптимизация",
  "Разработка игр",
  "Мобильные приложения",
  "Инфраструктура",
  "Консалтинг и документация",
  "Прочее",
  "Инструменты для бизнеса",
  "IT-образование",
];

const regions = [
  "Кашкадарьинская область",
  "Республика Каракалпакстан",
  "Самаркандская область",
  "Сырдарьинская область",
  "Сурхандарьинская область",
  "Ташкентская область",
  "Ташкент",
  "Андижанская область",
  "Бухарская область",
  "Ферганская область",
  "Джизакская область",
  "Хорезмская область",
  "Наманганская область",
  "Навоийская область",
];

export const SpecialistsFilters = ({
  selectedRegions,
  onRegionChange,
  onApply,
}: SpecialistsFiltersProps) => {
  return (
    <aside className="space-y-[12px]">
      <div className="rounded-[10px] bg-white p-[10px] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
        <div className="flex overflow-hidden rounded-[6px] border border-[#d8dfe5]">
          <input
            type="text"
            placeholder="Поиск..."
            className="h-[34px] w-full px-[10px] text-[12px] outline-none"
          />
          <button
            type="button"
            className="flex h-[34px] w-[34px] items-center justify-center bg-[#31c331] text-white"
          >
            🔍
          </button>
        </div>
      </div>

      <div className="rounded-[10px] bg-white p-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
        <h3 className="mb-[10px] text-[11px] font-semibold uppercase text-[#8a97a4]">
          Специализации
        </h3>

        <div className="space-y-[7px]">
          {specializations.map((item) => (
            <label
              key={item}
              className="flex items-start gap-[8px] text-[12px] text-[#222]"
            >
              <input type="checkbox" className="mt-[2px]" />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-[10px] bg-white p-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
        <h3 className="mb-[10px] text-[11px] font-semibold uppercase text-[#8a97a4]">
          Область
        </h3>

        <div className="space-y-[7px]">
          {regions.map((item) => (
            <label
              key={item}
              className="flex items-start gap-[8px] text-[12px] text-[#222]"
            >
              <input
                type="checkbox"
                className="mt-[2px]"
                checked={selectedRegions.includes(item)}
                onChange={() => onRegionChange(item)}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-[10px] bg-white p-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
        <h3 className="mb-[10px] text-[11px] font-semibold uppercase text-[#8a97a4]">
          Требуемые навыки
        </h3>

        <input
          type="text"
          className="h-[34px] w-full rounded-[6px] border border-[#d8dfe5] px-[10px] text-[12px] outline-none"
        />
      </div>

      <button
        type="button"
        onClick={onApply}
        className="inline-flex h-[32px] items-center justify-center rounded-full bg-[#31c331] px-[14px] text-[12px] font-semibold text-white"
      >
        Фильтр
      </button>
    </aside>
  );
};