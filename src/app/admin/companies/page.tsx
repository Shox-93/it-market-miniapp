"use client";

import { useEffect, useState } from "react";
import { CompanyForm } from "../../_components/company-form";
import {
  deleteCompany,
  getCompanies,
  updateCompany,
} from "../../../lib/api";

type Company = {
  id: number;
  name: string;
};

export default function AdminCompaniesPage() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingName, setEditingName] = useState("");

  const loadCompanies = async () => {
    try {
      const data = await getCompanies();
      setCompanies(data);
    } catch (error) {
      console.error("Ошибка загрузки компаний:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCompanies();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteCompany(id);
      setCompanies((prev) => prev.filter((company) => company.id !== id));
    } catch (error) {
      alert("Ошибка при удалении компании");
    }
  };

  const handleEditStart = (company: Company) => {
    setEditingId(company.id);
    setEditingName(company.name);
  };

  const handleEditSave = async (id: number) => {
    try {
      const updated = await updateCompany(id, editingName.trim());

      setCompanies((prev) =>
        prev.map((company) => (company.id === id ? updated : company))
      );

      setEditingId(null);
      setEditingName("");
    } catch (error) {
      alert("Ошибка при обновлении компании");
    }
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditingName("");
  };

  return (
    <main className="min-h-screen bg-[#f3f3f3] p-6">
      <div className="mx-auto max-w-300">
        <h1 className="mb-6 text-3xl font-bold text-[#202020]">
          Админка: компании
        </h1>

        <CompanyForm onCreated={loadCompanies} />

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Список компаний</h2>

          {loading ? (
            <p>Загрузка...</p>
          ) : companies.length === 0 ? (
            <p>Компаний пока нет</p>
          ) : (
            <div className="space-y-3">
              {companies.map((company) => (
                <div
                  key={company.id}
                  className="flex items-center justify-between rounded-xl border p-4"
                >
                  <div className="flex-1">
                    {editingId === company.id ? (
                      <input
                        type="text"
                        value={editingName}
                        onChange={(e) => setEditingName(e.target.value)}
                        className="w-full rounded-lg border px-3 py-2"
                      />
                    ) : (
                      <>
                        <p className="font-semibold">{company.name}</p>
                        <p className="text-sm text-gray-500">ID: {company.id}</p>
                      </>
                    )}
                  </div>

                  <div className="ml-4 flex gap-2">
                    {editingId === company.id ? (
                      <>
                        <button
                          onClick={() => handleEditSave(company.id)}
                          className="rounded-lg bg-blue-600 px-4 py-2 text-white"
                        >
                          Сохранить
                        </button>

                        <button
                          onClick={handleEditCancel}
                          className="rounded-lg bg-gray-400 px-4 py-2 text-white"
                        >
                          Отмена
                        </button>
                      </>
                        ) : (
                      <>
                        <button
                          onClick={() => handleEditStart(company)}
                          className="rounded-lg bg-yellow-500 px-4 py-2 text-white"
                        >
                          Редактировать
                        </button>

                        <button
                          onClick={() => handleDelete(company.id)}
                          className="rounded-lg bg-red-500 px-4 py-2 text-white"
                        >
                          Удалить
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}