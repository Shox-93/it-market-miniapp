"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const navItems = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/companies", label: "Компании" },
  { href: "/admin/specialists", label: "Специалисты" },
  { href: "/admin/vacancies", label: "Вакансии" },
  { href: "/admin/orders", label: "Заказы" },
  
   
];

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-[#f3f3f3]">
      <header className="flex items-center justify-between border-b bg-white px-6 py-4">
        <div>
          <h1 className="text-xl font-bold text-[#202020]">IT Market Admin</h1>
          <p className="text-sm text-gray-500">Панель управления</p>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-lg bg-red-500 px-4 py-2 text-white"
        >
          Выйти
        </button>
      </header>

      <div className="flex min-h-[calc(100vh-73px)]">
        <aside className="hidden w-65 border-r bg-white p-4 md:block">
          <nav className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-xl px-4 py-3 transition ${
                    isActive
                      ? "bg-[#202020] text-white"
                      : "text-[#202020] hover:bg-[#f3f3f3]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}