import { CompaniesCategories } from "../_components/companies-categories";
import { CompaniesHeader } from "../_components/companies-header";
import { Footer } from "../_components/footer";

export default function CompaniesPage() {
  return (
    <>
      <main className="min-h-screen bg-[#f3f3f3]">
        <CompaniesHeader />
        <CompaniesCategories />
      </main>

      <Footer />
    </>
  );
}