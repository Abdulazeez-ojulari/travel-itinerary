import React from "react";
import { Input, Button, Dropdown, Avatar } from "antd";
import {
  HomeOutlined,
  DashboardOutlined,
  WalletOutlined,
  CheckSquareOutlined,
  GiftOutlined,
  BellOutlined,
  ShoppingCartOutlined,
  PlusOutlined,
  DownOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const Header = () => {
  const menuItems = [
    { label: "Home", icon: <HomeOutlined /> },
    { label: "Dashboard", icon: <DashboardOutlined /> },
    { label: "Wallet", icon: <WalletOutlined /> },
    { label: "Plan a trip", icon: <CheckSquareOutlined /> },
    { label: "Commission for life", icon: <GiftOutlined /> },
    { label: "Notification", icon: <BellOutlined /> },
    { label: "Carts", icon: <ShoppingCartOutlined /> },
    { label: "Create", icon: <PlusOutlined /> },
  ];

  const profileMenu = (
    <Dropdown
      menu={{
        items: [
          { key: "1", label: "Profile" },
          { key: "2", label: "Settings" },
          { key: "3", label: "Logout" },
        ],
      }}
    >
      <div className="flex items-center cursor-pointer">
        <Avatar src="https://via.placeholder.com/40" size="large" />
        <DownOutlined className="ml-2 text-gray-500" />
      </div>
    </Dropdown>
  );

  return (
    <div className="flex justify-between items-center px-6 py-4 shadow-md bg-white z-50 sticky top-0 bg-white">
      <div className="flex items-center space-x-4">
        <div className="bg-blue-500 rounded-lg p-2">
          <span className="text-white text-xl font-bold">go</span>
        </div>
        <Input
          placeholder="Search"
          prefix={<span className="text-gray-500"><SearchOutlined /></span>}
          className="w-64 rounded-lg"
        />
      </div>

      <div className="flex items-center space-x-8">
        {menuItems.slice(0, 5).map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-gray-500 hover:text-blue-500">
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </div>
        ))}

        <Button type="primary" className="rounded-lg bg-[#0D6EFD]">
          Subscribe
        </Button>

        {menuItems.slice(5).map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-gray-500 hover:text-blue-500">
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </div>
        ))}

        {profileMenu}
      </div>
    </div>
  );
};

export default Header;
