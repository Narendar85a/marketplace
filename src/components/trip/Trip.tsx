"use client";

import { Table, Typography, Input, Button } from "antd";
import { getTripColumns } from "@/ui/tableColumn/TripColumn";
import { tripsData } from "@/utils/tripData";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

export default function Trip() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filteredData = tripsData.filter((item) =>
    item.tripId.toLowerCase().includes(search.toLowerCase())
  );

   const handleView = (id: string) =>
    router.push(`/orders/orderListPage/${id}`);

  return (
    <div className="orders">
      <div className="orders-div1">
        <Typography className="orders-typo">Delivery Table</Typography>
        <div className="orders-div2">
          <Input placeholder="Search..." prefix={<SearchOutlined />} value={search} onChange={e => setSearch(e.target.value)} />
          <Button type="primary" icon={<PlusOutlined />}>
            Add New Item
          </Button>
        </div>
      </div>

      <Table
        columns={getTripColumns(handleView)}
        dataSource={filteredData}
        rowKey="tripId"
        bordered
      />
    </div>
  );
}
