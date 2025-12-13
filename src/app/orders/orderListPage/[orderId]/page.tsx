"use client";

import { useParams } from "next/navigation";
import { ordersData } from "@/utils/ordersData";
import { Steps, Row, Col, Card, Typography, Divider } from "antd";

export default function OrderDetail() {
  const { orderId } = useParams();

  // Get the clicked order from data
  const order = ordersData.find((o) => o.orderId === orderId);
  if (!order) return <p>Order not found!</p>;

  const { Title, Text } = Typography;

  // Base steps
  const steps: any[] = [
    {
      title: "Order Placed",
      description: `Order ID: ${order.orderId} placed by user ${order.userId}`,
    },
  ];

  // Insert attachment immediately after order placed if exists
  if (order.attachment) {
    steps.push({
      title: "Attachment",
      description: (
        <div className="flex flex-col items-start gap-2">
          <Text strong>{order.attachment.name}</Text>
          <img
            src={order.attachment.img}
            alt={order.attachment.name}
            className="w-20 h-20 rounded object-cover"
          />
          <Text type="secondary">{order.attachment.description}</Text>
        </div>
      ),
    });
  }

  // Remaining steps
  steps.push(
    {
      title: "Items Packed",
      description: order.items,
    },
    {
      title: "Shipped",
      description: order.shippingAddress,
    },
    {
      title: "Delivered",
      description: `Total Amount: ₹${order.totalAmount}`,
    }
  );

  // Determine current step based on status
  const statusMap = ["Pending", "Processed", "Shipped", "Delivered"];
  const currentStep = statusMap.indexOf(order.status);

  return (
    <div className="p-6">
      <Title level={2} className="mb-6">
        Order Details - #{order.orderId}
      </Title>

      <Row gutter={16}>
        {/* Steps column */}
        <Col span={16}>
          <Card title="Order Progress">
            <Steps
              direction="vertical"
              current={currentStep >= 0 ? currentStep : 0}
              items={steps.map((step) => ({
                title: step.title,
                description: step.description,
              }))}
            />
          </Card>
        </Col>

        {/* Summary column */}
        <Col span={8}>
          <Card title="Summary">
            <Text strong>User ID:</Text> <Text>{order.userId}</Text>
            <Divider />
            <Text strong>Status:</Text> <Text>{order.status}</Text>
            <Divider />
            <Text strong>Total Amount:</Text> <Text>₹{order.totalAmount}</Text>
            <Divider />
            <Text strong>Shipping Address:</Text> <Text>{order.shippingAddress}</Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
