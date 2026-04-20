"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { VacanciesFilters } from "./vacancies-filters";

type Vacancy = {
  id: number;
  title: string;
  company?: string;
  workType?: string;
  salary?: string;
  experience?: string;
  publishedAt?: string;
  tags?: string[];
  skills?: string[];
};

type AppliedFilters = {
  search: string;
  skills: string;
  employment: string[];
  experience: string;
  specializations: string[];
};

export const VacanciesCatalog = ({
  vacancies,
}: {
  vacancies: Vacancy[];
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [skillsValue, setSkillsValue] = useState("");
  const [selectedEmployment, setSelectedEmployment] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState("Все");
  const [selectedSpecializations, setSelectedSpecializations] = useState<string[]>([]);

  const [appliedFilters, setAppliedFilters] = useState<AppliedFilters>({
    search: "",
    skills: "",
    employment: [],
    experience: "Все",
    specializations: [],
  });

  const handleEmploymentChange = (value: string) => {
    setSelectedEmployment((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSpecializationChange = (value: string) => {
    setSelectedSpecializations((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleApply = () => {
    setAppliedFilters({
      search: searchValue.trim().toLowerCase(),
      skills: skillsValue.trim().toLowerCase(),
      employment: selectedEmployment,
      experience: selectedExperience,
      specializations: selectedSpecializations,
    });
  };

  const filteredVacancies = useMemo(() => {
    return vacancies.filter((vacancy) => {
      const title = vacancy.title?.toLowerCase() || "";
      const company = vacancy.company?.toLowerCase() || "";
      const workType = vacancy.workType || "";
      const experience = vacancy.experience || "";
      const tags = vacancy.tags || [];
      const skills = vacancy.skills || [];

      const matchesSearch =
        appliedFilters.search.length === 0 ||
        title.includes(appliedFilters.search) ||
        company.includes(appliedFilters.search);

      const matchesEmployment =
        appliedFilters.employment.length === 0 ||
        appliedFilters.employment.includes(workType);

      const matchesExperience =
        appliedFilters.experience === "Все" ||
        experience === appliedFilters.experience;

      const matchesSpecializations =
        appliedFilters.specializations.length === 0 ||
        tags.some((tag) => appliedFilters.specializations.includes(tag));

      const matchesSkills =
        appliedFilters.skills.length === 0 ||
        skills.some((skill) =>
          skill.toLowerCase().includes(appliedFilters.skills)
        );

      return (
        matchesSearch &&
        matchesEmployment &&
        matchesExperience &&
        matchesSpecializations &&
        matchesSkills
      );
    });
  }, [vacancies, appliedFilters]);

  return (
    <section className="bg-[#f3f3f3] py-5.5">
      <div className="mx-auto grid max-w-285 grid-cols-[1fr_300px] gap-4.5 px-3.75 max-[980px]:grid-cols-1">
        <div>
          <p className="mb-2.5 text-center text-[11px] text-[#8e97a4]">
            Общее количество вакансий: {filteredVacancies.length}
          </p>

          <div className="space-y-2.5">
            {filteredVacancies.length > 0 ? (
              filteredVacancies.map((vacancy) => (
                <article
                  key={vacancy.id}
                  className="rounded-xl bg-white px-4 py-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
                >
                  <p className="text-[10px] font-semibold uppercase text-[#8c94a0]">
                    {vacancy.company || "IT Market"}
                  </p>
                  <h3 className="mt-1.5 text-[20px] font-bold leading-tight text-[#1b1b1b]">
                    {vacancy.title}
                  </h3>

                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {(vacancy.tags && vacancy.tags.length > 0 ? vacancy.tags : ["IT"]).map(
                      (tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#efefef] px-2.5 py-1 text-[11px] text-[#888]"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>

                  <div className="mt-4 grid grid-cols-4 gap-4.5 text-[12px] text-[#4f4f4f] max-[700px]:grid-cols-2">
                    <div>
                      <p className="text-[#8c94a0]">Тип работы</p>
                      <p className="mt-1">{vacancy.workType || "Не указано"}</p>
                    </div>

                    <div>
                      <p className="text-[#8c94a0]">Зарплата</p>
                      <p className="mt-1">{vacancy.salary || "Договорная"}</p>
                    </div>

                    <div>
                      <p className="text-[#8c94a0]">Опыт работы</p>
                      <p className="mt-1">{vacancy.experience || "Не указано"}</p>
                    </div>

                    <div>
                      <p className="text-[#8c94a0]">Обновлено</p>
                      <p className="mt-1">{vacancy.publishedAt || "Сегодня"}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <Link
                      href={`/vacancies/${vacancy.id}`}
                      className="rounded-[10px] border border-[#d1d5db] px-3.5 py-2 text-[13px] text-[#202020]"
                    >
                      Подробнее
                    </Link>

                    <button className="rounded-[10px] bg-[#16a34a] px-3.5 py-2 text-[13px] text-white">
                      Откликнуться
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <div className="rounded-xl bg-white px-4 py-5 text-[14px] text-[#666] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
                По выбранным фильтрам вакансии не найдены.
              </div>
            )}
          </div>
        </div>

        <div className="max-[980px]:hidden">
          <VacanciesFilters
            searchValue={searchValue}
            skillsValue={skillsValue}
            selectedEmployment={selectedEmployment}
            selectedExperience={selectedExperience}
            selectedSpecializations={selectedSpecializations}
            onSearchChange={setSearchValue}
            onSkillsChange={setSkillsValue}
            onEmploymentChange={handleEmploymentChange}
            onExperienceChange={setSelectedExperience}
            onSpecializationChange={handleSpecializationChange}
            onApply={handleApply}
          />
        </div>
      </div>
    </section>
  );
};