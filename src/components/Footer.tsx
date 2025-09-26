import React from "react";
import { Layout, Typography, Space, Divider } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  HeartFilled,
  CodeOutlined,
  FileOutlined,
} from "@ant-design/icons";

const { Footer: AntFooter } = Layout;
const { Text, Link } = Typography;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <GithubOutlined />,
      url: "https://github.com",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: <LinkedinOutlined />,
      url: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: <MailOutlined />,
      url: "mailto:vasanthvasanth159@gmail.com",
      label: "Email",
      color: "hover:text-green-400",
    },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <AntFooter className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <CodeOutlined className="text-2xl text-[rgb(158,206,106)]" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[rgb(158,206,106)] rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-bold text-[rgb(158,206,106)] font-mono">
                vasanth@dev-portfolio:~
              </span>
            </div>
            <Text className="text-gray-400 font-mono leading-relaxed block mb-4">
              Full Stack Developer passionate about creating exceptional digital
              experiences with modern technologies. Building scalable
              applications with clean, efficient code.
            </Text>
            <div className="flex items-center space-x-2 text-sm font-mono">
              <div className="w-2 h-2 bg-[rgb(158,206,106)] rounded-full animate-pulse"></div>
              <Text className="text-[rgb(158,206,106)]">
                Available for new projects
              </Text>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <Text className="text-white font-mono font-semibold mb-4 block">
              Quick Links
            </Text>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <div key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[rgb(158,206,106)] font-mono text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* System Info */}
          <div>
            <Text className="text-white font-mono font-semibold mb-4 block">
              System Info
            </Text>
            <div className="space-y-2 text-sm font-mono">
              <div className="flex items-center space-x-2">
                <Text className="text-[rgb(122,162,247)]">OS:</Text>
                <Text className="text-gray-400">Ubuntu 24.04</Text>
              </div>
              <div className="flex items-center space-x-2">
                <Text className="text-[rgb(122,162,247)]">Experience:</Text>
                <Text className="text-[rgb(158,206,106)]">1+ years coding</Text>
              </div>
            </div>
          </div>
        </div>

        <Divider className="border-gray-800" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-2">
            <Text className="text-gray-400 font-mono text-sm">
              © {currentYear} Vasanth. Made with
            </Text>
            <HeartFilled className="text-red-500 text-sm" />
            <Text className="text-gray-400 font-mono text-sm">
              and lots of ☕
            </Text>
          </div>

          {/* Social Links */}
          <Space size="large">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                aria-label={social.label}
              >
                <div className="text-xl">{social.icon}</div>
              </Link>
            ))}
          </Space>
        </div>

        {/* Terminal Status Bar */}
        <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[rgb(158,206,106)] rounded-full"></div>
                <Text className="text-[rgb(158,206,106)]">
                  portfolio.service
                </Text>
                <Text className="text-gray-500">active (running)</Text>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[rgb(122,162,247)] rounded-full"></div>
                <Text className="text-[rgb(122,162,247)]">contact.service</Text>
                <Text className="text-gray-500">listening</Text>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FileOutlined className="text-[rgb(158,206,106)]" />
              <Text className="text-gray-400">
                Last updated: {new Date().toLocaleDateString()}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;
