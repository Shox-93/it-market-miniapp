"use client";

import { useEffect, useState } from "react";
import {
  deleteSpecialist,
  getSpecialists,
  updateSpecialist,
} from "../../../lib/api";

type Specialist = {
  id: number;
  fullName: string;
  role: string;
};

export default function AdminSpecialistsPage() {
  const [specialists, setSpecialists] = useState<Specialist[]>([]);
  const [loading, setLoading] = useState(true);

  const [newFullName, setNewFullName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [creating, setCreating] = useState(false);
  const [message, setMessage] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingFullName, setEditingFullName] = useState("");
  const [editingRole, setEditingRole] = useState("");

  const loadSpecialists = async () => {
    try {
      const data = await getSpecialists();
      setSpecialists(data);
    } catch (error) {
      console.error("Ошибка загрузки специалистов:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSpecialists();
  }, []);

  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newFullName.trim() || !newRole.trim()) {
      setMessage("Введите имя и роль");
      return;
    }

    try {
      setCreating(true);
      setMessage("");

      const response = await fetch("http://127.0.0.1:8000/api/v1/specialists/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: newFullName.trim(),
          role: newRole.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка создания специалиста");
      }

      setNewFullName("");
      setNewRole("");
      setMessage("Специалист успешно создан");
      await loadSpecialists();
    } catch (error) {
      setMessage("Ошибка при создании специалиста");
    } finally {
      setCreating(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteSpecialist(id);
      setSpecialists((prev) => prev.filter((s) => s.id !== id));
    } catch (error) {
      alert("Ошибка при удалении специалиста");
    }
  };

  const handleEditStart = (specialist: Specialist) => {
    setEditingId(specialist.id);
    setEditingFullName(specialist.fullName);
    setEditingRole(specialist.role);
  };

  const handleEditSave = async (id: number) => {
    try {
      const updated = await updateSpecialist(
        id,
        editingFullName.trim(),
        editingRole.trim()
      );

      setSpecialists((prev) =>
        prev.map((s) => (s.id === id ? updated : s))
      );

      setEditingId(null);
      setEditingFullName("");
      setEditingRole("");
    } catch (error) {
      alert("Ошибка при обновлении специалиста");
    }
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditingFullName("");
    setEditingRole("");
  };

  return (
    <main className="min-h-screen bg-[#f3f3f3] p-6">
      <div className="mx-auto max-w-300">
        <h1 className="mb-6 text-3xl font-bold text-[#202020]">
          Админка: специалисты
        </h1>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-[24px] font-bold text-[#202020]">
            Добавить специалиста
          </h2>

          <form onSubmit={handleCreate} className="grid gap-4 md:grid-cols-3">
            <input
              type="text"
              placeholder="ФИО"
              value={newFullName}
              onChange={(e) => setNewFullName(e.target.value)}
              className="h-12 rounded-xl border border-[#d9d9d9] px-4 outline-none"
            />

            <input
              type="text"
              placeholder="Роль"
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              className="h-12 rounded-xl border border-[#d9d9d9] px-4 outline-none"
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
          <h2 className="mb-4 text-xl font-semibold">Список специалистов</h2>

          {loading ? (
            <p>Загрузка...</p>
          ) : specialists.length === 0 ? (
            <p>Специалистов пока нет</p>
          ) : (
            <div className="space-y-3">
              {specialists.map((specialist) => (
                <div
                  key={specialist.id}
                  className="flex items-center justify-between rounded-xl border p-4"
                >
                  <div className="flex-1">
                    {editingId === specialist.id ? (
                      <div className="grid gap-3 md:grid-cols-2">
                        <input
                          type="text"
                          value={editingFullName}
                          onChange={(e) => setEditingFullName(e.target.value)}
                          className="rounded-lg border px-3 py-2"
                        />
                        <input
                          type="text"
                          value={editingRole}
                          onChange={(e) => setEditingRole(e.target.value)}
                          className="rounded-lg border px-3 py-2"
                        />
                      </div>
                    ) : (
                      <>
                        <p className="font-semibold">{specialist.fullName}</p>
                        <p className="text-sm text-gray-500">
                          {specialist.role}
                        </p>
                        <p className="text-sm text-gray-400">
                          ID: {specialist.id}
                        </p>
                      </>
                    )}
                  </div>

                  <div className="ml-4 flex gap-2">
                    {editingId === specialist.id ? (
                      <>
                        <button
                          onClick={() => handleEditSave(specialist.id)}
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
                          onClick={() => handleEditStart(specialist)}
                          className="rounded-lg bg-yellow-500 px-4 py-2 text-white"
                        >
                          Редактировать
                        </button>

                        <button
                          onClick={() => handleDelete(specialist.id)}
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