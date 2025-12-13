'use client';

import React, { useState } from "react";
import ThemeSwitch from '@/theme/ThemeSwitch';
import { Typography } from 'antd';
import './Topbar.scss';
import Link from 'next/link';
import { ReadOutlined, LogoutOutlined, LoginOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";

export default function Topbar() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='topbar'>
      <Typography.Title level={4} className='topbar-typo'>
        MarketPlace Seller
      </Typography.Title>

      <div className='topbar-right'>
        <ThemeSwitch />

        <Link
          href="/about"
          className={`topbar-link ${pathname === "/about" ? "active" : ""}`}
        >
          <ReadOutlined />
          <span className="text-base">About</span>
        </Link>

        {isLoggedIn ? (
          <LogoutOutlined
            className="topbar-log"
            onClick={() => {
              alert("You LoggedOut Successfully");
              setIsLoggedIn(false);
            }}
          />
        ) : (
          <LoginOutlined
            className="topbar-log"
            onClick={() => {
              alert("You LoggedIn Successfully");
              setIsLoggedIn(true);
            }}
          />
        )}
      </div>
    </div>
  );
}
