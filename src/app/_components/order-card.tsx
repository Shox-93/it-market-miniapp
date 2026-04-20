import Link from "next/link";

type Order = {
  id: number;
  title: string;
  company?: string;
  customerType?: string;
  budget?: string;
  start?: string;
  end?: string;
  tags?: string[];
};

type OrderCardProps = {
  order: Order;
};

export const OrderCard = ({ order }: OrderCardProps) => {
  return (
    <Link href={`/orders/${order.id}`} className="block">
      <article className="rounded-[22px] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
        <p className="text-[13px] uppercase text-[#b7b7b7]">
          {order.company || "Компания не указана"}
        </p>

        <p className="text-[12px] text-[#b7b7b7]">
          {order.customerType || "Тип не указан"}
        </p>

        <h3 className="mt-3 text-[18px] font-bold text-[#111827]">
          {order.title || "Без названия"}
        </h3>

        {order.tags && order.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {order.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#f3f4f6] px-3 py-1 text-[12px] text-[#444]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10">
          <div>
            <p className="text-[13px] text-[#b7b7b7]">Бюджет</p>
            <p className="mt-1 text-[16px] text-[#111827]">
              {order.budget || "-"}
            </p>
          </div>

          <div>
            <p className="text-[13px] text-[#b7b7b7]">Начало проекта</p>
            <p className="mt-1 text-[16px] text-[#111827]">
              {order.start || "-"}
            </p>
          </div>

          <div>
            <p className="text-[13px] text-[#b7b7b7]">Конец проекта</p>
            <p className="mt-1 text-[16px] text-[#111827]">
              {order.end || "-"}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};