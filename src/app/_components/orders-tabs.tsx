"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function OrdersTabs() {
  const pathname = usePathname();

  const isOrders = pathname === "/orders";
  const isGov = pathname === "/orders/government";

  return (
    <div className="flex border-b border-[#dcdcdc]">
      <Link
        href="/orders"
        className={`px-6 py-3 text-[14px] font-medium border border-b-0 ${
          isOrders
            ? "relative top-px bg-white text-black border-[#dcdcdc]"
            : "bg-[#f3f3f3] text-[#2f6fd6] border-[#dcdcdc]"
        }`}
      >
        Заказы
      </Link>

      <Link
        href="/orders/government"
        className={`px-6 py-3 text-[14px] font-medium border border-b-0 ${
          isGov
            ? "relative top-px bg-white text-black border-[#dcdcdc]"
            : "bg-[#f3f3f3] text-[#2f6fd6] border-[#dcdcdc]"
        }`}
      >
        Тендеры
      </Link>
    </div>
  );
}