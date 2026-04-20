export type OrderItem = {
  id: string;
  title: string;
  company: string;
  budget: string;
  start: string;
  end: string;
  category?: string;
};

export type VacancyItem = {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  level?: string;
};

export type SpecialistItem = {
  id: string;
  fullName: string;
  role: string;
  experience: string;
  skills: string[];
};

export type CompanyItem = {
  id: string;
  name: string;
  description: string;
  website?: string;
  location?: string;
};