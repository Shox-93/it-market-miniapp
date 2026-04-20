"use client";

import { create } from "zustand";
import type {
  CompanyItem,
  OrderItem,
  SpecialistItem,
  VacancyItem,
} from "../../types/admin.types"

type AdminStore = {
  orders: OrderItem[];
  vacancies: VacancyItem[];
  specialists: SpecialistItem[];
  companies: CompanyItem[];

  addOrder: (item: OrderItem) => void;
  updateOrder: (id: string, patch: Partial<OrderItem>) => void;
  deleteOrder: (id: string) => void;

  addVacancy: (item: VacancyItem) => void;
  updateVacancy: (id: string, patch: Partial<VacancyItem>) => void;
  deleteVacancy: (id: string) => void;

  addSpecialist: (item: SpecialistItem) => void;
  updateSpecialist: (id: string, patch: Partial<SpecialistItem>) => void;
  deleteSpecialist: (id: string) => void;

  addCompany: (item: CompanyItem) => void;
  updateCompany: (id: string, patch: Partial<CompanyItem>) => void;
  deleteCompany: (id: string) => void;
};

export const useAdminStore = create<AdminStore>((set) => ({
  orders: [],
  vacancies: [],
  specialists: [],
  companies: [],

  addOrder: (item) =>
    set((state) => ({
      orders: [item, ...state.orders],
    })),

  updateOrder: (id, patch) =>
    set((state) => ({
      orders: state.orders.map((item) =>
        item.id === id ? { ...item, ...patch } : item
      ),
    })),

  deleteOrder: (id) =>
    set((state) => ({
      orders: state.orders.filter((item) => item.id !== id),
    })),

  addVacancy: (item) =>
    set((state) => ({
      vacancies: [item, ...state.vacancies],
    })),

  updateVacancy: (id, patch) =>
    set((state) => ({
      vacancies: state.vacancies.map((item) =>
        item.id === id ? { ...item, ...patch } : item
      ),
    })),

  deleteVacancy: (id) =>
    set((state) => ({
      vacancies: state.vacancies.filter((item) => item.id !== id),
    })),

  addSpecialist: (item) =>
    set((state) => ({
      specialists: [item, ...state.specialists],
    })),

  updateSpecialist: (id, patch) =>
    set((state) => ({
      specialists: state.specialists.map((item) =>
        item.id === id ? { ...item, ...patch } : item
      ),
    })),

  deleteSpecialist: (id) =>
    set((state) => ({
      specialists: state.specialists.filter((item) => item.id !== id),
    })),

  addCompany: (item) =>
    set((state) => ({
      companies: [item, ...state.companies],
    })),

  updateCompany: (id, patch) =>
    set((state) => ({
      companies: state.companies.map((item) =>
        item.id === id ? { ...item, ...patch } : item
      ),
    })),

  deleteCompany: (id) =>
    set((state) => ({
      companies: state.companies.filter((item) => item.id !== id),
    })),
}));