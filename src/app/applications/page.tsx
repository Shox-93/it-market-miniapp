import Link from "next/link";
import { getApplications } from "@/lib/api";

type Application = {
  id: number;
  orderId: number;
  title?: string;
  company?: string;
  status?: string;
};

export default async function ApplicationsPage() {
  const applications: Application[] = await getApplications();

  return (
    <main className="min-h-screen bg-[#f3f3f3] px-4 py-10">
      <div className="mx-auto max-w-275">
        <h1 className="mb-6 text-3xl font-bold text-[#202020]">
          Мои отклики
        </h1>

        {applications.length === 0 ? (
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-gray-500">Откликов пока нет.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {applications.map((application) => (
              <div
                key={application.id}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm text-gray-500">
                      Компания: {application.company || "-"}
                    </p>
                    <h2 className="mt-1 text-xl font-semibold text-[#202020]">
                      {application.title || "Без названия"}
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                      Статус: {application.status || "applied"}
                    </p>
                  </div>

                  <Link
                    href={`/orders/${application.orderId}`}
                    className="inline-block rounded-xl bg-green-600 px-5 py-3 text-white"
                  >
                    Открыть заказ
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}