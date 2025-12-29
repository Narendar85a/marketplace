export interface InventoryType {
  productId: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stook: number;
  createdAt: string;
  updatedAt: string;
  image: string;
  productSchemaInitial: string;
  productSchemeCurrent: string;
}


//order.types

export interface Attachment {
  name: string;
  img: string;
  description: string;
}

export interface OrderType {
  orderId: string;
  userId: string;
  status: string;
  totalAmount: number;
  items: number;
  shippingAddress: string;
  createdAt: string;
  updatedAt: string;
  attachment: Attachment;
}


export interface DataTableProps {
  title: string;
  storageKey: string;
  defaultItems: InventoryType[];
}


export interface TripType {
  tripId: string;
  userId: string;
  driverId: string;
  status: string;
  totalFare: number;
  distance: number;
  estimatedTime: number; 
  pickupLocation: string;
  dropoffLocation: string;
  createdAt: string;
  updatedAt: string;
  attachment: {
    name: string;
    img: string;
    description: string;
  };
};

export type DeliveryType = {
  orderId: string;
  userId: string;
  restaurantName: string;
  status: string;
  totalAmount: number;
  deliveryFee: number;
  deliveryTime: number;
  items: number;
  deliveryAddress: string;
  createdAt: string;
  updatedAt: string;
  attachment: {
    name: string;
    img: string;
    description: string;
  };
};

export type TradeType = {
  tradeId: string;
  userId: string;
  stockSymbol: string;
  tradeType: string; 
  status: string;
  totalAmount: number;
  quantity: number;
  marketPrice: number;
  executedAt: string;
  updatedAt: string;
  attachment: {
    name: string;
    img: string;
    description: string;
  };
};