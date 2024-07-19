import { Link, useLocation } from 'react-router-dom';
import s from './style.module.css'
import { Layout, Menu, Row, Col, Button, Collapse, Grid } from "antd";
import cn from 'classnames';
import menuItems from './menuItems';
const { Header } = Layout;
const {useBreakpoint} = Grid;


const TheHeader: React.FC = () => {
    const {lg} = useBreakpoint();

    const location = useLocation();

    return (
        <Header className={s.header}>
            <Row justify="space-between" >
                <Col >
                    <Link  to={'/'} className={s.logoContainer}>
                        <div className={s.logo} />
                    </Link>
                </Col>
                {
                    !lg ?
                        <Collapse
                            size='large'
                            className={s.menuCollapse}
                            bordered={false}

                            expandIcon={(a) => (
                                <span className={cn(s.burger, a.isActive && s.burgerActive)} />
                            )}
                            items={[{
                                children: (
                                    <div className={s.menuVerticalContainer} >
                                        <Menu
                                            className={s.menuVertical}
                                            theme="dark"
                                            mode="vertical"
                                            defaultSelectedKeys={[location.pathname]}
                                            selectedKeys={[location.pathname]}
                                            items={menuItems}
                                        />
                                    </div>
                                )
                            }]}
                            expandIconPosition='end'
                        />
                    :
                        <Menu
                            className={s.menuHorizontal}
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={[location.pathname]}
                            selectedKeys={[location.pathname]}
                            items={menuItems}
                        />

                    }
            </Row>
      </Header>
    )
}


export default TheHeader
