import { InventoryType } from "@/types/types";

// Read data from localStorage
export const getData = (key: string): InventoryType[] => {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : [];
};

// Save data to localStorage
export const saveData = (key: string, items: InventoryType[]) => {
  localStorage.setItem(key, JSON.stringify(items));
};

// Add new item
export const addItem = (key: string, item: InventoryType) => {
  const items = getData(key);
  items.push(item);
  recalcIds(items);
  saveData(key, items);
};

// Update item
export const updateItem = (key: string, productId: string, updated: Partial<InventoryType>) => {
  const items = getData(key);
  const newItems = items.map(item =>
    item.productId === productId ? { ...item, ...updated } : item
  );
  recalcIds(newItems);
  saveData(key, newItems);
};

// Delete item
export const deleteItem = (key: string, productId: string) => {
  let items = getData(key);
  items = items.filter(item => item.productId !== productId);
  recalcIds(items); // recalc IDs after deletion
  saveData(key, items);
};

// Recalculate IDs based on index
const recalcIds = (items: InventoryType[]) => {
  items.forEach((item, index) => {
    item.productId = `PROD-${String(index + 1).padStart(3, "0")}`;
  });
};
