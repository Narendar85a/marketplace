import { OrderType } from "@/types/types";


export const ordersData: OrderType[] = [
  {
    orderId: "ORD-1001",
    userId: "USR-501",
    status: "Delivered",
    totalAmount: 1299,
    items: 3,
    shippingAddress: "Hyderabad, Telangana",
    createdAt: "2025-01-18",
    updatedAt: "2025-01-19",
    attachment: {
      name: "Product Image",
      img: "https://via.placeholder.com/100",
      description: "Sample product image",
    },
  },
  {
    orderId: "ORD-1002",
    userId: "USR-502",
    status: "Shipped",
    totalAmount: 2499,
    items: 5,
    shippingAddress: "Bangalore, Karnataka",
    createdAt: "2025-01-15",
    updatedAt: "2025-01-16",
    attachment: {
      name: "Invoice",
      img: "https://via.placeholder.com/100",
      description: "Invoice PDF snapshot",
    },
  },
  {
    orderId: "ORD-1003",
    userId: "USR-503",
    status: "Pending",
    totalAmount: 1799,
    items: 2,
    shippingAddress: "Chennai, Tamil Nadu",
    createdAt: "2025-01-20",
    updatedAt: "2025-01-21",
    attachment: {
      name: "Product Image",
      img: "https://via.placeholder.com/100",
      description: "Sample product photo",
    },
  },
  {
    orderId: "ORD-1004",
    userId: "USR-504",
    status: "Cancelled",
    totalAmount: 899,
    items: 1,
    shippingAddress: "Mumbai, Maharashtra",
    createdAt: "2025-01-10",
    updatedAt: "2025-01-12",
    attachment: {
      name: "Invoice",
      img: "https://via.placeholder.com/100",
      description: "Invoice PDF snapshot",
    },
  },
];