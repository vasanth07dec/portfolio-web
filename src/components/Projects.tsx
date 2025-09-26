import React from 'react';
import { Card, Typography, Tag, Button, Space } from 'antd';
import { 
  EyeOutlined, 
  GithubOutlined, 
  StarOutlined,
  CodeOutlined,
  DatabaseOutlined,
  MobileOutlined,
  GlobalOutlined,
  ApiOutlined,
  CloudOutlined,
  DesktopOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'Complete e-commerce solution with React, Node.js, and PostgreSQL. Features user authentication, payment processing, inventory management, and real-time analytics dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'Docker'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      size: 'large', // 2x2
      stats: { stars: 45, forks: 12 }
    },
    {
      id: 2,
      title: 'Real-time Chat App',
      category: 'fullstack',
      description: 'Scalable messaging platform with WebSocket connections, file sharing, and group chats.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      size: 'tall', // 1x2
      stats: { stars: 32, forks: 8 }
    },
    {
      id: 3,
      title: 'Project Dashboard',
      category: 'frontend',
      description: 'Modern project management tool with Kanban boards and analytics.',
      technologies: ['React', 'TypeScript', 'Ant Design'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      size: 'medium', // 1x1
      stats: { stars: 28, forks: 6 }
    },
    {
      id: 4,
      title: 'API Gateway',
      category: 'backend',
      description: 'Microservices architecture with service discovery.',
      technologies: ['Node.js', 'Docker', 'Kubernetes'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      size: 'small', // 1x1 small
      stats: { stars: 19, forks: 4 }
    },
    {
      id: 5,
      title: 'Mobile Banking',
      category: 'mobile',
      description: 'Secure banking app with biometric authentication and investment tracking features.',
      technologies: ['React Native', 'Firebase', 'Plaid API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      size: 'wide', // 2x1
      stats: { stars: 67, forks: 15 }
    },
    {
      id: 6,
      title: 'Weather App',
      category: 'frontend',
      description: 'Clean weather application with forecasts.',
      technologies: ['React', 'API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      size: 'small',
      stats: { stars: 15, forks: 3 }
    },
    {
      id: 7,
      title: 'Task Manager',
      category: 'fullstack',
      description: 'Simple task management system.',
      technologies: ['Vue.js', 'Express'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      size: 'small',
      stats: { stars: 12, forks: 2 }
    },
    {
      id: 8,
      title: 'Portfolio Website',
      category: 'frontend',
      description: 'Personal portfolio built with modern technologies.',
      technologies: ['Next.js', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      size: 'medium',
      stats: { stars: 8, forks: 1 }
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'fullstack': return <GlobalOutlined />;
      case 'frontend': return <CodeOutlined />;
      case 'backend': return <DatabaseOutlined />;
      case 'mobile': return <MobileOutlined />;
      default: return <CodeOutlined />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'fullstack': return 'from-blue-500 to-purple-600';
      case 'frontend': return 'from-green-500 to-teal-600';
      case 'backend': return 'from-orange-500 to-red-600';
      case 'mobile': return 'from-purple-500 to-pink-600';
      default: return 'from-blue-500 to-purple-600';
    }
  };

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Title level={2} className="text-4xl font-bold text-white mb-4 font-mono">
            Featured Projects
          </Title>
          <div className="w-20 h-1 bg-[rgb(158,206,106)] mx-auto mb-6"></div>
          <Text className="text-xl text-gray-400 max-w-3xl mx-auto block font-mono">
            Modern web applications and scalable solutions
          </Text>
        </div>

        {/* Simple Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.slice(0, 6).map((project, index) => (
            <Card key={project.id} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden bg-[rgb(26,27,38)] shadow-lg hover:shadow-[rgb(158,206,106)]/20 border border-gray-700 hover:border-[rgb(158,206,106)]">
              <div className={`relative h-32 bg-gradient-to-br ${getCategoryColor(project.category)} flex items-center justify-center mb-4`}>
                <div className="text-white text-4xl">
                  {getCategoryIcon(projects[0].category)}
                </div>
                {project.featured && (
                  <div className="absolute top-3 left-3">
                    <Tag className="bg-[rgb(180,249,248)] text-black border-0 shadow-lg font-mono text-xs">
                      Featured
                    </Tag>
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <div className="flex items-center text-white text-sm font-mono">
                    <StarOutlined className="mr-1" />
                    {project.stats.stars}
                  </div>
                </div>
              </div>
              
              <div className="px-4 pb-4">
                <Title level={4} className="mb-2 text-white group-hover:text-[rgb(158,206,106)] transition-colors font-mono">
                  {project.title}
                </Title>
                <Paragraph className="text-gray-400 mb-4 text-sm leading-relaxed font-mono" ellipsis={{ rows: 3 }}>
                  {project.description}
                </Paragraph>
                <div className="mb-4">
                  <Space wrap size="small">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Tag key={tech} className="bg-gray-800 text-[rgb(122,162,247)] text-xs px-2 py-1 rounded border border-gray-600 font-mono">
                        {tech}
                      </Tag>
                    ))}
                    {project.technologies.length > 3 && (
                      <Tag className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded border border-gray-600 font-mono">
                        +{project.technologies.length - 3}
                      </Tag>
                    )}
                  </Space>
                </div>
                <div className="flex justify-between items-center">
                  <Button 
                    type="primary" 
                    icon={<EyeOutlined />}
                    className="bg-[rgb(158,206,106)] hover:bg-[rgb(158,206,106)]/80 text-black font-mono"
                  >
                    View Demo
                  </Button>
                  <Button icon={<GithubOutlined />} className="text-gray-400 hover:text-[rgb(158,206,106)] border-gray-600 hover:border-[rgb(158,206,106)] font-mono">
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-[rgb(26,27,38)] border border-gray-700 shadow-xl">
            <div className="py-8">
              <Title level={3} className="mb-4 text-white font-mono">
                Ready to build something amazing?
              </Title>
              <Text className="text-lg text-gray-300 mb-6 block max-w-2xl mx-auto font-mono">
                Modern development meets innovative solutions.<br/>
                Let's craft your next project with precision and speed.
              </Text>
              <Space size="middle">
                <Button 
                  type="primary" 
                  size="large"
                  className="bg-[rgb(158,206,106)] hover:bg-[rgb(158,206,106)]/80 shadow-lg hover:shadow-xl font-mono text-black"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
                <Button 
                  size="large"
                  icon={<GithubOutlined />}
                  className="text-[rgb(158,206,106)] hover:bg-[rgb(158,206,106)] hover:text-black border-[rgb(158,206,106)] font-mono"
                >
                  View All Projects
                </Button>
              </Space>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;