"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "antd";

import {
  DashboardOutlined,
  DatabaseOutlined,
  ShoppingCartOutlined,
  GiftOutlined,
  FileDoneOutlined,
  ClusterOutlined,
  WalletOutlined,
} from "@ant-design/icons";

import "./Navbar.scss";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    {
      key: "/",
      icon: <DashboardOutlined />,
      label: <Link href="/">Dashboard</Link>,
    },
    {
      key: "/inventory",
      icon: <DatabaseOutlined />,
      label: <Link href="/inventory">Inventory</Link>,
    },
    {
      key: "/orders",
      icon: <ShoppingCartOutlined />,
      label: <Link href="/orders">Orders</Link>,
    },
    {
      key: "/packages",
      icon: <GiftOutlined />,
      label: <Link href="/packages">Packages</Link>,
    },
    {
      key: "/packagesOrders",
      icon: <FileDoneOutlined />,
      label: <Link href="/packagesOrders">Packages Orders</Link>,
    },
    {
      key: "/dynamicFlows",
      icon: <ClusterOutlined />,
      label: <Link href="/dynamicFlows">Dynamic Flows</Link>,
    },
    {
      key: "/accounts",
      icon: <WalletOutlined />,
      label: <Link href="/accounts">Accounts</Link>,
    },
  ];

  return (
    <Menu
      mode="inline"
      selectedKeys={[pathname]}
      items={navItems}
      className="navbar-menu"
    />
  );
}
