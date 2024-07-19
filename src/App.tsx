
import s from './App.module.css';
import Header from './components/Header';
import { ConfigProvider, Layout } from 'antd';
import themeConfig from './themeConfig';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ConfigProvider
      theme={themeConfig}
    >
      <BrowserRouter>

        <Layout className={s.layout}>
          <Header />
        </Layout>

      </BrowserRouter>

    </ConfigProvider>

  );
}

export default App;
