import { specialists } from "@/mock/specialists"
import { SpecialistCard } from "./specialist-card"
import { AllSpecialistsBanner } from "./all-specialists-banner"

export const SpecialistsSection = () => {
  return (
    <section className="bg-[#efefef] py-20">
      <div className="mx-auto max-w-300 px-6">
        <div className="mb-10 flex flex-col items-center">
          <h2 className="text-center text-[28px] font-extrabold text-black">
            IT-специалисты
          </h2>

          <button
            type="button"
            className="mt-3 rounded-full bg-[#f2b400] px-5 py-2 text-[12px] font-bold uppercase text-white"
          >
            Разместить резюме
          </button>
        </div>

        <div className="space-y-5">
          {specialists.map((specialist) => (
            <SpecialistCard
              key={specialist.id}
              specialist={specialist}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <AllSpecialistsBanner />
        </div>
      </div>
    </section>
  )
}