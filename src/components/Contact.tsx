import React, { useState } from "react";
import {
  Card,
  Typography,
  Row,
  Col,
  Form,
  Input,
  Button,
  Space,
  message,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  SendOutlined,
  UserOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

const Contact: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      message.success("Message sent successfully! I'll get back to you soon.");
      form.resetFields();
    } catch (error) {
      message.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <MailOutlined />,
      label: "Email",
      value: "vasanthvasanth159@gmail.com",
      link: "mailto:vasanthvasanth159@gmail.com",
      color: "text-blue-400",
    },
    {
      icon: <PhoneOutlined />,
      label: "Phone",
      value: "+91 9789551824",
      link: "tel:+15551234567",
      color: "text-green-400",
    },
    {
      icon: <EnvironmentOutlined />,
      label: "Location",
      value: "thiruvarur, india",
      link: "#",
      color: "text-purple-400",
    },
  ];

  const socialLinks = [
    {
      icon: <GithubOutlined />,
      label: "GitHub",
      url: "https://github.com",
      color: "hover:text-gray-300",
    },
    {
      icon: <LinkedinOutlined />,
      label: "LinkedIn",
      url: "https://linkedin.com",
      color: "hover:text-blue-400",
    },
    {
      icon: <TwitterOutlined />,
      label: "Twitter",
      url: "https://twitter.com",
      color: "hover:text-blue-300",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Title
            level={2}
            className="text-4xl font-bold text-white mb-4 font-mono"
          >
            Get In Touch
          </Title>
          <div className="w-20 h-1 bg-[rgb(158,206,106)] mx-auto mb-6"></div>
          <Text className="text-xl text-gray-400 max-w-3xl mx-auto block font-mono">
            Ready to start your next project? Let's build something amazing
            together
          </Text>
        </div>

        <Row gutter={[32, 32]} align="middle">
          {/* Contact Form */}
          <Col xs={24} lg={14}>
            <Card className="bg-[rgb(26,27,38)] border border-gray-700 shadow-xl hover:shadow-2xl hover:shadow-[rgb(158,206,106)]/10 transition-all duration-300">
              <div className="mb-6">
                <Title
                  level={3}
                  className="text-[rgb(158,206,106)] mb-2 font-mono"
                >
                  Send Message
                </Title>
                <Text className="text-[rgb(122,162,247)] font-mono">
                  Fill out the form below and I'll get back to you within 24
                  hours
                </Text>
              </div>

              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                className="space-y-4"
              >
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="name"
                      label={
                        <span className="text-gray-300 font-mono">Name</span>
                      }
                      rules={[
                        { required: true, message: "Please enter your name" },
                      ]}
                    >
                      <Input
                        prefix={<UserOutlined className="text-gray-400" />}
                        placeholder="Your full name"
                        className="bg-gray-800 border-gray-600 text-white font-mono"
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="email"
                      label={
                        <span className="text-gray-300 font-mono">Email</span>
                      }
                      rules={[
                        { required: true, message: "Please enter your email" },
                        {
                          type: "email",
                          message: "Please enter a valid email",
                        },
                      ]}
                    >
                      <Input
                        prefix={<MailOutlined className="text-gray-400" />}
                        placeholder="your.email@example.com"
                        className="bg-gray-800 border-gray-600 text-white font-mono"
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  name="subject"
                  label={
                    <span className="text-gray-300 font-mono">Subject</span>
                  }
                  rules={[
                    { required: true, message: "Please enter a subject" },
                  ]}
                >
                  <Input
                    placeholder="Project discussion, collaboration, etc."
                    className="bg-gray-800 border-gray-600 text-white font-mono"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  name="message"
                  label={
                    <span className="text-gray-300 font-mono">Message</span>
                  }
                  rules={[
                    { required: true, message: "Please enter your message" },
                  ]}
                >
                  <TextArea
                    rows={6}
                    placeholder="Tell me about your project, requirements, timeline, budget, etc."
                    className="bg-gray-800 border-gray-600 text-white font-mono"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    icon={<SendOutlined />}
                    size="large"
                    className="bg-[rgb(158,206,106)] hover:bg-[rgb(158,206,106)]/80 border-none text-black font-mono w-full sm:w-auto"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>

          {/* Contact Info */}
          <Col xs={24} lg={10}>
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="bg-[rgb(26,27,38)] border border-gray-700 shadow-xl">
                <Title
                  level={4}
                  className="text-[rgb(158,206,106)] mb-6 font-mono"
                >
                  Contact Information
                </Title>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-3 bg-gray-800 rounded-lg border border-gray-600 hover:border-[rgb(158,206,106)] transition-all duration-300"
                    >
                      <div className={`text-2xl ${info.color}`}>
                        {info.icon}
                      </div>
                      <div>
                        <Text className="text-[rgb(122,162,247)] font-mono text-sm block">
                          {info.label}
                        </Text>
                        <a
                          href={info.link}
                          className="text-white hover:text-[rgb(158,206,106)] font-mono transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="bg-[rgb(26,27,38)] border border-gray-700 shadow-xl">
                <Title
                  level={4}
                  className="text-[rgb(158,206,106)] mb-6 font-mono"
                >
                  Social Links
                </Title>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                    >
                      <div className="text-3xl">{social.icon}</div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Availability Status */}
              <Card className="bg-[rgb(26,27,38)] border border-gray-700 shadow-xl">
                <Title
                  level={4}
                  className="text-[rgb(158,206,106)] mb-4 font-mono"
                >
                  Availability Status
                </Title>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[rgb(158,206,106)] rounded-full animate-pulse"></div>
                    <Text className="text-[rgb(158,206,106)] font-mono">
                      Available for new projects
                    </Text>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[rgb(122,162,247)] rounded-full"></div>
                    <Text className="text-[rgb(122,162,247)] font-mono">
                      Response time: {"<"} 24 hours
                    </Text>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[rgb(180,249,248)] rounded-full"></div>
                    <Text className="text-[rgb(180,249,248)] font-mono">
                      Timezone: PST (UTC-8)
                    </Text>
                  </div>
                </div>
              </Card>

              {/* Quick Stats */}
              <Card className="bg-[rgb(26,27,38)] border border-gray-700 shadow-xl">
                <Title
                  level={4}
                  className="text-[rgb(158,206,106)] mb-4 font-mono"
                >
                  Quick Stats
                </Title>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <Title
                      level={3}
                      className="text-[rgb(158,206,106)] mb-1 font-mono"
                    >
                      24h
                    </Title>
                    <Text className="text-[rgb(122,162,247)] font-mono text-sm">
                      Response Time
                    </Text>
                  </div>
                  <div>
                    <Title
                      level={3}
                      className="text-[rgb(122,162,247)] mb-1 font-mono"
                    >
                      100%
                    </Title>
                    <Text className="text-[rgb(122,162,247)] font-mono text-sm">
                      Client Satisfaction
                    </Text>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
        </Row>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-[rgb(26,27,38)] to-gray-800 border border-gray-700 shadow-2xl">
            <div className="py-8">
              <Title level={3} className="text-white mb-4 font-mono">
                Ready to start your project?
              </Title>
              <Paragraph className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto font-mono">
                Whether you need a complete web application, API development, or
                technical consultation, I'm here to help bring your ideas to
                life with clean, scalable code.
              </Paragraph>
              <Space size="middle">
                <Button
                  type="primary"
                  size="large"
                  icon={<MailOutlined />}
                  className="bg-[rgb(158,206,106)] hover:bg-[rgb(158,206,106)]/80 border-none text-black font-mono"
                  onClick={() =>
                    document
                      .querySelector("form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Start Conversation
                </Button>
                <Button
                  size="large"
                  className="border-[rgb(158,206,106)] text-[rgb(158,206,106)] hover:bg-[rgb(158,206,106)] hover:text-black font-mono"
                >
                  View Portfolio
                </Button>
              </Space>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
