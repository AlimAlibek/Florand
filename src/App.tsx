
import s from './App.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ConfigProvider, Layout } from 'antd';
import themeConfig from './themeConfig';

import { BrowserRouter } from 'react-router-dom';

const { Content } = Layout

function App() {
  return (
    <ConfigProvider
      theme={themeConfig}
    >
      <BrowserRouter>

        <Layout className={s.layout}>
          <Header />

          <Content className={s.mainContent}>

          </Content>

          <Footer />
        </Layout>

      </BrowserRouter>

    </ConfigProvider>

  );
}

export default App;
