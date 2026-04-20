const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export type Vacancy = {
  id: number;
  title: string;
  company: string;
  salary: string;
  workFormat: string;
  experience: string;
  updatedAt: string;
  description?: string;
  specializations?: string[];
  skills?: string[];
};

export type Order = {
  id: number;
  title: string;
  company: string;
  customerType: string;
  budget: string;
  start: string;
  end: string;
  tags: string[];
};

export type Company = {
  id: number;
  name: string;
  description: string;
  industry: string;
  location: string;
};

export type Specialist = {
  id: number;
  fullName: string;
  role: string;
  skills: string[];
  about: string;
};

async function fetchJson(url: string) {
  const response = await fetch(url, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Ошибка запроса: ${response.status}`);
  }

  return response.json();
}

export const getOrder = async (id: string): Promise<Order> => {
  const item = await fetchJson(`${API_URL}/api/v1/orders/${id}`);

  return {
    id: item.id,
    title: item.title ?? "Без названия",
    company: item.company ?? "Не указано",
    customerType: item.customerType ?? "Не указано",
    budget: item.budget ?? "Договорная",
    start: item.start ?? "-",
    end: item.end ?? "-",
    tags: item.tags ?? [],
  };
};

export async function getOrders(): Promise<Order[]> {
  const data = await fetchJson(`${API_URL}/api/v1/orders/`);

  return data.map((item: any) => ({
    id: item.id,
    title: item.title ?? "Без названия",
    company: item.company ?? "Не указано",
    customerType: item.customerType ?? "Не указано",
    budget: item.budget ?? "Договорная",
    start: item.start ?? "-",
    end: item.end ?? "-",
    tags: item.tags ?? [],
  }));
}

export async function getCompanies(search?: string): Promise<Company[]> {
  const url = search
    ? `${API_URL}/api/v1/companies/?search=${encodeURIComponent(search)}`
    : `${API_URL}/api/v1/companies/`;

  const data = await fetchJson(url);

  return data.map((item: any) => ({
    id: item.id,
    name: item.name ?? "Без названия",
    description: item.description ?? "",
    industry: item.industry ?? "Не указано",
    location: item.location ?? "Не указано",
  }));
}

export async function getCompany(id: string): Promise<Company> {
  const item = await fetchJson(`${API_URL}/api/v1/companies/${id}`);

  return {
    id: item.id,
    name: item.name ?? "Без названия",
    description: item.description ?? "",
    industry: item.industry ?? "Не указано",
    location: item.location ?? "Не указано",
  };
}

export async function createCompany(name: string) {
  const response = await fetch(`${API_URL}/api/v1/companies/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) {
    throw new Error("Не удалось создать компанию");
  }

  return response.json();
}

export async function deleteCompany(id: number) {
  const response = await fetch(`${API_URL}/api/v1/companies/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Ошибка удаления компании");
  }

  return response.json();
}

export async function updateCompany(id: number, name: string) {
  const response = await fetch(`${API_URL}/api/v1/companies/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) {
    throw new Error("Ошибка обновления компании");
  }

  return response.json();
}

export async function deleteOrder(id: number) {
  const response = await fetch(`${API_URL}/api/v1/orders/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Ошибка удаления заказа");
  }

  return response.json();
}

export async function updateOrder(id: number, title: string) {
  const response = await fetch(`${API_URL}/api/v1/orders/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });

  if (!response.ok) {
    throw new Error("Ошибка обновления заказа");
  }

  return response.json();
}

export async function getVacancies(): Promise<Vacancy[]> {
  const data = await fetchJson(`${API_URL}/api/v1/vacancies/`);

  return data.map((item: any) => ({
    id: item.id,
    title: item.title ?? "Без названия",
    company: item.company ?? "Не указано",
    salary:
      item.salary_from && item.salary_to
        ? `${item.salary_from} $ - ${item.salary_to} $`
        : item.salary_from
          ? `от ${item.salary_from} $`
          : item.salary_to
            ? `до ${item.salary_to} $`
            : "Договорная",
    workFormat: item.employment_type ?? "Не указано",
    experience: item.experience ?? "Не указано",
    updatedAt: item.updated_at ?? "Сегодня",
    description: item.description ?? "",
    specializations: item.specializations ?? [],
    skills: item.skills ?? [],
  }));
}

export async function deleteVacancy(id: number) {
  const response = await fetch(`${API_URL}/api/v1/vacancies/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Ошибка удаления вакансии");
  }

  return response.json();
}

export async function updateVacancy(
  id: number,
  data: {
    title?: string;
    salary_from?: number;
    salary_to?: number;
    employment_type?: string;
    experience?: string;
    company?: string;
    description?: string;
    specializations?: string[];
    skills?: string[];
  }
) {
  const response = await fetch(`${API_URL}/api/v1/vacancies/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Ошибка обновления вакансии");
  }

  return response.json();
}

export async function registerUser(email: string, password: string) {
  const response = await fetch(`${API_URL}/api/v1/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Ошибка регистрации");
  }

  return response.json();
}

export async function loginUser(email: string, password: string) {
  const response = await fetch(`${API_URL}/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Ошибка входа");
  }

  const data = await response.json();
  localStorage.setItem("token", data.access_token || "");
  return data;
}

export async function getSpecialists(): Promise<Specialist[]> {
  const data = await fetchJson(`${API_URL}/api/v1/specialists/`);

  return data.map((item: any) => ({
    id: item.id,
    fullName: item.fullName ?? "Без имени",
    role: item.role ?? "Не указано",
    skills: item.skills ?? [],
    about: item.about ?? "",
  }));
}

export async function deleteSpecialist(id: number) {
  const response = await fetch(`${API_URL}/api/v1/specialists/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Ошибка удаления специалиста");
  }

  return response.json();
}

export async function updateSpecialist(
  id: number,
  fullName: string,
  role: string
) {
  const response = await fetch(`${API_URL}/api/v1/specialists/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fullName, role }),
  });

  if (!response.ok) {
    throw new Error("Ошибка обновления специалиста");
  }

  return response.json();
}

export async function getVacancy(id: string): Promise<Vacancy> {
  const item = await fetchJson(`${API_URL}/api/v1/vacancies/${id}`);

  return {
    id: item.id,
    title: item.title ?? "Без названия",
    company: item.company ?? "Не указано",
    salary:
      item.salary_from && item.salary_to
        ? `${item.salary_from} $ - ${item.salary_to} $`
        : item.salary_from
          ? `от ${item.salary_from} $`
          : item.salary_to
            ? `до ${item.salary_to} $`
            : "Договорная",
    workFormat: item.employment_type ?? "Не указано",
    experience: item.experience ?? "Не указано",
    updatedAt: item.updated_at ?? "Сегодня",
    description: item.description ?? "",
    specializations: item.specializations ?? [],
    skills: item.skills ?? [],
  };
}

export const applyOrder = async (id: string) => {
  const res = await fetch(`${API_URL}/api/v1/orders/${id}/apply`, {
    method: "POST",
  });

  if (!res.ok) {
    throw new Error("Ошибка отклика");
  }

  return res.json();
};

export const getApplications = async () => {
  const res = await fetch(`${API_URL}/api/v1/applications/`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Ошибка загрузки откликов");
  }

  return res.json();
};

export const getApplication = async (id: string) => {
  const res = await fetch(`${API_URL}/api/v1/applications/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Ошибка загрузки отклика");
  }

  return res.json();
};