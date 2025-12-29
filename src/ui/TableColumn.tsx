import { Table, Image, Space, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export default function TableColumn({ data, onEdit, onDelete }) {
  if (!data || data.length === 0) return null;

  const columns = Object.keys(data[0]).map((key) => {
    if (key === "attachment") {
      return {
        title: "Attachment",
        key: "attachment",
        render: (_, record) => (
          <div style={{ display: "flex", flex: 'flexColumn', gap: 10 }}>
            <Image
              width={50}
              src={record.attachment.img}
              alt={record.attachment.name}
            />
            <div>
              <strong>{record.attachment.name}</strong>
              <div style={{ fontSize: 12 }}>
                {record.attachment.description}
              </div>
            </div>
          </div>
        ),
      };
    }

    return {
      title: key,
      dataIndex: key,
      key,
    };
  });

  columns.push({
    title: "Actions",
    key: "actions",
    render: (_, record) => (
      <Space size="middle">
        <EditOutlined
          style={{ color: "#1677ff", cursor: "pointer" }}
          onClick={() => onEdit?.(record)}
        />

        <Popconfirm
          title="Are you sure you want to delete?"
          onConfirm={() => onDelete?.(record)}
        >
          <DeleteOutlined
            style={{ color: "red", cursor: "pointer" }}
          />
        </Popconfirm>
      </Space>
    ),
  });

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey="orderId"
      bordered
    />
  );
}
