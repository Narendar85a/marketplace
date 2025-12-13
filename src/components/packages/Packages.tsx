// pages/packages.tsx
import DataTable from "@/ui/tableData/InvPacTableData";
import { inventoryDefault } from "@/utils/inventoryData";

export default function PackagesPage() {
  return (
    <DataTable
      title="Packages Table"
      storageKey="packagesData"
      defaultItems={inventoryDefault}
    />
  );
}
