import { SpecialistsHeader } from "../_components/specialists/specialists-header";
import { SpecialistsCatalog } from "../_components/specialists/specialists-catalog";
import { Footer } from "../_components/footer";
import { getSpecialists } from "@/lib/api";

export default async function SpecialistsPage() {
  const specialists = await getSpecialists();

  return (
    <main className="min-h-screen bg-[#f3f3f3]">
      <SpecialistsHeader />
      <SpecialistsCatalog specialists={specialists} />
      <Footer />
    </main>
  );
}