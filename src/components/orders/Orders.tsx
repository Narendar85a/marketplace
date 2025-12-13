"use client";

import { Table, Typography, Input, Button } from "antd";
import { getOrderColumns } from "@/ui/tableColumn/OrdersTable";
import { ordersData } from "@/utils/ordersData";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import "./Orders.scss";

export default function Orders() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filteredData = ordersData.filter((order) =>
    order.orderId.toLowerCase().includes(search.toLowerCase())
  );

   const handleView = (id: string) =>
    router.push(`/orders/orderListPage/${id}`);

  return (
    <div className="orders">
      <div className="orders-div1">
        <Typography className="orders-typo">Orders Table</Typography>
        <div className="orders-div2">
          <Input placeholder="Search..." prefix={<SearchOutlined />} value={search} onChange={e => setSearch(e.target.value)} />
          <Button type="primary" icon={<PlusOutlined />}>
            Add New Item
          </Button>
        </div>
      </div>

      <Table
        columns={getOrderColumns(handleView)}
        dataSource={filteredData}
        rowKey="orderId"
        bordered
      />
    </div>
  );
}
