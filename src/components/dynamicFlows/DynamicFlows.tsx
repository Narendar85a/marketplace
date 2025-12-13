"use client";

import React from "react";
import { Tabs, Typography } from "antd";
import "./DynamicFlows.scss";

export default function DynamicFlows() {
  return (
    <div className="dynamic">
      <Typography className="dynamic-typo">Dynamic Flows</Typography>

      <Tabs
        defaultActiveKey="1"
        type="line"
        items={[
          {
            key: "1",
            label: "Inventory",

            children: (
              <Tabs
                defaultActiveKey="1-1"
                type="card"
                items={[
                  {
                    key: "1-1",
                    label: "Schema",
                    children: (
                      <div className="dynamic-tab">
                        Content of Inventory Schema
                      </div>
                    ),
                  },
                  {
                    key: "1-2",
                    label: "Order steps",
                    children: (
                      <div className="dynamic-tab">
                        Content of Inventory Order steps
                      </div>
                    ),
                  },
                ]}
              />
            ),
          },

          {
            key: "2",
            label: "Packages",

            children: (
              <Tabs
                defaultActiveKey="2-1"
                type="card"
                items={[
                  {
                    key: "2-1",
                    label: "Schema",
                    children: (
                      <div className="dynamic-tab">
                        Content of Packages Schema
                      </div>
                    ),
                  },
                  {
                    key: "2-2",
                    label: "P-Orders",
                    children: (
                      <div className="dynamic-tab">
                        Content of Packages Orders
                      </div>
                    ),
                  },
                ]}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
