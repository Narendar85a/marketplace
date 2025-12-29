import { ColumnsType } from "antd/es/table";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { DeliveryType, Attachment } from "@/types/types";

export const getDeliveryColumns = (onView?: (orderId: string) => void): ColumnsType<DeliveryType> => [
  {
    title: "Order ID",
    dataIndex: "orderId",
    key: "orderId",
  },
  {
    title: "User ID",
    dataIndex: "userId",
    key: "userId",
  },
  {
    title: "Restaurant Name",
    dataIndex: "restaurantName",
    key: "restaurantName",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Total Amount",
    dataIndex: "totalAmount",
    key: "totalAmount",
    render: (amount) => `₹ ${amount}`,
  },
  {
    title: "Delivery Fee",
    dataIndex: "deliveryFee",
    key: "deliveryFee",
    render: (fee) => `₹ ${fee}`,
  },
  {
    title: "Delivery Time (min)",
    dataIndex: "deliveryTime",
    key: "deliveryTime",
  },
  {
    title: "Items",
    dataIndex: "items",
    key: "items",
  },
  {
    title: "Delivery Address",
    dataIndex: "deliveryAddress",
    key: "deliveryAddress",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Updated At",
    dataIndex: "updatedAt",
    key: "updatedAt",
  },
  {
    title: "Attachment",
    dataIndex: "attachment",
    key: "attachment",
    render: (attach: Attachment) => (
      <div className="flex flex-col items-center gap-3">
        <p className="font-semibold">{attach.name}</p>
        <img
          src={attach.img}
          alt={attach.name}
          className="w-10 h-10 rounded object-cover"
        />
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {attach.description}
        </p>
      </div>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <div className="flex gap-4 text-lg">
        <EyeOutlined
          style={{ color: "#10b981", cursor: "pointer" }}
          onClick={() => onView && onView(record.orderId)}
        />
        <EditOutlined
          style={{ color: "#3b82f6", cursor: "pointer" }}
          onClick={() => console.log("Edit", record.orderId)}
        />
        <DeleteOutlined
          style={{ color: "#ef4444", cursor: "pointer" }}
          onClick={() => console.log("Delete", record.orderId)}
        />
      </div>
    ),
  },
];