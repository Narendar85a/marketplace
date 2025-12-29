"use client";

import { Table, Typography, Input, Button } from "antd";
import { getTradeColumns } from "@/ui/tableColumn/TradeColumn";
import { tradesData } from "@/utils/tradeData";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

export default function Trade() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filteredData = tradesData.filter((item) =>
      item.tradeId.toLowerCase().includes(search.toLowerCase())
    );

   const handleView = (id: string) =>
    router.push(`/orders/orderListPage/${id}`);

  return (
    <div className="orders">
      <div className="orders-div1">
        <Typography className="orders-typo">Trade Table</Typography>
        <div className="orders-div2">
          <Input placeholder="Search..." prefix={<SearchOutlined />} value={search} onChange={e => setSearch(e.target.value)} />
          <Button type="primary" icon={<PlusOutlined />}>
            Add New Item
          </Button>
        </div>
      </div>

      <Table
        columns={getTradeColumns(handleView)}
        dataSource={filteredData}
        rowKey="tradeId"
        bordered
      />
    </div>
  );
}
