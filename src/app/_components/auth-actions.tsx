"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getUser, logout } from "../../lib/auth";

export const AuthActions = () => {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const user = getUser();
    setEmail(user?.email || null);
  }, []);

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  if (email) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-[#202020]">{email}</span>
        <button
          onClick={handleLogout}
          className="text-sm text-red-500"
        >
          Выйти
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Link href="/register" className="text-sm">
        Зарегистрироваться
      </Link>
      <Link href="/login" className="text-sm">
        Войти
      </Link>
    </div>
  );
};