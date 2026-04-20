"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { applyOrder, getOrder } from "@/lib/api";
import { getUser } from "../../../lib/auth";

type Order = {
  id: number;
  title: string;
  company?: string;
  customerType?: string;
  budget?: string;
  start?: string;
  end?: string;
  tags?: string[];
  error?: string;
};

export default function OrderPage() {
  const params = useParams();
  const id = params?.id as string;

  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [applying, setApplying] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!id) return;

    const loadOrder = async () => {
      try {
        const data = await getOrder(id);
        setOrder(data);
      } catch (error) {
        console.error("getOrder error:", error);
        setOrder({ id: 0, title: "", error: "Order not found" });
      } finally {
        setLoading(false);
      }
    };

    loadOrder();
  }, [id]);

  const handleApply = async () => {
    if (!order) return;

    const user = getUser();

    if (!user) {
      setMessage("Сначала войдите в аккаунт");
      return;
    }

    try {
      setApplying(true);
      setMessage("");

      const data = await applyOrder(String(order.id));
      setMessage(data.message || "Отклик отправлен");
    } catch (error) {
      console.error("applyOrder error:", error);
      setMessage("Ошибка при отклике");
    } finally {
      setApplying(false);
    }
  };

  if (loading) {
    return (
      <div className="p-10 text-center text-gray-500">
        Загрузка заказа...
      </div>
    );
  }

  if (!order || order.error) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Заказ не найден</h1>
        <Link href="/orders" className="mt-4 block text-green-600">
          Назад
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f3f3f3] px-4 py-10">
      <div className="mx-auto max-w-275 space-y-6">
        <Link href="/orders" className="text-sm text-[#5f6b7a]">
          ← Назад к заказам
        </Link>

        <section className="rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-sm text-gray-500">
            {order.customerType || "Компания"}
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#202020]">
            {order.title || "Без названия"}
          </h1>

          <p className="mt-2 text-gray-600">
            {order.company || "Компания не указана"}
          </p>

          {order.tags && order.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {order.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#f1f3f5] px-3 py-1 text-sm text-[#444]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <p className="text-sm text-gray-400">Бюджет</p>
              <p className="mt-1 text-lg text-[#202020]">
                {order.budget || "-"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Начало</p>
              <p className="mt-1 text-lg text-[#202020]">
                {order.start || "-"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Конец</p>
              <p className="mt-1 text-lg text-[#202020]">
                {order.end || "-"}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleApply}
            disabled={applying}
            className="mt-8 rounded-xl bg-green-600 px-6 py-3 text-white disabled:opacity-60"
          >
            {applying ? "Отправка..." : "Откликнуться"}
          </button>

          {message && (
            <p className="mt-4 text-sm font-medium text-green-700">
              {message}
            </p>
          )}
        </section>
      </div>
    </main>
  );
}