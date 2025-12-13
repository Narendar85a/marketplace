import DataTable from "@/ui/tableData/InvPacTableData";
import { inventoryDefault } from "@/utils/inventoryData";

export default function InventoryPage() {
  return (
    <DataTable
      title="Inventory Table"
      storageKey="inventoryData"
      defaultItems={inventoryDefault}
    />
  );
}
