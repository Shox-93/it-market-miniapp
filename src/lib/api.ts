const API_URL = "http://localhost:8000";

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

export const getOrder = async (id: string) => {
  const res = await fetch(`${API_URL}/api/v1/orders/${id}`);

  if (!res.ok) {
    throw new Error("Ошибка загрузки заказа");
  }

  return res.json();
};

export async function getOrders() {
  const response = await fetch(`${API_URL}/api/v1/orders/`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Не удалось получить заказы");
  }

  return response.json();
}

export async function getCompanies(search?: string) {
  const url = search
    ? `${API_URL}/api/v1/companies/?search=${encodeURIComponent(search)}`
    : `${API_URL}/api/v1/companies/`;

  const response = await fetch(url, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Не удалось получить компании");
  }

  return response.json();
}

export async function getCompany(id: string) {
  const response = await fetch(`${API_URL}/api/v1/companies/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Не удалось получить компанию");
  }

  return response.json();
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
  const response = await fetch(`${API_URL}/api/v1/vacancies/`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Не удалось получить вакансии");
  }

  const data = await response.json();

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

export async function getSpecialists() {
  const response = await fetch(`${API_URL}/api/v1/specialists/`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Не удалось получить специалистов");
  }

  return response.json();
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
  const response = await fetch(`${API_URL}/api/v1/vacancies/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Не удалось получить вакансию");
  }

  const item = await response.json();

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