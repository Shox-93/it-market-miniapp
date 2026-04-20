import { SpecialistsHeader } from "../_components/specialists/specialists-header";
import { SpecialistsCatalog } from "../_components/specialists/specialists-catalog";
import { Footer } from "../_components/footer";

export default function SpecialistsPage() {
  return (
    <main className="min-h-screen bg-[#f3f3f3]">
      <SpecialistsHeader />
      <SpecialistsCatalog />
      <Footer />
    </main>
  );
}