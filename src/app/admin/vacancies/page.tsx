"use client";

import { useEffect, useState } from "react";
import {
  deleteVacancy,
  getVacancies,
  updateVacancy,
} from "../../../lib/api";

type Vacancy = {
  id: number;
  title: string;
};

export default function AdminVacanciesPage() {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [loading, setLoading] = useState(true);

  const [newTitle, setNewTitle] = useState("");
  const [creating, setCreating] = useState(false);
  const [message, setMessage] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingTitle, setEditingTitle] = useState("");

  const loadVacancies = async () => {
    try {
      const data = await getVacancies();
      setVacancies(data);
    } catch (error) {
      console.error("Ошибка загрузки вакансий:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadVacancies();
  }, []);

  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newTitle.trim()) {
      setMessage("Введите название вакансии");
      return;
    }

    try {
      setCreating(true);
      setMessage("");

      const response = await fetch("http://127.0.0.1:8000/api/v1/vacancies/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle.trim() }),
      });

      if (!response.ok) {
        throw new Error("Ошибка создания вакансии");
      }

      setNewTitle("");
      setMessage("Вакансия успешно создана");
      await loadVacancies();
    } catch (error) {
      setMessage("Ошибка при создании вакансии");
    } finally {
      setCreating(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteVacancy(id);
      setVacancies((prev) => prev.filter((vacancy) => vacancy.id !== id));
    } catch (error) {
      alert("Ошибка при удалении вакансии");
    }
  };

  const handleEditStart = (vacancy: Vacancy) => {
    setEditingId(vacancy.id);
    setEditingTitle(vacancy.title);
  };

 const handleEditSave = async (id: number) => {
  try {
    const updated = await updateVacancy(id, {
      title: editingTitle.trim(),
    });

    setVacancies((prev) =>
      prev.map((vacancy) => (vacancy.id === id ? updated : vacancy))
    );

    setEditingId(null);
    setEditingTitle("");
  } catch (error) {
    console.error("Ошибка обновления вакансии:", error);
  }
};

  const handleEditCancel = () => {
    setEditingId(null);
    setEditingTitle("");
  };

  return (
    <main className="min-h-screen bg-[#f3f3f3] p-6">
      <div className="mx-auto max-w-300">
        <h1 className="mb-6 text-3xl font-bold text-[#202020]">
          Админка: вакансии
        </h1>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-[24px] font-bold text-[#202020]">
            Добавить вакансию
          </h2>

          <form onSubmit={handleCreate} className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Название вакансии"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="h-12 flex-1 rounded-xl border border-[#d9d9d9] px-4 outline-none"
            />

            <button
              type="submit"
              disabled={creating}
              className="rounded-xl bg-green-600 px-6 py-3 text-white"
            >
              {creating ? "Создание..." : "Создать"}
            </button>
          </form>

          {message && <p className="mt-4 text-sm text-[#202020]">{message}</p>}
        </section>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Список вакансий</h2>
          {loading ? (
            <p>Загрузка...</p>
          ) : vacancies.length === 0 ? (
            <p>Вакансий пока нет</p>
          ) : (
            <div className="space-y-3">
              {vacancies.map((vacancy) => (
                <div
                  key={vacancy.id}
                  className="flex items-center justify-between rounded-xl border p-4"
                >
                  <div className="flex-1">
                    {editingId === vacancy.id ? (
                      <input
                        type="text"
                        value={editingTitle}
                        onChange={(e) => setEditingTitle(e.target.value)}
                        className="w-full rounded-lg border px-3 py-2"
                      />
                    ) : (
                      <>
                        <p className="font-semibold">{vacancy.title}</p>
                        <p className="text-sm text-gray-500">ID: {vacancy.id}</p>
                      </>
                    )}
                  </div>

                  <div className="ml-4 flex gap-2">
                    {editingId === vacancy.id ? (
                      <>
                        <button
                          onClick={() => handleEditSave(vacancy.id)}
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
                          onClick={() => handleEditStart(vacancy)}
                          className="rounded-lg bg-yellow-500 px-4 py-2 text-white"
                        >
                          Редактировать
                        </button>

                        <button
                          onClick={() => handleDelete(vacancy.id)}
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