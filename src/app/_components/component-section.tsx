import { companies } from "@/mock/component"
import { CompanyCard } from "./company-card"
import { AllCompaniesBanner } from "./specialists/all-companies-banner"

export const ComponentSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#63d300] pt-10 pb-20">
      <div className="mx-auto max-w-300 px-6">
        <div className="mb-8 flex flex-col items-center">
          <h2 className="text-center text-[28px] font-extrabold text-white">
            IT-компании
          </h2>

          <button
            type="button"
            className="mt-3 rounded-full bg-[#f2b400] px-5 py-2 text-[12px] font-bold uppercase text-white"
          >
            Разместить компанию
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <AllCompaniesBanner />
        </div>
      </div>
    </section>
  )
}