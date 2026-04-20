import { getCompany } from "../../../lib/api";

export default async function CompanyPage({
  params,
}: {
  params: { id: string };
}) {
  const company = await getCompany(params.id);

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-2xl font-bold">{company.name}</h1>
      <p>ID: {company.id}</p>
    </main>
  );
}