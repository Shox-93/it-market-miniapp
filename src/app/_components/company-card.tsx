import type { Company } from "@/types/company.type";
type CompanyCardProps = {
  company: Company;
};
export const CompanyCard = ({ company }: CompanyCardProps) => {
  return (
    <article className="min-h-119.5 rounded-[22px] bg-white px-4 pb-4.5 pt-4 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
      <div className="flex items-start gap-3">
        <div className="relative h-14.5 w-14.5 shrink-0 overflow-hidden rounded-sm bg-[#d9d9d9]">
          <div className="absolute left-1/2 top-2.5 h-4.5 w-4.5 -translate-x-1/2 rounded-full bg-white" />
          <div className="absolute bottom-1.5 left-1/2 h-7 w-8.5 -translate-x-1/2 rounded-t-2xl bg-white" />
        </div>
        <div className="flex-1">
          <h3 className="max-w-52.5 text-[15px] font-extrabold uppercase leading-[120%] text-[#101828]">
            {company.name}
          </h3>
          <p className="mt-1 text-[11px] leading-[145%] text-[#c4c4c4]">
            {company.legalForm}
          </p>
          <p className="mt-1.5 text-[11px] leading-[150%] text-[#1f2937]">
            {company.address}
          </p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {company.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#e8e8e8] px-2.25 py-1 text-[10px] font-bold uppercase leading-none text-white"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-4 text-[13px] leading-[160%] text-[#1f2937]">
        {company.description}
      </p>
    </article>
  );
};
