import { CompaniesCategories } from "../_components/companies-categories";
import { CompaniesHeader } from "../_components/companies-header";
import { Footer } from "../_components/footer";
import { getCompanies } from "@/lib/api";

export default async function CompaniesPage() {
  const companies = await getCompanies();

  return (
    <>
      <main className="min-h-screen bg-[#f3f3f3]">
        <CompaniesHeader />
        <CompaniesCategories companies={companies} />
      </main>

      <Footer />
    </>
  );
}