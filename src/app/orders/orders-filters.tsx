type OrdersFiltersProps = {
  searchValue: string;
  budgetFrom: string;
  budgetTo: string;
  selectedSpecializations: string[];
  selectedCustomerType: string;
  onSearchChange: (value: string) => void;
  onBudgetFromChange: (value: string) => void;
  onBudgetToChange: (value: string) => void;
  onSpecializationChange: (value: string) => void;
  onCustomerTypeChange: (value: string) => void;
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

const customerTypes = [
  "Все",
  "Компания",
  "Государственный орган",
  "Частное лицо",
];

export const OrdersFilters = ({
  searchValue,
  budgetFrom,
  budgetTo,
  selectedSpecializations,
  selectedCustomerType,
  onSearchChange,
  onBudgetFromChange,
  onBudgetToChange,
  onSpecializationChange,
  onCustomerTypeChange,
  onApply,
}: OrdersFiltersProps) => {
  return (
    <aside className="space-y-[12px]">
      <div className="rounded-[10px] bg-white p-[10px] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
        <div className="flex overflow-hidden rounded-[6px] border border-[#d8dfe5]">
          <input
            type="text"
            placeholder="Поиск..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className="h-[34px] w-full px-[10px] text-[12px] outline-none"
          />
          <button
            type="button"
            onClick={onApply}
            className="flex h-[34px] w-[34px] items-center justify-center bg-[#31c331] text-white"
          >
            🔍
          </button>
        </div>
      </div>

      <div className="rounded-[10px] bg-white p-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
        <h3 className="mb-[10px] text-[11px] font-semibold uppercase text-[#8a97a4]">
          Бюджет
        </h3>

        <div className="grid grid-cols-2 gap-[8px]">
          <input
            type="text"
            placeholder="от"
            value={budgetFrom}
            onChange={(e) => onBudgetFromChange(e.target.value)}
            className="h-[32px] rounded-[6px] border border-[#d8dfe5] px-[10px] text-[12px] outline-none"
          />
          <input
            type="text"
            placeholder="до"
            value={budgetTo}
            onChange={(e) => onBudgetToChange(e.target.value)}
            className="h-[32px] rounded-[6px] border border-[#d8dfe5] px-[10px] text-[12px] outline-none"
          />
        </div>
      </div>

      <div className="rounded-[10px] bg-white p-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
        <h3 className="mb-[10px] text-[11px] font-semibold uppercase text-[#8a97a4]">
          Что требуется сделать
        </h3>

        <div className="space-y-[6px]">
          {specializations.map((item) => (
            <label key={item} className="flex gap-[8px] text-[12px] text-[#222]">
              <input
                type="checkbox"
                checked={selectedSpecializations.includes(item)}
                onChange={() => onSpecializationChange(item)}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-[10px] bg-white p-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
        <h3 className="mb-[10px] text-[11px] font-semibold uppercase text-[#8a97a4]">
          Тип заказчика
        </h3>

        <div className="space-y-[6px]">
          {customerTypes.map((item) => (
            <label key={item} className="flex gap-[8px] text-[12px] text-[#222]">
              <input
                type="radio"
                name="customerType"
                checked={selectedCustomerType === item}
                onChange={() => onCustomerTypeChange(item)}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={onApply}
        className="rounded-full bg-[#31c331] px-[16px] py-[6px] text-[12px] text-white"
      >
        Фильтр
      </button>
    </aside>
  );
};