import Link from "next/link";
import { getVacancy } from "../../../lib/api";

type Vacancy = {
  id: number;
  title: string;
  company?: string;
  salary?: string;
  experience?: string;
  workType?: string;
  publishedAt?: string;
  tags?: string[];
  skills?: string[];
  description?: string;
  error?: string;
};

export default async function VacancyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const vacancy: Vacancy = await getVacancy(id);

  if (vacancy.error) {
    return (
      <main className="min-h-screen bg-[#f3f3f3] px-4 py-10">
        <div className="mx-auto max-w-250 rounded-2xl bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-[#202020]">
            Вакансия не найдена
          </h1>

          <Link
            href="/vacancies"
            className="mt-4 inline-block text-green-600 hover:underline"
          >
            Назад к вакансиям
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f3f3f3] px-4 py-10">
      <div className="mx-auto max-w-250 space-y-6">
        <Link
          href="/vacancies"
          className="inline-block text-sm text-green-600 hover:underline"
        >
          ← Назад к вакансиям
        </Link>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase text-[#8c94a0]">
            {vacancy.company || "IT Market"}
          </p>

          <h1 className="mt-2 text-[32px] font-bold text-[#202020]">
            {vacancy.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-2">
            {(vacancy.tags && vacancy.tags.length > 0 ? vacancy.tags : ["IT"]).map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#efefef] px-3 py-1 text-sm text-[#666]"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border p-4">
              <p className="text-sm text-gray-500">Зарплата</p>
              <p className="mt-2 font-semibold text-[#202020]">
                {vacancy.salary || "Договорная"}
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <p className="text-sm text-gray-500">Опыт</p>
              <p className="mt-2 font-semibold text-[#202020]">
                {vacancy.experience || "Не указано"}
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <p className="text-sm text-gray-500">Формат</p>
              <p className="mt-2 font-semibold text-[#202020]">
                {vacancy.workType || "Не указано"}
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <p className="text-sm text-gray-500">Обновлено</p>
              <p className="mt-2 font-semibold text-[#202020]">
                {vacancy.publishedAt || "Сегодня"}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-xl bg-[#16a34a] px-5 py-3 text-white">
              Откликнуться
            </button>

            <button className="rounded-xl border border-[#d1d5db] px-5 py-3 text-[#202020]">
              Сохранить
            </button>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#202020]">
            Описание вакансии
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-[#4f4f4f]">
            {vacancy.description ||
              "Подробное описание вакансии пока не заполнено. Здесь будет информация об обязанностях, требованиях, условиях работы и дополнительных преимуществах для кандидата."}
          </p>
        </section>
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#202020]">Навыки</h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {(vacancy.skills && vacancy.skills.length > 0
              ? vacancy.skills
              : ["Коммуникация", "Работа в команде"]).map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-[#f3f4f6] px-3 py-1 text-sm text-[#202020]"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}