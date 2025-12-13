"use client";

import { Card, Statistic, Table } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { Area, Column, Pie } from "@ant-design/plots";

// ======================
// Mock Data
// ======================
const salesData = [
  { month: "Jan", value: 12000 },
  { month: "Feb", value: 14000 },
  { month: "Mar", value: 9000 },
  { month: "Apr", value: 16000 },
  { month: "May", value: 20000 },
];

const ordersData = [
  { type: "Electronics", orders: 230 },
  { type: "Clothes", orders: 150 },
  { type: "Grocery", orders: 310 },
  { type: "Sports", orders: 90 },
];

const pieData = [
  { category: "Completed", value: 68 },
  { category: "Pending", value: 20 },
  { category: "Cancelled", value: 12 },
];

const recentOrders = [
  {
    key: "1",
    orderId: "ORD1234",
    customer: "John Doe",
    amount: "₹ 1500",
    status: "Completed",
  },
  {
    key: "2",
    orderId: "ORD1235",
    customer: "Asha",
    amount: "₹ 2100",
    status: "Pending",
  },
  {
    key: "3",
    orderId: "ORD1236",
    customer: "Kiran",
    amount: "₹ 950",
    status: "Cancelled",
  },
];

// ======================
// Column Config
// ======================
const ordersColumns = [
  { title: "Order ID", dataIndex: "orderId", key: "orderId" },
  { title: "Customer", dataIndex: "customer", key: "customer" },
  { title: "Amount", dataIndex: "amount", key: "amount" },
  { title: "Status", dataIndex: "status", key: "status" },
];

// ======================
// Charts Config
// ======================
const salesConfig = {
  data: salesData,
  xField: "month",
  yField: "value",
  smooth: true,
  line: { color: "#00A67E" },
  areaStyle: { fill: "rgba(0, 166, 126, 0.4)" },
};

const ordersConfig = {
  data: ordersData,
  xField: "type",
  yField: "orders",
  color: "#3b82f6",
};

const pieConfig = {
  data: pieData,
  angleField: "value",
  colorField: "category",
  radius: 1,
  label: {
    text: "value",
    style: { fontSize: 14, fontWeight: 600 },
  },
};

// ======================
// Component
// ======================
export default function EcommerceDashboard() {
  return (
    <div className="p-6 space-y-6">

      {/* ====================  Top Stats  ==================== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <Card>
          <Statistic
            title="Total Sales"
            value={120000}
            precision={2}
            prefix="₹"
            valueStyle={{ color: "#00A67E" }}
            suffix={<ArrowUpOutlined />}
          />
        </Card>

        <Card>
          <Statistic
            title="Total Orders"
            value={530}
            valueStyle={{ color: "#3b82f6" }}
            suffix={<ArrowUpOutlined />}
          />
        </Card>

        <Card>
          <Statistic
            title="Cancelled"
            value={32}
            valueStyle={{ color: "#ef4444" }}
            suffix={<ArrowDownOutlined />}
          />
        </Card>
      </div>

      {/* ====================  Charts  ==================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Sales Area Chart */}
        <Card title="Sales Overview">
          <Area {...salesConfig} />
        </Card>

        {/* Orders Column Chart */}
        <Card title="Orders Category Breakdown">
          <Column {...ordersConfig} />
        </Card>
      </div>

      {/* ====================  Pie Chart  ==================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Order Status Distribution">
          <Pie {...pieConfig} />
        </Card>
      </div>

      {/* ====================  Table  ==================== */}
      <Card title="Recent Orders">
        <Table
          columns={ordersColumns}
          dataSource={recentOrders}
          pagination={{ pageSize: 5 }}
        />
      </Card>

    </div>
  );
}
