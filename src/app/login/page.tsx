"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginUser } from "@/lib/api";
import { saveUser } from "../../lib/auth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      await loginUser(email, password);
      saveUser({ email });

      setMessage("Вход выполнен успешно");
      router.push("/");
      router.refresh();
    } catch (error) {
      setMessage("Неверный email или пароль");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f3f3f3] px-4 py-10">
      <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-3xl font-bold text-[#202020]">Вход</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 w-full rounded-xl border border-[#d9d9d9] px-4 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 w-full rounded-xl border border-[#d9d9d9] px-4 outline-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-green-600 px-6 py-3 text-white disabled:opacity-60"
          >
            {loading ? "Вход..." : "Войти"}
          </button>
        </form>

        {message && <p className="mt-4 text-sm text-[#202020]">{message}</p>}

        <p className="mt-6 text-sm text-gray-500">
          Нет аккаунта?{" "}
          <Link href="/register" className="text-green-600">
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </main>
  );
}