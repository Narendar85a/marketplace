'use client';

import {useState} from 'react'
import { Table, Typography, Input, Button } from "antd";
import { getOrderColumns } from "@/ui/tableColumn/OrdersTable";
import { ordersData } from "@/utils/ordersData";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import './PackagesOrders.scss'

export default function PackagesOrders() {
    const [search, setSearch] = useState("");
  
  return (
     <div className="p-orders">
      <div className="p-orders-div1">
        <Typography className="p-orders-typo">Packages Orders Table</Typography>
        <div className="p-orders-div2">
          <Input placeholder="Search..." prefix={<SearchOutlined />} value={search} onChange={e => setSearch(e.target.value)} />
          <Button type="primary" icon={<PlusOutlined />}>
            Add New Item
          </Button>
        </div>
      </div>

      <Table
        columns={getOrderColumns()}
        dataSource={ordersData}
        rowKey="orderId"
        bordered
      />
    </div>
  )
}
