"use client";

import { Typography, Input, Button } from "antd";
import { useState } from "react";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import TableColumn from "@/ui/TableColumn";
import { deliveriesData } from "@/utils/deliveryData";
import { tradesData } from "@/utils/tradeData";
import { tripsData } from "@/utils/tripData";

export default function Delivery() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("deliveriesData");

  const tableConfig = {
    deliveriesData: {
      title: "Delivery Table",
      data: deliveriesData,
    },
    tradesData: {
      title: "Trade Table",
      data: tradesData,
    },
    tripsData: {
      title: "Trip Table",
      data: tripsData,
    },
  };

  const { title, data } = tableConfig[type];

  return (
    <div className="orders">
      <div>
        <Button 
        type={type === "deliveriesData" ? "primary" : "default"}
        onClick={() => setType("deliveriesData")}
        >
          Delivery Table
        </Button>

        <Button
        type={type === "tradesData" ? "primary" : "default"} 
        onClick={() => setType("tradesData")}
        >
          Trade Table
        </Button>

        <Button
        type={type === "tripsData" ? "primary" : "default"} 
        onClick={() => setType("tripsData")}
        >
          Trip Table
        </Button>
      </div>

      <div className="orders-div1">
        <Typography className="orders-typo">
          {title}
        </Typography>

        <div className="orders-div2">
          <Input
            placeholder="Search..."
            prefix={<SearchOutlined />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button type="primary" icon={<PlusOutlined />}>
            Add New Item
          </Button>
        </div>
      </div>

      <TableColumn data={data} />
    </div>
  );
}
