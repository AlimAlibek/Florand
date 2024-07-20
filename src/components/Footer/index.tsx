import { Layout, Row, Col, Typography } from "antd";
import Logo from "../Logo";
import s from './style.module.css';
import menuItems from "../MenuItems/menuItems";
import { Link } from "react-router-dom";
import cn from "classnames";

const {Footer} = Layout;
const {Text} = Typography;

const TheFooter: React.FC = () => {

    const handleLinkClick = () => {
        window.scrollTo(0, 0)
    }

    return (

        <Footer className={s.footer} >
            <Row>
                <Logo />
            </Row>
            <Row gutter={[20, 20]} justify="space-between">

                    <Col>
                        <Text type="warning">
                            Контакты: +79672403553 <br/>
                            E-mail: info.florand@gmail.com
                        </Text>
                        <br/>
                        <Text className={s.text}>
                            214000, Москва, пр. Мира 11.2, этаж 3,
                            <br/> офис 126
                        </Text>
                    </Col>
                    <Col >
                        <div className={s.linkBlock}>
                            {menuItems.slice(0, 3).map(item => (
                                <Link
                                    key={item.key}
                                    className={s.link}
                                    to={item.key}
                                    onClick={handleLinkClick}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                        <div className={s.linkBlock}>
                            {menuItems.slice(3, 6).map(item => (
                                <Link
                                    key={item.key}
                                    className={s.link}
                                    to={item.key}
                                    onClick={handleLinkClick}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </Col>
                    <div className={cn(s.linkBlock, s.linkBlockLast)}>

                        <Link className={s.link} to={''} onClick={handleLinkClick}>Платежные системы</Link>
                        <Link className={s.link} to={''} onClick={handleLinkClick}>Cookie и политика конфиденциальности</Link>
                        <Link className={s.link} to={''} onClick={handleLinkClick}>Положения и условия</Link>

                    </div>
                </Row>

        </Footer>

    )
}


export default TheFooter;
