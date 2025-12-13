import { useState, useEffect } from "react";
import { Table, Button, Drawer, Form, Input, InputNumber } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { InventoryType } from "@/types/types";
import { inventoryColumns } from "@/ui/tableColumn/InventoryTable";
import { getData, addItem, updateItem, deleteItem } from "@/utils/storageHealper";
import './InvPacTableData.scss'
import { DataTableProps } from '@/types/types'



export default function DataTable({ title, storageKey, defaultItems }: DataTableProps) {
  const [data, setData] = useState<InventoryType[]>([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<InventoryType | null>(null);
  const [form] = Form.useForm();
  const [search, setSearch] = useState("");

  // Load data from localStorage or defaultItems
  const loadData = () => {
    const items = getData(storageKey);
    if (items.length === 0) {
      defaultItems.forEach(item => addItem(storageKey, item));
      setData(defaultItems);
    } else {
      setData(items);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAdd = () => {
    setEditing(null);
    form.resetFields();
    setOpen(true);
  };

  const handleEdit = (record: InventoryType) => {
    setEditing(record);
    form.setFieldsValue(record);
    setOpen(true);
  };

  const handleDelete = (id: string) => {
    deleteItem(storageKey, id);
    loadData();
  };

  const onFinish = (values: any) => {
    if (editing) {
      updateItem(storageKey, editing.productId, values);
    } else {
      addItem(storageKey, {
        productId: "", 
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        ...values,
      });
    }
    loadData();
    setOpen(false);
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
   <div className="data-table-wrapper">
  <div className="data-table-header">
    <h2 className="table-title">{title}</h2>
    <div className="table-actions">
      <Input placeholder="Search..." prefix={<SearchOutlined />} value={search} onChange={e => setSearch(e.target.value)} />
      <Button icon={<PlusOutlined />} type="primary" onClick={handleAdd}>
        Add New Items
      </Button>
    </div>
  </div>

      <Table
        columns={inventoryColumns(handleEdit, handleDelete)}
        dataSource={filteredData}
        rowKey="productId"
        bordered
      />

      <Drawer
        title={editing ? "Edit Item" : "Add Item"}
        open={open}
        onClose={() => setOpen(false)}
        width={400}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <Input.TextArea rows={3} />
          </Form.Item>

          <Form.Item name="price" label="Price" rules={[{ required: true }]}>
            <InputNumber className="w-full" />
          </Form.Item>

          <Form.Item name="category" label="Category">
            <Input />
          </Form.Item>

          <Form.Item name="stock" label="Stock">
            <InputNumber className="w-full" />
          </Form.Item>

          <Form.Item name="image" label="Image URL">
            <Input />
          </Form.Item>

          <Form.Item name="productSchemaInitial" label="Initial Scheme">
            <Input />
          </Form.Item>

          <Form.Item name="productSchemeCurrent" label="Current Scheme">
            <Input />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            {editing ? "Save Changes" : "Add Item"}
          </Button>
        </Form>
      </Drawer>
    </div>
  );
}
