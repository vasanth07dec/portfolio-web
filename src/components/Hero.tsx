import React, { useState, useEffect } from "react";
import { Button, Typography, Space } from "antd";
import {
  DownOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Full Stack Developer",
    "Linux Enthusiast",
    "Open Source Contributor",
    "Terminal Wizard",
  ];

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex];

        if (!isDeleting) {
          setCurrentText(current.substring(0, currentText.length + 1));

          if (currentText === current) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setCurrentText(current.substring(0, currentText.length - 1));

          if (currentText === "") {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  // const scrollToSection = (sectionId: string) => {
  //   className =
  //     "absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500 hover:text-green-400";
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-400 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-green-400 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-4">
              <span className="text-green-400 font-cascadia text-lg">
                ~/portfolio $
              </span>
            </div>
            <Title
              level={1}
              className="text-4xl sm:text-6xl font-bold text-white mb-6 font-cascadia"
            >
              <span className="text-green-400">whoami</span>{" "}
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                Vasanth
              </span>
            </Title>

            <div className="text-2xl sm:text-3xl text-gray-700 mb-6 h-12">
              <span className="text-green-400 font-cascadia">{">"}</span>
              <Text className="text-2xl sm:text-3xl text-green-400 font-cascadia ml-2">
                {currentText}
              </Text>
              <span className="animate-pulse text-green-400">|</span>
            </div>

            <Text className="text-lg text-gray-300 mb-8 block max-w-lg mx-auto lg:mx-0 font-cascadia leading-relaxed">
              <span className="text-green-400">#</span> Crafting exceptional
              digital experiences with modern technologies.
              <br />
              <span className="text-green-400">#</span> Building scalable
              applications with clean, efficient code.
            </Text>

            <Space direction="vertical" size="large" className="w-full">
              <Space wrap className="justify-center lg:justify-start">
                <Button
                  type="primary"
                  size="large"
                  // onClick={() => scrollToSection("projects")}
                  className="bg-green-400 hover:bg-green-300 border-none hover:shadow-lg font-cascadia text-black"
                >
                  ./view_projects.sh
                </Button>
                <Button
                  size="large"
                  icon={<DownloadOutlined />}
                  className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-cascadia"
                >
                  cat resume.pdf
                </Button>
              </Space>

              {/* Social Links */}
              <Space size="large" className="justify-center lg:justify-start">
                <Button
                  type="text"
                  shape="circle"
                  size="large"
                  icon={<GithubOutlined />}
                  className="shadow-lg hover:shadow-xl hover:text-green-400 text-gray-400"
                />
                <Button
                  type="text"
                  shape="circle"
                  size="large"
                  icon={<LinkedinOutlined />}
                  className="shadow-lg hover:shadow-xl hover:text-blue-400 text-gray-400"
                />
                <Button
                  type="text"
                  shape="circle"
                  size="large"
                  icon={<MailOutlined />}
                  className="shadow-lg hover:shadow-xl hover:text-purple-400 text-gray-400"
                />
              </Space>
            </Space>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Button
        type="text"
        shape="circle"
        size="large"
        icon={<DownOutlined />}
        // onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 hover:text-green-400"
      />
    </section>
  );
};

export default Hero;
