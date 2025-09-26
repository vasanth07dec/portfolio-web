import React, { useState, useEffect } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import { MenuOutlined, CodeOutlined } from "@ant-design/icons";

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { key: "about", label: "About" },
    { key: "skills", label: "Skills" },
    { key: "projects", label: "Projects" },
    { key: "contact", label: "Contact" },
  ];

  return (
    <AntHeader
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-800"
          : "bg-transparent"
      }`}
      style={{ height: "64px", lineHeight: "64px" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="relative">
            <CodeOutlined className="text-2xl text-[rgb(158,206,106)]" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[rgb(158,206,106)] rounded-full animate-pulse"></div>
          </div>
          <span className="text-xl font-bold text-[rgb(158,206,106)] font-cascadia">
            vasanth@dev-portfolio:~
          </span>
        </div>

        {/* Desktop Navigation */}
        <Menu
          mode="horizontal"
          className="hidden md:flex border-none bg-transparent"
          items={menuItems.map((item) => ({
            ...item,
            onClick: () => scrollToSection(item.key),
          }))}
        />

        {/* Mobile menu button */}
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-gray-400 hover:text-[rgb(158,206,106)]"
        />

        {/* Mobile Drawer */}
        <Drawer
          title="vasanth@dev-portfolio:~/nav"
          placement="right"
          onClose={() => setIsMenuOpen(false)}
          open={isMenuOpen}
          className="md:hidden"
        >
          <Menu
            mode="vertical"
            className="bg-transparent border-none"
            items={menuItems.map((item) => ({
              ...item,
              onClick: () => scrollToSection(item.key),
            }))}
          />
        </Drawer>
      </div>
    </AntHeader>
  );
};

export default Header;
