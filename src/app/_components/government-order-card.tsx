type GovernmentOrderCardProps = {
  organization: string;
  type: string;
  title: string;
  budget: string;
  start: string;
  end: string;
};

export const GovernmentOrderCard = ({
  organization,
  type,
  title,
  budget,
  start,
  end,
}: GovernmentOrderCardProps) => {
  return (
    <article className="rounded-2xl bg-white px-5 py-4">
      <p className="text-[13px] font-bold uppercase text-[#9a9a9a]">
        {organization}
      </p>

      <p className="mt-1 text-[10px] uppercase text-[#9a9a9a]">
        {type}
      </p>

      <h3 className="mt-4 text-[22px] font-extrabold text-[#1e2d3d]">
        {title}
      </h3>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div>
          <p className="text-[12px] text-[#8f9baa]">Бюджет</p>
          <p className="mt-1 text-[14px] text-[#1e2d3d]">{budget}</p>
        </div>

        <div>
          <p className="text-[12px] text-[#8f9baa]">Начало приема</p>
          <p className="mt-1 text-[14px] text-[#1e2d3d]">{start}</p>
        </div>

        <div>
          <p className="text-[12px] text-[#8f9baa]">Конец приема</p>
          <p className="mt-1 text-[14px] text-[#1e2d3d]">{end}</p>
        </div>
      </div>
    </article>
  );
};