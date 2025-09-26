import React from "react";
import { Card, Typography, Avatar } from "antd";
import {
  TeamOutlined,
  TrophyOutlined,
  CheckCircleOutlined,
  StarOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const About: React.FC = () => {
  const stats = [
    { label: "Years Experience", value: "1+", icon: <TrophyOutlined /> },
    {
      label: "Projects Completed",
      value: "20+",
      icon: <CheckCircleOutlined />,
    },
    { label: "Happy Clients", value: "10+", icon: <TeamOutlined /> },
    { label: "GitHub Stars", value: "50+", icon: <StarOutlined /> },
  ];

  const journey = [
    {
      year: "2020",
      title: "Started Coding Journey",
      description:
        "Began learning web development with HTML, CSS, and JavaScript",
    },
    {
      year: "2021",
      title: "First Full Stack Project",
      description:
        "Built my first complete web application using React and Node.js",
    },
    {
      year: "2022",
      title: "Professional Developer",
      description: "Joined a tech startup as a Full Stack Developer",
    },
    {
      year: "2023",
      title: "Senior Developer",
      description: "Led development teams and architected scalable solutions",
    },
    {
      year: "2024",
      title: "Freelance Expert",
      description:
        "Started freelancing and building products for global clients",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Title
            level={2}
            className="text-4xl font-bold text-white mb-4 font-cascadia"
          >
            About Me
          </Title>
          <div className="w-20 h-1 bg-[rgb(158,206,106)] mx-auto mb-6"></div>
          <Text className="text-xl text-gray-400 max-w-3xl mx-auto block font-cascadia">
            Passionate developer crafting digital solutions
          </Text>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Card */}
          <Card className="bg-[rgb(26,27,38)] border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-6">
              <Avatar
                size={120}
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                className="mb-4 border-4 border-[rgb(158,206,106)] shadow-lg"
              />
              <Title level={3} className="text-white mb-2 font-cascadia">
                Vasanth
              </Title>
              <Text className="text-[rgb(158,206,106)] text-lg font-cascadia">
                Full Stack Developer
              </Text>
              <div className="mt-2">
                <Text className="text-[rgb(122,162,247)] font-cascadia">
                  React • Node.js • TypeScript
                </Text>
              </div>
            </div>

            <div className="space-y-4">
              <Title
                level={4}
                className="text-[rgb(158,206,106)] font-cascadia"
              >
                About Me
              </Title>
              <Paragraph className="text-gray-400 leading-relaxed font-cascadia">
                I'm a passionate Full Stack Developer with 1+ years of
                experience building scalable web applications. I love creating
                efficient, clean code and turning complex problems into simple,
                beautiful solutions.
              </Paragraph>

              <Title
                level={4}
                className="text-[rgb(158,206,106)] font-cascadia"
              >
                Development Setup
              </Title>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
                <div className="text-[rgb(122,162,247)] font-cascadia text-sm space-y-1">
                  <div>OS: Ubuntu 24.04 LTS + Omakub</div>
                  <div>Editor: Neovim + LazyVim</div>
                  <div>Terminal: Alacritty + Zsh</div>
                  <div>Browser: Firefox Developer Edition</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-[rgb(26,27,38)] border border-gray-700 text-center hover:shadow-xl hover:shadow-[rgb(158,206,106)]/10 transition-all duration-300 hover:border-[rgb(158,206,106)]"
              >
                <div className="text-[rgb(158,206,106)] text-3xl mb-3">
                  {stat.icon}
                </div>
                <Title level={2} className="text-white mb-2 font-cascadia">
                  {stat.value}
                </Title>
                <Text className="text-gray-400 font-cascadia text-sm">
                  {stat.label}
                </Text>
              </Card>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <Card className="bg-[rgb(26,27,38)] border border-gray-700 shadow-xl">
          <div className="mb-8">
            <Title
              level={3}
              className="text-white mb-4 font-cascadia text-center"
            >
              My Journey
            </Title>
          </div>

          <div className="space-y-6">
            {journey.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[rgb(158,206,106)] rounded-full flex items-center justify-center text-black font-bold font-cascadia">
                    {item.year.slice(-2)}
                  </div>
                </div>
                <div className="flex-1">
                  <Title level={4} className="text-white mb-2 font-cascadia">
                    {item.title}
                  </Title>
                  <Text className="text-gray-400 font-cascadia">
                    {item.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
