"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const CompanySearch = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/companies?search=${search}`);
  };

  return (
    <div className="mx-auto max-w-200 px-4 py-4">
      <div className="flex gap-2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск компании..."
          className="w-full rounded border px-3 py-2"
        />
        <button
          onClick={handleSearch}
          className="rounded bg-blue-500 px-4 text-white"
        >
          Найти
        </button>
      </div>
    </div>
  );
};