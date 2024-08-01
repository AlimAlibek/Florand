
import s from './App.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ConfigProvider, Layout } from 'antd';
import useThemeConfig from './themeConfig';

import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Services from './pages/Services';
import NotFound from './pages/NotFound';

const { Content } = Layout

function App() {

  const theme = useThemeConfig();

  return (
    <ConfigProvider
      theme={theme}
    >
        <Layout className={s.layout}>

          <Header />

          <Content className={s.mainContent}>

            <Routes >

              <Route path="/" Component={Main} />
              <Route path="/services" Component={Services} />

              <Route path="*" Component={NotFound} />

            </Routes>

          </Content>

          <Footer />
        </Layout>
    </ConfigProvider>

  );
}

export default App;
