"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Heart,
  History,
  Home,
  LayoutGrid,
  MessageSquareMore,
  Plus,
  Search,
  ShieldCheck,
  Star,
  User,
  Users,
  Wallet,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SectionKey =
  | "vacancies"
  | "orders"
  | "companies"
  | "specialists"
  | "favorites";

const sections = [
  {
    id: "vacancies" as SectionKey,
    title: "Вакансии",
    subtitle: "Актуальные предложения",
    icon: Briefcase,
    badge: "24",
    gradient: "from-cyan-500/25 via-sky-500/15 to-indigo-500/25",
    accent: "shadow-cyan-500/20",
  },
  {
    id: "orders" as SectionKey,
    title: "Заказы",
    subtitle: "Проекты для исполнителей",
    icon: LayoutGrid,
    badge: "15",
    gradient: "from-amber-500/25 via-orange-500/15 to-rose-500/25",
    accent: "shadow-orange-500/20",
  },
  {
    id: "companies" as SectionKey,
    title: "Компании",
    subtitle: "Проверенные работодатели",
    icon: Building2,
    badge: "8",
    gradient: "from-violet-500/25 via-fuchsia-500/15 to-indigo-500/25",
    accent: "shadow-violet-500/20",
  },
  {
    id: "specialists" as SectionKey,
    title: "Специалисты",
    subtitle: "Исполнители и команды",
    icon: Users,
    badge: "31",
    gradient: "from-emerald-500/25 via-teal-500/15 to-cyan-500/25",
    accent: "shadow-emerald-500/20",
  },
  {
    id: "favorites" as SectionKey,
    title: "Избранное",
    subtitle: "Сохранённые вакансии",
    icon: Heart,
    badge: "6",
    gradient: "from-pink-500/25 via-rose-500/15 to-red-500/25",
    accent: "shadow-pink-500/20",
  },
];

const sampleItems: Record<SectionKey, { title: string; meta: string }[]> = {
  vacancies: [
    { title: "Frontend Developer", meta: "IT-MARKET • 1000–2000 $" },
    { title: "Backend Developer", meta: "Tech Corp • 1200–2500 $" },
    { title: "Mobile Developer", meta: "AppStudio • 900–1800 $" },
  ],
  orders: [
    { title: "Разработать Telegram-бота", meta: "IT-MARKET • 1200 $" },
    { title: "Создать интернет-магазин", meta: "Tech Corp • 3000 $" },
    { title: "Сделать админ-панель", meta: "AdminTools • 1800 $" },
  ],
  companies: [
    { title: "IT-MARKET", meta: "IT / Marketplace • Ташкент" },
    { title: "Cloud Ltd", meta: "Cloud / DevOps • Алматы" },
    { title: "GameStudio", meta: "Game Development • Бишкек" },
  ],
  specialists: [
    { title: "Ali Valiyev", meta: "Frontend Developer" },
    { title: "Bekzod Karimov", meta: "Backend Developer" },
    { title: "Madina Rustamova", meta: "UI/UX Designer" },
  ],
  favorites: [
    { title: "Frontend Developer", meta: "IT-MARKET • Сохранено" },
    { title: "Разработать Telegram-бота", meta: "Заказ • Сохранено" },
    { title: "Cloud Ltd", meta: "Компания • Сохранено" },
  ],
};

const navItems = [
  { id: "home", label: "Главная", icon: Home },
  { id: "history", label: "История", icon: History },
  { id: "profile", label: "Профиль", icon: User },
];

const sectionTitleMap: Record<SectionKey, string> = {
  vacancies: "Вакансии",
  orders: "Заказы",
  companies: "Компании",
  specialists: "Специалисты",
  favorites: "Избранное",
};

