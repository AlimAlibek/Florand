import { useLocation } from 'react-router-dom';
import s from './style.module.css'
import { Layout, Menu, Row, Col, Collapse, Grid } from "antd";
import cn from 'classnames';
import menuItems from '../MenuItems/menuItems';
import Logo from '../Logo';
import { useState } from 'react';
const { Header } = Layout;
const {useBreakpoint} = Grid;


const TheHeader: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(0);
    const {lg} = useBreakpoint();

    const location = useLocation();

    const handleBurgerClick = (keys: string | string[]) => {
        setMobileMenuOpen(keys.length ? 1 : 0)
    }

    return (
        <Header className={s.header}>
            <Row justify="space-between" >
                <Col >
                    <Logo />
                </Col>
                {
                    !lg ?
                        <Collapse
                            size='large'
                            className={s.menuCollapse}
                            bordered={false}
                            activeKey={isMobileMenuOpen}
                            expandIcon={(a) => (
                                <span className={cn(s.burger, a.isActive && s.burgerActive)} />
                            )}
                            onChange={handleBurgerClick}
                            items={[{
                                key: 1,
                                children: (
                                    <div className={s.menuVerticalContainer} >
                                        <Menu
                                            className={s.menuVertical}
                                            theme="dark"
                                            mode="vertical"
                                            defaultSelectedKeys={[location.pathname]}
                                            selectedKeys={[location.pathname]}
                                            items={menuItems}
                                            onSelect={() => setMobileMenuOpen(0)}
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
