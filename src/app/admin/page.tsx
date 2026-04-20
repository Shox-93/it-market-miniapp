"use client";

import { useEffect, useState } from "react";
import {
  getCompanies,
  getOrders,
  getSpecialists,
  getVacancies,
} from "../../lib/api";

type Stats = {
  companies: number;
  orders: number;
  vacancies: number;
  specialists: number;
};

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats>({
    companies: 0,
    orders: 0,
    vacancies: 0,
    specialists: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const [companies, orders, vacancies, specialists] = await Promise.all([
          getCompanies(),
          getOrders(),
          getVacancies(),
          getSpecialists(),
        ]);

        setStats({
          companies: companies.length,
          orders: orders.length,
          vacancies: vacancies.length,
          specialists: specialists.length,
        });
      } catch (error) {
        console.error("Ошибка загрузки dashboard:", error);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-[#202020]">Dashboard</h2>
        <p className="mt-2 text-sm text-gray-500">
          Добро пожаловать в административную панель IT Market
        </p>
      </div>

      {loading ? (
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-gray-500">Загрузка статистики...</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">Компании</p>
              <h3 className="mt-2 text-3xl font-bold text-[#202020]">
                {stats.companies}
              </h3>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">Заказы</p>
              <h3 className="mt-2 text-3xl font-bold text-[#202020]">
                {stats.orders}
              </h3>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">Вакансии</p>
              <h3 className="mt-2 text-3xl font-bold text-[#202020]">
                {stats.vacancies}
              </h3>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">Специалисты</p>
              <h3 className="mt-2 text-3xl font-bold text-[#202020]">
                {stats.specialists}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-[#202020]">
                Быстрые действия
              </h3>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href="/admin/companies"
                  className="rounded-xl border p-4 transition hover:bg-[#f8f8f8]"
                >
                  Управление компаниями
                </a>

                <a
                  href="/admin/orders"
                  className="rounded-xl border p-4 transition hover:bg-[#f8f8f8]"
                >
                  Управление заказами
                </a>

                <a
                  href="/admin/vacancies"
                  className="rounded-xl border p-4 transition hover:bg-[#f8f8f8]"
                >
                  Управление вакансиями
                </a>

                <a
                  href="/admin/specialists"
                  className="rounded-xl border p-4 transition hover:bg-[#f8f8f8]"
                >
                  Управление специалистами
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-[#202020]">
                Сводка
              </h3>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="rounded-xl border p-4">
                  Всего компаний: {stats.companies}
                </div>
                <div className="rounded-xl border p-4">
                  Всего заказов: {stats.orders}
                </div>
                <div className="rounded-xl border p-4">
                  Всего вакансий: {stats.vacancies}
                </div>
                <div className="rounded-xl border p-4">
                  Всего специалистов: {stats.specialists}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}