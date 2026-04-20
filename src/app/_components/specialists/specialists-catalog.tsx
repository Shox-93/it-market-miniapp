"use client";

import { useMemo, useState } from "react";
import { specialistsCatalog } from "@/mock/specialists-catalog";
import { SpecialistsFilters } from "./specialists-filters";

export const SpecialistsCatalog = () => {
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [appliedRegions, setAppliedRegions] = useState<string[]>([]);

  const handleRegionChange = (region: string) => {
    setSelectedRegions((prev) =>
      prev.includes(region)
        ? prev.filter((item) => item !== region)
        : [...prev, region]
    );
  };

  const handleApplyFilters = () => {
    setAppliedRegions(selectedRegions);
  };

  const filteredSpecialists = useMemo(() => {
    if (appliedRegions.length === 0) {
      return specialistsCatalog;
    }

    return specialistsCatalog.filter((specialist) =>
      appliedRegions.includes(specialist.region)
    );
  }, [appliedRegions]);

  return (
    <section className="bg-[#f3f3f3] py-[22px]">
      <div className="mx-auto grid max-w-[1140px] grid-cols-[1fr_300px] gap-[18px] px-[15px] max-[980px]:grid-cols-1">
        <div className="space-y-[10px]">
          {filteredSpecialists.length > 0 ? (
            filteredSpecialists.map((specialist) => (
              <article
                key={specialist.id}
                className="rounded-[12px] bg-white px-[16px] py-[16px] shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
              >
                <div className="flex gap-[14px] max-[640px]:flex-col">
                  <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#ececec] text-[24px] text-[#a7a7a7]">
                    👤
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-[18px] font-bold leading-[1.2] text-[#1b1b1b]">
                      {specialist.name}
                    </h3>

                    <p className="mt-[2px] text-[11px] font-semibold uppercase leading-[1.4] text-[#4f6173]">
                      {specialist.position}
                    </p>

                    <p className="mt-[4px] text-[12px] text-[#7d8a96]">
                      📍 {specialist.location}
                    </p>

                    <p className="mt-[10px] text-[12px] leading-[1.55] text-[#4d4d4d]">
                      {specialist.description}
                    </p>

                    <div className="mt-[12px] flex flex-wrap gap-[6px]">
                      {specialist.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#efefef] px-[10px] py-[5px] text-[11px] leading-none text-[#777]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="rounded-[12px] bg-white px-[16px] py-[20px] text-[14px] text-[#666] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
              По выбранным регионам специалисты не найдены.
            </div>
          )}
        </div>

        <div className="max-[980px]:hidden">
          <SpecialistsFilters
            selectedRegions={selectedRegions}
            onRegionChange={handleRegionChange}
            onApply={handleApplyFilters}
          />
        </div>
      </div>
    </section>
  );
};