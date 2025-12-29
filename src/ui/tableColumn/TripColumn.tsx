import { ColumnsType } from "antd/es/table";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { TripType, Attachment } from "@/types/types";

export const getTripColumns = (onView?: (tripId: string) => void): ColumnsType<TripType> => [
  {
    title: "Trip ID",
    dataIndex: "tripId",
    key: "tripId",
  },
  {
    title: "User ID",
    dataIndex: "userId",
    key: "userId",
  },
  {
    title: "Driver ID",
    dataIndex: "driverId",
    key: "driverId",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Total Fare",
    dataIndex: "totalFare",
    key: "totalFare",
    render: (fare) => `₹ ${fare}`,
  },
  {
    title: "Distance (km)",
    dataIndex: "distance",
    key: "distance",
  },
  {
    title: "Estimated Time (min)",
    dataIndex: "estimatedTime",
    key: "estimatedTime",
  },
  {
    title: "Pickup Location",
    dataIndex: "pickupLocation",
    key: "pickupLocation",
  },
  {
    title: "Dropoff Location",
    dataIndex: "dropoffLocation",
    key: "dropoffLocation",
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
          onClick={() => onView && onView(record.tripId)}
        />
        <EditOutlined
          style={{ color: "#3b82f6", cursor: "pointer" }}
          onClick={() => console.log("Edit", record.tripId)}
        />
        <DeleteOutlined
          style={{ color: "#ef4444", cursor: "pointer" }}
          onClick={() => console.log("Delete", record.tripId)}
        />
      </div>
    ),
  },
];