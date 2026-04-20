"use client";

import { useState } from "react";
import { createCompany } from "../../lib/api";

type Props = {
  onCreated?: () => Promise<void> | void;
};

export const CompanyForm = ({ onCreated }: Props) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      setMessage("Введите название компании");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      await createCompany(name.trim());

      setMessage("Компания успешно создана");
      setName("");

      if (onCreated) {
        await onCreated();
      }
    } catch (error) {
      console.error("Ошибка при создании компании:", error);
      setMessage("Ошибка при создании компании");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-[24px] font-bold text-[#202020]">
        Добавить компанию
      </h2>

      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Название компании"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-12 flex-1 rounded-xl border border-[#d9d9d9] px-4 outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-green-600 px-6 py-3 text-white"
        >
          {loading ? "Создание..." : "Создать"}
        </button>
      </form>

      {message && <p className="mt-4 text-sm text-[#202020]">{message}</p>}
    </section>
  );
};