import { ColumnsType } from "antd/es/table";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { TradeType, Attachment } from "@/types/types";

export const getTradeColumns = (onView?: (tradeId: string) => void): ColumnsType<TradeType> => [
  {
    title: "Trade ID",
    dataIndex: "tradeId",
    key: "tradeId",
  },
  {
    title: "User ID",
    dataIndex: "userId",
    key: "userId",
  },
  {
    title: "Stock Symbol",
    dataIndex: "stockSymbol",
    key: "stockSymbol",
  },
  {
    title: "Trade Type",
    dataIndex: "tradeType",
    key: "tradeType",
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
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Market Price",
    dataIndex: "marketPrice",
    key: "marketPrice",
    render: (price) => `₹ ${price}`,
  },
  {
    title: "Executed At",
    dataIndex: "executedAt",
    key: "executedAt",
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
          onClick={() => onView && onView(record.tradeId)}
        />
        <EditOutlined
          style={{ color: "#3b82f6", cursor: "pointer" }}
          onClick={() => console.log("Edit", record.tradeId)}
        />
        <DeleteOutlined
          style={{ color: "#ef4444", cursor: "pointer" }}
          onClick={() => console.log("Delete", record.tradeId)}
        />
      </div>
    ),
  },
];