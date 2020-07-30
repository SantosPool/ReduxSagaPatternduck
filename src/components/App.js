import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined
} from '@ant-design/icons';

//import Counter from './Counter';
import Users from './Users';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const App = () => {

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = collapsed => setCollapsed(collapsed);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <div className="logo" />
        <Menu theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
        >
          <Menu.Item
            key="1"
            icon={<HomeOutlined />}
          >
            <span>Counter</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background:'#fff' ,padding: 0 }} />
        <Content style={{ margin: '20 16px' }}>
          <Users/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>SanFreeCode @2020</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
