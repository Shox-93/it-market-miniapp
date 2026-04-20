import type { Vacancy } from "@/types/vacancy.type"

type VacancyCardProps = {
  vacancy: Vacancy
}

export const VacancyCard = ({ vacancy }: VacancyCardProps) => {
  return (
    <article className="rounded-[22px] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[13px] uppercase text-[#b7b7b7]">
            {vacancy.company}
          </p>

          <h3 className="mt-4 text-[18px] font-bold text-[#111827]">
            {vacancy.title}
          </h3>
        </div>

        <p className="shrink-0 text-[13px] text-[#b7b7b7]">
          Обновлено: {vacancy.updatedAt}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {vacancy.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#e5e5e5] px-3 py-1 text-[11px] font-semibold text-white"
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        className={`mt-8 grid gap-8 ${
          vacancy.salary ? "grid-cols-3" : "grid-cols-2"
        }`}
      >
        <div>
          <p className="text-[13px] text-[#b7b7b7]">Тип работы</p>
          <p className="mt-1 text-[16px] text-[#111827]">{vacancy.workType}</p>
        </div>

        {vacancy.salary && (
          <div>
            <p className="text-[13px] text-[#b7b7b7]">Зарплата</p>
            <p className="mt-1 text-[16px] text-[#111827]">{vacancy.salary}</p>
          </div>
        )}

        <div>
          <p className="text-[13px] text-[#b7b7b7]">Опыт работы</p>
          <p className="mt-1 text-[16px] text-[#111827]">{vacancy.experience}</p>
        </div>
      </div>
    </article>
  )
}