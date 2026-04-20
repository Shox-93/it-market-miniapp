import { companyCategories } from "../../mock/company-categories";

export const CompaniesCategories = () => {
  return (
    <section className="bg-[#f3f3f3] pt-7 pb-10">
      <div className="mx-auto max-w-285 px-3.75">
        <div className="grid grid-cols-4 gap-x-6.5 gap-y-10.5">
          {companyCategories.map((category) => (
            <div key={category.title}>
              <div className="mb-2.5 border-b border-[#39b54a] pb-1.25">
                <h3 className="text-[18px] text-[#202020] font-semibold">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-2">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between text-[14px]"
                  >
                    <span>{item.name}</span>
                    <span className="text-[#7a7a7a]">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};