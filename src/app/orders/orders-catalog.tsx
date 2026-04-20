import { OrdersSection } from "../_components/orders-section";

type Order = {
  id: number;
  title: string;
  company?: string;
  customerType?: string;
  customer_type?: string;
  budget?: string;
  start?: string;
  end?: string;
  start_date?: string;
  end_date?: string;
  tags?: string[];
};

type OrdersCatalogProps = {
  orders: Order[];
};

export const OrdersCatalog = ({ orders }: OrdersCatalogProps) => {
  return <OrdersSection orders={orders} />;
};