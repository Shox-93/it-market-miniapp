"use client";

import { useMemo, useState } from "react";

type Order = {
  id: number;
  organization: string;
  type: string;
  title: string;
  budget: string;
  start: string;
  end: string;
};

const orders: Order[] = [
  {
    id: 1,
    organization:
      "KOSMIK MONITORING VA GEOAXBOROT TEXNOLOGIYALARI MARKAZI UNITAR KORXONASI",
    type: "В ЭЛЕКТРОННОМ ВИДЕ",
    title: "Программный продукт",
    budget: "90,000,000 UZS",
    start: "11.05.2023",
    end: "16.05.2023",
  },
  {
    id: 2,
    organization: "TIBBIYЁT BIRLASHMASI",
    type: "В ЭЛЕКТРОННОМ ВИДЕ",
    title: "Программный продукт",
    budget: "3,435,000,000 UZS",
    start: "11.05.2023",
    end: "16.05.2023",
  },
  {
    id: 3,
    organization: "УНИВЕРСИТЕТ МИРОВОЙ ЭКОНОМИКИ И ДИПЛОМАТИИ",
    type: "В ЭЛЕКТРОННОМ ВИДЕ",
    title: "Услуга по разработке и внедрению автоматизированной системы управления",
    budget: "300,000,000 UZS",
    start: "10.05.2023",
    end: "15.05.2023",
  },
  {
    id: 4,
    organization: "ИНСТИТУТ СЕЙСМОЛОГИИ АКАДЕМИИ НАУК",
    type: "В ЭЛЕКТРОННОМ ВИДЕ",
    title: "Программное обеспечение в сфере информационных технологий",
    budget: "45,000,000 UZS",
    start: "10.05.2023",
    end: "15.05.2023",
  },
  {
    id: 5,
    organization:
      "ЎЗРЕС ОЛИЙ МАЖЛИСИ СЕНАТИ БИНОЛАРИДАН ФОЙДАЛАНИШ БОШҚАРМАСИ",
    type: "В ЭЛЕКТРОННОМ ВИДЕ",
    title: "Услуги по созданию web сайта",
    budget: "163,000,000 UZS",
    start: "06.05.2023",
    end: "11.05.2023",
  },
  {
  id: 6,
  organization: "ИНСТИТУТ СЕЙСМОЛОГИИ АКАДЕМИИ НАУК",
  type: "В ЭЛЕКТРОННОМ ВИДЕ",
  title: "Программный продукт",
  budget: "90,000,000 UZS",
  start: "04.05.2023",
  end: "09.05.2023",
},
{
  id: 7,
  organization: "ТИББИЁТ БИРЛАШМАСИ",
  type: "В ЭЛЕКТРОННОМ ВИДЕ",
  title: "Программное обеспечение в сфере информационных технологий",
  budget: "45,000,000 UZS",
  start: "04.05.2023",
  end: "09.05.2023",
},
{
  id: 8,
  organization: "BIOSIFAT РЕСПУБЛИКА МАРКАЗИ",
  type: "В ЭЛЕКТРОННОМ ВИДЕ",
  title: "Услуга по обеспечению работы программного продукта через субдомен",
  budget: "440,000,000 UZS",
  start: "03.05.2023",
  end: "08.05.2023",
},
{
  id: 9,
  organization: "УЗБЕКИСТОН РЕСПУБЛИКАСИ ЁШЛАР ИШЛАРИ АГЕНТЛИГИ",
  type: "В ЭЛЕКТРОННОМ ВИДЕ",
  title: "Услуга по программированию",
  budget: "40,000,000 UZS",
  start: "02.05.2023",
  end: "07.05.2023",
},
{
  id: 10,
  organization: "NONE",
  type: "В ЭЛЕКТРОННОМ ВИДЕ",
  title: "Программное обеспечение в сфере информационных технологий",
  budget: "400,000,000 UZS",
  start: "27.04.2023",
  end: "02.05.2023",
},
{
  id: 11,
  organization: "NONE",
  type: "В ЭЛЕКТРОННОМ ВИДЕ",
  title: "Программное обеспечение в сфере информационных технологий",
  budget: "350,000,000 UZS",
  start: "27.04.2023",
  end: "02.05.2023",
},
{
  id: 12,
  organization: "ЎЗБЕКИСТОН РЕСПУБЛИКАСИ АДЛИЯ ВАЗИРЛИГИ ҲУЗУРИДАГИ АХБОРОТ ТЕХНОЛОГИЯЛАРИ МАРКАЗИ",
  type: "В ЭЛЕКТРОННОМ ВИДЕ",
  title: "Услуга по анализу предпроектных данных по разработке информационной системы",
  budget: "45,000,000 UZS",
  start: "17.04.2023",
  end: "02.05.2023",
},
{
  id: 13,
  organization: "НАЦИОНАЛЬНЫЙ ЦЕНТР РЕАБИЛИТАЦИИ И ПРОТЕЗИРОВАНИЯ ЛИЦ С ИНВАЛИДНОСТЬЮ",
  type: "В ЭЛЕКТРОННОМ ВИДЕ",
  title: "Услуга по системному анализу и программированию",
  budget: "131,000,000 UZS",
  start: "26.04.2023",
  end: "01.05.2023",
},
{
  id: 14,
  organization: "БУХОРО ВИЛОЯТИ ҲОКИМИЯТИ",
  type: "В ЭЛЕКТРОННОМ ВИДЕ",
  title: "Услуга по разработке модулей для портала интерактивных услуг",
  budget: "370,000,000 UZS",
  start: "25.04.2023",
  end: "30.04.2023",
},
{
  id: 15,
  organization: "БУХОРО ВИЛОЯТИ ҲОКИМИЯТИ",
  type: "В ЭЛЕКТРОННОМ ВИДЕ",
  title: "Услуга по разработке модулей для портала интерактивных услуг",
  budget: "370,000,000 UZS",
  start: "25.04.2023",
  end: "30.04.2023",
},
{
  id: 16,
  organization: "NONE",
  type: "В ЭЛЕКТРОННОМ ВИДЕ",
  title: "Услуга по проектированию и разработке информационных технологий для прикладных задач и тестированию программного обеспечения",
  budget: "130,000,000 UZS",
  start: "25.04.2023",
  end: "30.04.2023",
},
{
  id: 17,
  organization: "ЭЛЕКТРОН ҲУКУМАТ ЛОЙИҲАЛАРИНИ БОШҚАРИШ МАРКАЗИ",
  type: "В ЭЛЕКТРОННОМ ВИДЕ",
  title: "Услуга виртуального выделенного сервера",
  budget: "1,760,000,000 UZS",
  start: "20.04.2023",
  end: "25.04.2023",
},
{
  id: 18,
  organization: "РЕСПУБЛИКАНСКАЯ КОЖНО-ВЕНЕРОЛОГИЧЕСКАЯ КЛИНИЧЕСКАЯ БОЛЬНИЦА",
  type: "В ЭЛЕКТРОННОМ ВИДЕ",
  title: "Услуга по созданию web сайта",
  budget: "54,000,000 UZS",
  start: "19.04.2023",
  end: "24.04.2023",
},
{
  id: 19,
  organization: "ЖИЗЗАХ ШАҲРИДА КОЗОН ФЕДЕРАЛ УНИВЕРСИТЕТИ ФИЛИАЛИ",
  type: "В ЭЛЕКТРОННОМ ВИДЕ",
  title: "Услуга по программированию",
  budget: "200,000,000 UZS",
  start: "19.04.2023",
  end: "24.04.2023",
},
{
  id: 20,
  organization: "РИТ ВА ОИАТ САМАРҚАНД ФИЛИАЛИ",
  type: "В ЭЛЕКТРОННОМ ВИДЕ",
  title: "Услуга по установке программного обеспечения",
  budget: "120,000,000 UZS",
  start: "05.04.2023",
  end: "10.04.2023",
},
];

