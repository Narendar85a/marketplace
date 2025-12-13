import { ColumnsType } from "antd/es/table";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { InventoryType } from "@/types/types";

export const inventoryColumns = (
  onEdit: (record: InventoryType) => void,
  onDelete: (id: string) => void
): ColumnsType<InventoryType> => [
  {
    title: "Product ID",
    dataIndex: "productId",
    key: "productId",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    ellipsis: true,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (amount: number) => `₹ ${amount}`,
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Stock",
    dataIndex: "stock",
    key: "stock",
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
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (url: string) => (
      <img
        src={url}
        alt="product"
        className="w-16 h-16 object-cover rounded-md"
      />
    ),
  },
  {
    title: "Initial Scheme",
    dataIndex: "productSchemaInitial",
    key: "productSchemaInitial",
  },
  {
    title: "Current Scheme",
    dataIndex: "productSchemeCurrent",
    key: "productSchemeCurrent",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <div className="flex gap-4 text-lg">
        <EditOutlined
          style={{ color: "#3b82f6", cursor: "pointer" }}
          onClick={() => onEdit(record)}
        />
        <DeleteOutlined
          style={{ color: "#ef4444", cursor: "pointer" }}
          onClick={() => onDelete(record.productId)}
        />
      </div>
    ),
  },
];
