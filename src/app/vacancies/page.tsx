import { VacanciesHeader } from "./vacancies-header";
import { VacanciesCatalog } from "./vacancies-catalog";
import { Footer } from "../_components/footer";
import { getVacancies } from "../../lib/api";

export default async function VacanciesPage() {
  const vacancies = await getVacancies();

  return (
    <>
      <main className="min-h-screen bg-[#f3f3f3]">
        <VacanciesHeader />
        <VacanciesCatalog vacancies={vacancies} />
      </main>
      <Footer />
    </>
  );
}