const parseBudget = (value: string) => Number(value.replace(/[^\d]/g, ""));

export const GovernmentCatalog = () => {
  const [search, setSearch] = useState("");
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");

  const [appliedSearch, setAppliedSearch] = useState("");
  const [appliedMinBudget, setAppliedMinBudget] = useState("");
  const [appliedMaxBudget, setAppliedMaxBudget] = useState("");

  const filteredOrders = useMemo(() => {
    const searchValue = appliedSearch.trim().toLowerCase();
    const min = appliedMinBudget ? Number(appliedMinBudget) : null;
    const max = appliedMaxBudget ? Number(appliedMaxBudget) : null;

    return orders.filter((item) => {
      const budgetValue = parseBudget(item.budget);

      const matchesSearch =
        !searchValue ||
        item.organization.toLowerCase().includes(searchValue) ||
        item.title.toLowerCase().includes(searchValue);

      const matchesMin = min === null || budgetValue >= min;
      const matchesMax = max === null || budgetValue <= max;

      return matchesSearch && matchesMin && matchesMax;
    });
  }, [appliedSearch, appliedMinBudget, appliedMaxBudget]);

  const applyFilters = () => {
    setAppliedSearch(search);
    setAppliedMinBudget(minBudget);
    setAppliedMaxBudget(maxBudget);
  };

  return (
    <section className="mx-auto max-w-295 px-6 pb-16 pt-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_350px]">
        <div>
          <h1 className="text-[42px] font-extrabold leading-[1.1] text-[#1e2d3d]">
            Государственные закупки
          </h1>

          <p className="mt-3 text-[13px] font-bold uppercase text-[#8d98a8]">
            ТЕНДЕРЫ ПО ОТРАСЛЯМ
          </p>

          <div className="mt-6 space-y-4">
            {filteredOrders.map((item) => (
              <article
                key={item.id}
                className="rounded-[20px] bg-white px-5 py-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <p className="text-[13px] font-bold uppercase text-[#9a8f87]">
                  {item.organization}
                </p>

                <p className="mt-1 text-[10px] uppercase text-[#9a9a9a]">
                  {item.type}
                </p>

                <h3 className="mt-5 text-[16px] font-extrabold text-[#1e2d3d]">
                  {item.title}
                </h3>

                <div className="mt-8 grid grid-cols-3 gap-6">
                  <div>
                    <p className="text-[12px] text-[#98a3b1]">Бюджет</p>
                    <p className="mt-1 text-[14px] text-[#1e2d3d]">
                      {item.budget}
                    </p>
                  </div>

                  <div>
                    <p className="text-[12px] text-[#98a3b1]">Начало приема</p>
                    <p className="mt-1 text-[14px] text-[#1e2d3d]">
                      {item.start}
                    </p>
                  </div>

                  <div>
                    <p className="text-[12px] text-[#98a3b1]">Конец приема</p>
                    <p className="mt-1 text-[14px] text-[#1e2d3d]">
                      {item.end}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            {filteredOrders.length === 0 && (
              <div className="rounded-[20px] bg-white px-5 py-6 text-[14px] text-[#6f7782]">
                Ничего не найдено.
              </div>
            )}
          </div>
        </div>

        <aside className="pt-1.5">
          <div className="flex overflow-hidden rounded-[10px] border border-[#d6dee8] bg-white">
            <input
              type="text"
              placeholder="Поиск..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-11.5 flex-1 px-4 text-[14px] text-[#1e2d3d] outline-none"
            />
            <button
              type="button"
              onClick={applyFilters}
              className="flex h-11.5 w-11.5 items-center justify-center bg-[#33d10f] text-white"
            >
              🔍
            </button>
          </div>

          <div className="mt-4 rounded-[20px] bg-white px-5 py-5">
            <p className="mb-4 text-[13px] font-bold uppercase text-[#8d98a8]">
              БЮДЖЕТ
            </p>

            <div className="grid grid-cols-2 gap-3">
              <input
                type="number"
                placeholder="от"
                value={minBudget}
                onChange={(e) => setMinBudget(e.target.value)}
                className="h-10.5 rounded-[10px] border border-[#d6dee8] px-4 text-[14px] outline-none"
              />

              <input
                type="number"
                placeholder="до"
                value={maxBudget}
                onChange={(e) => setMaxBudget(e.target.value)}
                className="h-10.5 rounded-[10px] border border-[#d6dee8] px-4 text-[14px] outline-none"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={applyFilters}
            className="mt-4 inline-flex h-9.5 items-center justify-center rounded-full bg-[#33d10f] px-5 text-[13px] font-bold text-white"
          >
            Фильтр
          </button>
        </aside>
      </div>
    </section>
  );
};