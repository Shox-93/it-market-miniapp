import { vacancies } from "@/mock/vacancies"
import { VacancyCard } from "./vacancy-card"
import { AllVacanciesBanner } from "./all-vacancies-banner"

export const VacanciesSection = () => {
  return (
    <section className="bg-[#efefef] py-20">
      <div className="mx-auto max-w-300 px-6">

        {/* HEADER */}
        <div className="mb-10 flex flex-col items-center">
          <h2 className="text-center text-[28px] font-extrabold text-[#111827]">
            IT-вакансии
          </h2>

          <button
            type="button"
            className="mt-3 rounded-full bg-[#f2b400] px-5 py-2 text-[12px] font-bold uppercase text-white"
          >
            Разместить вакансию
          </button>
        </div>

        {/* VACANCIES */}
        <div className="space-y-4">
          {vacancies.map((vacancy) => (
            <VacancyCard
              key={vacancy.id}
              vacancy={vacancy}
            />
          ))}
        </div>

        {/* ALL VACANCIES BUTTON */}
        <div className="mt-10 flex justify-center">
          <AllVacanciesBanner />
        </div>

      </div>
    </section>
  )
}