export default function ITMarketMiniAppUI() {
  const [activeNav, setActiveNav] = useState("home");
  const [activeSection, setActiveSection] = useState<SectionKey>("vacancies");
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const list = sampleItems[activeSection];
    if (!query.trim()) return list;

    const q = query.toLowerCase();
    return list.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.meta.toLowerCase().includes(q)
    );
  }, [activeSection, query]);

  return (
    <div className="min-h-screen bg-[#050b25] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 pb-28 pt-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 flex items-center justify-between"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
              IT-MARKET
            </p>
            <h1 className="mt-1 text-2xl font-bold">
              Пользовательская платформа
            </h1>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 ring-1 ring-white/10">
            <ShieldCheck className="h-5 w-5 text-cyan-300" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          <Card className="overflow-hidden rounded-[28px] border-white/10 bg-[#111b4a] text-white shadow-2xl shadow-black/30">
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/30 text-xl font-semibold ring-2 ring-white/10">
                  S
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-xl font-bold">
                    Shaxzod Sobitaliev
                  </p>
                  <p className="mt-1 text-sm text-white/65">ID: 5954191564</p>

                  <div className="mt-4 flex items-center gap-3 rounded-[24px] bg-[#091235] px-4 py-4 ring-1 ring-white/5">
                    <Wallet className="h-6 w-6 text-white/90" />
                    <div className="flex-1">
                      <p className="text-xl font-semibold">0 сум</p>
                      <p className="text-xs text-white/55">Баланс аккаунта</p>
                    </div>
                    <Button
                      size="icon"
                      className="h-12 w-12 rounded-full bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                    >
                      <Plus className="h-6 w-6" />
                    </Button>
                  </div>
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400 text-3xl font-bold text-slate-950">
                  0
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveSection("vacancies")}
            className="group col-span-1 row-span-2 rounded-[28px] bg-linear-to-br from-[#171f54] to-[#10173d] p-5 text-left ring-1 ring-white/8"
          >
            <p className="text-[2rem] font-extrabold leading-none">Каталог</p>
            <p className="mt-2 text-sm text-white/60">
              Вакансии, компании и специалисты
            </p>

            <div className="mt-8 flex justify-center">
              <div className="rounded-[28px] bg-linear-to-br from-indigo-500/70 to-cyan-400/40 p-8 shadow-xl shadow-cyan-500/10 transition-transform group-hover:scale-105">
                <Briefcase className="h-16 w-16 text-white" />
              </div>
            </div>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveSection("favorites")}
            className="rounded-[28px] bg-linear-to-br from-amber-500/50 to-rose-500/40 p-5 text-left ring-1 ring-white/8"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-3xl font-bold">Stars</p>
                <p className="mt-1 text-sm text-white/70">
                  Избранное и сохранённое
                </p>
              </div>
              <Star className="h-12 w-12 fill-yellow-300 text-yellow-300 drop-shadow" />
            </div>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveSection("orders")}
            className="rounded-[28px] bg-linear-to-br from-blue-700/60 to-fuchsia-500/35 p-5 text-left ring-1 ring-white/8"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-3xl font-bold">Premium</p>
                <p className="mt-1 text-sm text-white/70">
                  Заказы и новые проекты
                </p>
              </div>
              <LayoutGrid className="h-12 w-12 text-cyan-200" />
            </div>
          </motion.button>
        </div>

        <div className="mt-7">
          <h2 className="text-[2rem] font-bold">Дополнительно</h2>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <Card className="rounded-[24px] border-white/10 bg-[#131c4d] text-white">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-2xl font-bold">Поддержка</p>
                    <p className="mt-1 text-sm text-white/60">Ответы и помощь</p>
                  </div>
                  <div className="rounded-full bg-white/80 p-2 text-slate-900">
                    <MessageSquareMore className="h-5 w-5" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[24px] border-white/10 bg-[#131c4d] text-white">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-2xl font-bold">Отзывы</p>
                    <p className="mt-1 text-sm text-white/60">
                      Рейтинг платформы
                    </p>
                  </div>
                  <div className="rounded-full bg-white/80 p-2 text-slate-900">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <button className="rounded-[22px] bg-linear-to-r from-pink-600 to-orange-400 px-4 py-4 text-left shadow-lg shadow-pink-500/20">
              <p className="text-2xl font-bold">Instagram</p>
              <p className="text-sm text-white/85">Скидки и ролики</p>
            </button>

            <button className="rounded-[22px] bg-linear-to-r from-sky-500 to-indigo-500 px-4 py-4 text-left shadow-lg shadow-sky-500/20">
              <p className="text-2xl font-bold">Telegram</p>
              <p className="text-sm text-white/85">Новости и обновления</p>
            </button>
          </div>
        </div>

        <div className="mt-7 rounded-[28px] bg-[#0d1438] p-4 ring-1 ring-white/8">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">Быстрый просмотр</p>
              <p className="text-sm text-white/60">
                Раздел: {sectionTitleMap[activeSection]}
              </p>
            </div>

            <div className="rounded-2xl bg-cyan-400/15 p-2 text-cyan-300 ring-1 ring-cyan-300/20">
              <Search className="h-5 w-5" />
            </div>
          </div>

          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск по пользовательской платформе"
            className="mb-4 rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-white/35"
          />

          <div className="grid grid-cols-2 gap-3 pb-4">
            {sections.map((section) => {
              const Icon = section.icon;
              const active = activeSection === section.id;

              return (
                <motion.button
                  key={section.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveSection(section.id)}
                  className={`rounded-[24px] bg-linear-to-br ${section.gradient} p-4 text-left ring-1 transition ${
                    active ? "ring-cyan-300/60 shadow-xl" : "ring-white/8"
                  } ${section.accent}`}
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-8 w-8 text-white" />
                    <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold">
                      {section.badge}
                    </span>
                  </div>

                  <p className="mt-6 text-xl font-bold">{section.title}</p>
                  <p className="mt-1 text-sm text-white/65">
                    {section.subtitle}
                  </p>
                </motion.button>
              );
            })}
          </div>

          <div className="space-y-3">
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${item.title}-${index}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-[22px] bg-white/5 p-4 ring-1 ring-white/8"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-base font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-white/60">{item.meta}</p>
                  </div>
                  <Button className="rounded-xl bg-cyan-400 text-slate-950 hover:bg-cyan-300">
                    Открыть
                  </Button>
                </div>
              </motion.div>
            ))}

            {!filteredItems.length && (
              <div className="rounded-[22px] bg-white/5 p-4 text-sm text-white/60 ring-1 ring-white/8">
                По вашему запросу ничего не найдено.
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 mx-auto w-full max-w-md px-4 pb-4">
        <div className="grid grid-cols-3 gap-2 rounded-[28px] bg-[#111943]/95 p-2 shadow-2xl shadow-black/40 ring-1 ring-white/10 backdrop-blur">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = activeNav === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`rounded-[22px] px-3 py-3 transition ${
                  active ? "bg-white/10 text-cyan-300" : "text-white/55"
                }`}
              >
                <div className="flex flex-col items-center gap-1">
                  <Icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}