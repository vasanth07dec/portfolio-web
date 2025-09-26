import React from "react";
import { Card, Typography, Row, Col, Progress, Space, Tag } from "antd";
import {
  CodeOutlined,
  DatabaseOutlined,
  CloudOutlined,
  MobileOutlined,
  ToolOutlined,
  ApiOutlined,
  GlobalOutlined,
  DesktopOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <CodeOutlined />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 95, color: "#61dafb" },
        { name: "TypeScript", level: 90, color: "#3178c6" },
        { name: "Next.js", level: 85, color: "#000000" },
        { name: "Tailwind CSS", level: 90, color: "#06b6d4" },
        { name: "JavaScript", level: 95, color: "#f7df1e" },
        { name: "HTML/CSS", level: 95, color: "#e34f26" },
      ],
    },
    {
      title: "Backend Development",
      icon: <DatabaseOutlined />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 90, color: "#339933" },
        { name: "Express.js", level: 85, color: "#000000" },
        { name: "PostgreSQL", level: 80, color: "#336791" },
        { name: "MongoDB", level: 75, color: "#47a248" },
        { name: "Redis", level: 70, color: "#dc382d" },
        { name: "GraphQL", level: 75, color: "#e10098" },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <CloudOutlined />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Docker", level: 85, color: "#2496ed" },
        { name: "AWS", level: 80, color: "#ff9900" },
        { name: "Kubernetes", level: 70, color: "#326ce5" },
        { name: "CI/CD", level: 75, color: "#22c55e" },
        { name: "Linux", level: 90, color: "#fcc624" },
        { name: "Nginx", level: 75, color: "#009639" },
      ],
    },
    {
      title: "Tools & Others",
      icon: <ToolOutlined />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: 95, color: "#f05032" },
        { name: "Neovim", level: 85, color: "#57a143" },
        { name: "Figma", level: 70, color: "#f24e1e" },
        { name: "Jest", level: 80, color: "#c21325" },
        { name: "Webpack", level: 75, color: "#8dd6f9" },
        { name: "Vite", level: 85, color: "#646cff" },
      ],
    },
  ];

  const certifications = [
    "AWS Certified Developer",
    "React Developer Certification",
    "Node.js Certified Developer",
    "Docker Certified Associate",
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Title
            level={2}
            className="text-4xl font-bold text-white mb-4 font-cascadia"
          >
            Technical Skills
          </Title>
          <div className="w-20 h-1 bg-[rgb(158,206,106)] mx-auto mb-6"></div>
          <Text className="text-xl text-gray-400 max-w-3xl mx-auto block font-cascadia">
            Technologies and tools I use to build amazing products
          </Text>
        </div>

        {/* Expanded Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="bg-[rgb(26,27,38)] border border-gray-700 shadow-xl hover:shadow-2xl hover:shadow-[rgb(158,206,106)]/10 transition-all duration-300 hover:border-[rgb(158,206,106)]"
            >
              <div className="mb-6">
                <div
                  className={`inline-flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}
                >
                  <div className="text-white text-2xl">{category.icon}</div>
                  <Title level={4} className="text-white mb-0 font-cascadia">
                    {category.title}
                  </Title>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-800 p-3 rounded-lg border border-gray-600 hover:border-[rgb(158,206,106)] transition-all duration-300"
                  >
                    <Text className="text-[rgb(122,162,247)] font-cascadia font-medium text-sm">
                      {skill.name}
                    </Text>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
