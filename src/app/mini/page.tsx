"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  History,
  Home,
  LayoutGrid,
  Plus,
  ShieldCheck,
  User,
  Users,
  Wallet,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type SectionKey =
  | "vacancies"
  | "orders"
  | "companies"
  | "specialists";

const sections = [
  {
    id: "vacancies" as SectionKey,
    title: "Вакансии",
    icon: Briefcase,
    badge: "24",
  },
  {
    id: "orders" as SectionKey,
    title: "Заказы",
    icon: LayoutGrid,
    badge: "15",
  },
  {
    id: "companies" as SectionKey,
    title: "Компании",
    icon: Building2,
    badge: "8",
  },
  {
    id: "specialists" as SectionKey,
    title: "Специалисты",
    icon: Users,
    badge: "31",
  },
];

const sampleItems: Record<SectionKey, { title: string; meta: string }[]> = {
  vacancies: [
    { title: "Frontend Developer", meta: "1500–2500 $" },
    { title: "Backend Developer", meta: "Python / FastAPI" },
    { title: "Mobile Developer", meta: "Flutter" },
  ],
  orders: [
    { title: "Telegram Bot", meta: "1200 $" },
    { title: "CRM система", meta: "3000 $" },
    { title: "Marketplace", meta: "1800 $" },
  ],
  companies: [
    { title: "IT-MARKET", meta: "Marketplace" },
    { title: "Cloud Ltd", meta: "DevOps" },
    { title: "GameStudio", meta: "Game Dev" },
  ],
  specialists: [
    { title: "Ali Valiyev", meta: "Frontend" },
    { title: "Bekzod Karimov", meta: "Backend" },
    { title: "Madina Rustamova", meta: "UI/UX" },
  ],
};

const navItems = [
  { id: "home", label: "Главная", icon: Home },
  { id: "history", label: "История", icon: History },
  { id: "profile", label: "Профиль", icon: User },
];

export default function MiniApp() {
  const [activeNav, setActiveNav] = useState("home");
  const [activeSection, setActiveSection] =
    useState<SectionKey>("vacancies");

  const items = useMemo(
    () => sampleItems[activeSection],
    [activeSection]
  );

  return (
    <div className="min-h-screen bg-[#050b25] text-white">
      <div className="mx-auto w-full max-w-md px-4 pb-28 pt-4">

        {/* HEADER */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
              IT-MARKET
            </p>

            <h1 className="mt-1 text-xl font-bold">
              Пользовательская платформа
            </h1>
          </div>

          <div className="rounded-2xl bg-white/5 p-3">
            <ShieldCheck className="h-5 w-5 text-cyan-300" />
          </div>
        </div>

        {/* PROFILE */}
        <Card className="rounded-[28px] bg-[#111b4a] text-white">
          <CardContent className="p-5">

            <div className="flex gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/30 text-xl font-bold">
                S
              </div>

              <div className="flex-1">

                <p className="text-lg font-bold">
                  Shaxzod Sobitaliev
                </p>

                <p className="text-sm text-white/60">
                  ID: 5954191564
                </p>

                <div className="mt-3 flex items-center gap-3 rounded-2xl bg-[#091235] p-4">

                  <Wallet className="h-5 w-5" />

                  <div className="flex-1">
                    <p className="font-bold">0 сум</p>
                    <p className="text-xs text-white/50">
                      Баланс
                    </p>
                  </div>

                  <Button
                    size="icon"
                    className="h-10 w-10 rounded-full bg-cyan-400 text-black"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>

                </div>

              </div>

            </div>

          </CardContent>
        </Card>

        {/* CATEGORIES */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          {sections.map((section) => {
            const Icon = section.icon;
            const active = activeSection === section.id;

            return (
              <motion.button
                key={section.id}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveSection(section.id)}
                className={`rounded-[24px] p-4 text-left ${
                  active
                    ? "bg-cyan-500/20 ring-1 ring-cyan-300"
                    : "bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6" />

                  <span className="rounded-full bg-white/10 px-2 py-1 text-xs">
                    {section.badge}
                  </span>
                </div>

                <p className="mt-4 text-base font-bold">
                  {section.title}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* ITEMS */}
        <div className="mt-5 space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/5 p-4"
            >
              <p className="font-semibold">
                {item.title}
              </p>

              <p className="mt-1 text-sm text-white/60">
                {item.meta}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* BOTTOM */}
      <div className="fixed bottom-0 left-0 right-0 mx-auto w-full max-w-md px-4 pb-4">
        <div className="grid grid-cols-3 rounded-[24px] bg-[#111943] p-2">

          {navItems.map((item) => {
            const Icon = item.icon;
            const active = activeNav === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`rounded-[18px] py-3 ${
                  active
                    ? "bg-white/10 text-cyan-300"
                    : "text-white/50"
                }`}
              >
                <div className="flex flex-col items-center gap-1">
                  <Icon className="h-4 w-4" />
                  <span className="text-xs">
                    {item.label}
                  </span>
                </div>
              </button>
            );
          })}

        </div>
      </div>
    </div>
  );
}