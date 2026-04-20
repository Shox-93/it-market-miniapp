type VacanciesFiltersProps = {
  searchValue: string;
  skillsValue: string;
  selectedEmployment: string[];
  selectedExperience: string;
  selectedSpecializations: string[];
  onSearchChange: (value: string) => void;
  onSkillsChange: (value: string) => void;
  onEmploymentChange: (value: string) => void;
  onExperienceChange: (value: string) => void;
  onSpecializationChange: (value: string) => void;
  onApply: () => void;
};

const employmentOptions = [
  "Полная занятость",
  "Частичная занятость",
  "Поденная обсуждаемо",
];

const experienceOptions = [
  "Все",
  "Без опыта",
  "От 1 до 3 лет",
  "От 3 до 5 лет",
  "Больше 5 лет",
];

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

export const VacanciesFilters = ({
  searchValue,
  skillsValue,
  selectedEmployment,
  selectedExperience,
  selectedSpecializations,
  onSearchChange,
  onSkillsChange,
  onEmploymentChange,
  onExperienceChange,
  onSpecializationChange,
  onApply,
}: VacanciesFiltersProps) => {
  return (
    <aside className="space-y-3">
      <div className="rounded-[10px] bg-white p-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
        <div className="flex overflow-hidden rounded-md border border-[#d8dfe5]">
          <input
            type="text"
            placeholder="Поиск..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className="h-8.5 w-full px-2.5 text-[12px] outline-none"
          />
          <button
            type="button"
            onClick={onApply}
            className="flex h-8.5 w-8.5 items-center justify-center bg-[#31c331] text-white"
          >
            🔍
          </button>
        </div>
      </div>

      <div className="rounded-[10px] bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
        <h3 className="mb-2.5 text-[11px] font-semibold uppercase text-[#8a97a4]">
          Вид занятости
        </h3>

        <div className="space-y-1.75">
          {employmentOptions.map((item) => (
            <label key={item} className="flex items-start gap-2 text-[12px] text-[#222]">
              <input
                type="checkbox"
                className="mt-0.5"
                checked={selectedEmployment.includes(item)}
                onChange={() => onEmploymentChange(item)}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-[10px] bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
        <h3 className="mb-2.5 text-[11px] font-semibold uppercase text-[#8a97a4]">
          Опыт работы
        </h3>

        <div className="space-y-1.75">
          {experienceOptions.map((item) => (
            <label key={item} className="flex items-start gap-2 text-[12px] text-[#222]">
              <input
                type="radio"
                name="experience"
                className="mt-0.5"
                checked={selectedExperience === item}
                onChange={() => onExperienceChange(item)}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-[10px] bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
        <h3 className="mb-2.5 text-[11px] font-semibold uppercase text-[#8a97a4]">
          Специализации
        </h3>

        <div className="space-y-1.75">
          {specializations.map((item) => (
            <label key={item} className="flex items-start gap-2 text-[12px] text-[#222]">
              <input
                type="checkbox"
                className="mt-0.5"
                checked={selectedSpecializations.includes(item)}
                onChange={() => onSpecializationChange(item)}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-[10px] bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
        <h3 className="mb-2.5 text-[11px] font-semibold uppercase text-[#8a97a4]">
          Требуемые навыки
        </h3>

        <input
          type="text"
          value={skillsValue}
          onChange={(e) => onSkillsChange(e.target.value)}
          className="h-8.5 w-full rounded-md border border-[#d8dfe5] px-2.5 text-[12px] outline-none"
        />
      </div>

      <button
        type="button"
        onClick={onApply}
        className="inline-flex h-8 items-center justify-center rounded-full bg-[#31c331] px-3.5 text-[12px] font-semibold text-white"
      >
        Фильтр
      </button>
    </aside>
  );
};