"use client";

import { useEffect, useState } from "react";
import { deleteOrder, getOrders } from "../../../lib/api";

type Order = {
  id: number;
  title: string;
  company?: string;
  customerType?: string;
  budget?: string;
  start?: string;
  end?: string;
  tags?: string[];
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [customerType, setCustomerType] = useState("Компания");
  const [budget, setBudget] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [tags, setTags] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);

  const [creating, setCreating] = useState(false);
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setTitle("");
    setCompany("");
    setCustomerType("Компания");
    setBudget("");
    setStart("");
    setEnd("");
    setTags("");
    setEditingId(null);
  };

  const startEdit = (order: Order) => {
    setEditingId(order.id);
    setTitle(order.title || "");
    setCompany(order.company || "");
    setCustomerType(order.customerType || "Компания");
    setBudget(order.budget || "");
    setStart(order.start || "");
    setEnd(order.end || "");
    setTags(order.tags?.join(", ") || "");
  };

  const loadOrders = async () => {
    try {
      const data = await getOrders();
      setOrders(data);
    } catch (error) {
      console.error("Ошибка загрузки заказов:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim()) {
      setMessage("Введите название заказа");
      return;
    }

    try {
      setCreating(true);
      setMessage("");

      const url = editingId
        ? `http://127.0.0.1:8000/api/v1/orders/${editingId}`
        : "http://127.0.0.1:8000/api/v1/orders/";

      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title.trim(),
          company: company.trim(),
          customerType,
          budget: budget.trim(),
          start,
          end,
          tags: tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean),
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка");
      }

      resetForm();
      setMessage(
        editingId
          ? "Заказ успешно обновлён"
          : "Заказ успешно создан"
      );

      await loadOrders();
    } catch (error) {
      setMessage(
        editingId
          ? "Ошибка при обновлении заказа"
          : "Ошибка при создании заказа"
      );
    } finally {
      setCreating(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteOrder(id);
      setOrders((prev) => prev.filter((order) => order.id !== id));
    } catch (error) {
      alert("Ошибка при удалении заказа");
    }
  };

  return (
    <main className="min-h-screen bg-[#f3f3f3] p-6">
      <div className="mx-auto max-w-300">
        <h1 className="mb-6 text-3xl font-bold text-[#202020]">
          Админка: заказы
        </h1>

        {/* ФОРМА */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-[24px] font-bold text-[#202020]">
            {editingId ? "Редактировать заказ" : "Добавить заказ"}
          </h2>

          <form onSubmit={handleCreate} className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Название заказа"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="h-12 rounded-xl border border-[#d9d9d9] px-4 outline-none"
            />

            <input
              type="text"
              placeholder="Компания"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="h-12 rounded-xl border border-[#d9d9d9] px-4 outline-none"
            />

            <select
              value={customerType}
              onChange={(e) => setCustomerType(e.target.value)}
              className="h-12 rounded-xl border border-[#d9d9d9] px-4 outline-none"
            >
              <option value="Компания">Компания</option>
              <option value="Государственный орган">
                Государственный орган
              </option>
              <option value="Частное лицо">Частное лицо</option>
            </select>

            <input
              type="text"
              placeholder="Бюджет"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="h-12 rounded-xl border border-[#d9d9d9] px-4 outline-none"
            />

            <input
              type="date"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="h-12 rounded-xl border border-[#d9d9d9] px-4 outline-none"
            />

            <input
              type="date"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              className="h-12 rounded-xl border border-[#d9d9d9] px-4 outline-none"
            />

            <input
              type="text"
              placeholder="Теги через запятую"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="h-12 rounded-xl border border-[#d9d9d9] px-4 outline-none md:col-span-2"
            />

            <button
              type="submit"
              disabled={creating}
              className="rounded-xl bg-green-600 px-6 py-3 text-white md:col-span-2"
            >
              {creating
                ? editingId
                  ? "Сохранение..."
                  : "Создание..."
                : editingId
                  ? "Сохранить изменения"
                  : "Создать"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={() => {
                  resetForm();
                  setMessage("");
                }}
                className="rounded-xl bg-gray-400 px-6 py-3 text-white md:col-span-2"
              >
                Отмена редактирования
              </button>
            )}
          </form>

          {message && <p className="mt-4 text-sm">{message}</p>}
        </section>

        {/* СПИСОК */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Список заказов</h2>

          {loading ? (
            <p>Загрузка...</p>
          ) : orders.length === 0 ? (
            <p>Заказов пока нет</p>
          ) : (
            <div className="space-y-3">
              {orders.map((order) => (
                <div key={order.id} className="rounded-xl border p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="font-semibold">{order.title}</p>

                      <p className="text-sm text-gray-500">
                        Компания: {order.company || "-"}
                      </p>

                      <p className="text-sm text-gray-500">
                        Тип заказчика: {order.customerType || "-"}
                      </p>

                      <p className="text-sm text-gray-500">
                        Бюджет: {order.budget || "-"}
                      </p>
                      <p className="text-sm text-gray-500">
                        Начало: {order.start || "-"}
                      </p>

                      <p className="text-sm text-gray-500">
                        Конец: {order.end || "-"}
                      </p>

                      <p className="text-sm text-gray-500">
                        Теги: {order.tags?.join(", ") || "-"}
                      </p>

                      <p className="text-sm text-gray-400">
                        ID: {order.id}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => startEdit(order)}
                        className="rounded-lg bg-yellow-500 px-4 py-2 text-white"
                      >
                        Редактировать
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(order.id)}
                        className="rounded-lg bg-red-500 px-4 py-2 text-white"
                      >
                        Удалить
                      </button>
                    </div>
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