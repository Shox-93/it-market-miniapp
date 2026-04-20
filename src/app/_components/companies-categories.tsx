import { Company } from "@/lib/api";

type CompaniesCategoriesProps = {
  companies: Company[];
};

export const CompaniesCategories = ({
  companies,
}: CompaniesCategoriesProps) => {
  const groupedCompanies = companies.reduce<Record<string, Company[]>>(
    (acc, company) => {
      const key = company.industry || "Не указано";

      if (!acc[key]) {
        acc[key] = [];
      }

      acc[key].push(company);
      return acc;
    },
    {}
  );

  const categories = Object.entries(groupedCompanies).map(
    ([title, items]) => ({
      title,
      items,
    })
  );

  return (
    <section className="bg-[#f3f3f3] pt-7 pb-10">
      <div className="mx-auto max-w-285 px-3.75">
        {categories.length > 0 ? (
          <div className="grid grid-cols-4 gap-x-6.5 gap-y-10.5 max-[1100px]:grid-cols-3 max-[820px]:grid-cols-2 max-[560px]:grid-cols-1">
            {categories.map((category) => (
              <div key={category.title}>
                <div className="mb-2.5 border-b border-[#39b54a] pb-1.25">
                  <h3 className="text-[18px] font-semibold text-[#202020]">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between gap-3 text-[14px]"
                    >
                      <span className="text-[#202020]">{item.name}</span>
                      <span className="shrink-0 text-[#7a7a7a]">
                        {item.location}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-[12px] bg-white px-4 py-5 text-[14px] text-[#666] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
            Компании пока не найдены.
          </div>
        )}
      </div>
    </section>
  );
};