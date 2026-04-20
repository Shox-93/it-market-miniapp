"use client";

import { Specialist } from "@/lib/api";

type SpecialistsCatalogProps = {
  specialists: Specialist[];
};

export const SpecialistsCatalog = ({
  specialists,
}: SpecialistsCatalogProps) => {
  return (
    <section className="bg-[#f3f3f3] py-5.5">
      <div className="mx-auto max-w-285 px-3.75">
        <div className="space-y-2.5">
          {specialists.length > 0 ? (
            specialists.map((specialist) => (
              <article
                key={specialist.id}
                className="rounded-[12px] bg-white px-4 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
              >
                <div className="flex gap-3.5 max-[640px]:flex-col">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#ececec] text-[24px] text-[#a7a7a7]">
                    👤
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-[18px] font-bold leading-[1.2] text-[#1b1b1b]">
                      {specialist.fullName}
                    </h3>

                    <p className="mt-0.5 text-[11px] font-semibold uppercase leading-[1.4] text-[#4f6173]">
                      {specialist.role}
                    </p>

                    <p className="mt-2.5 text-[12px] leading-[1.55] text-[#4d4d4d]">
                      {specialist.about || "Описание отсутствует"}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {specialist.skills.length > 0 ? (
                        specialist.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-[#efefef] px-2.5 py-1.25 text-[11px] leading-none text-[#777]"
                          >
                            {skill}
                          </span>
                        ))
                      ) : (
                        <span className="rounded-full bg-[#efefef] px-2.5 py-1.25 text-[11px] leading-none text-[#777]">
                          Навыки не указаны
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="rounded-[12px] bg-white px-4 py-5 text-[14px] text-[#666] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
              Специалисты пока не найдены.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};