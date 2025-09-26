import React from 'react';
import { Layout, ConfigProvider } from 'antd';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const { Content } = Layout;

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#3b82f6',
          borderRadius: 8,
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        },
      }}
    >
      <Layout className="min-h-screen">
        <Header />
        <Content>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  );
}

export default App;