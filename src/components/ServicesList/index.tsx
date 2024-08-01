import { List, Grid, Typography } from "antd";
import servicesList, {Service} from "../../shared/servicesList";
import s from './style.module.css'
import ButtonWithArror from "../ButtonWithArrow";
import { Link } from "react-router-dom";
const {useBreakpoint} = Grid;

const {Paragraph} = Typography

const ServicesList: React.FC = () => {

    const {sm, lg} = useBreakpoint();

    const itemImage: keyof Service | '' = (sm !== false && sm !== true) ? '' : !sm ? 'img1160' : !lg ? 'img1x1' : 'img316';

    return (
        <List
            split={false}
            dataSource={servicesList}
            grid={{gutter: [0, lg ? 14 : 4]}}
            renderItem={(service, i) => (
                <List.Item>
                    <div className={s.itemCard} >
                        <div
                            className={s.itemImg}
                            style={{backgroundImage: `url(${itemImage && service[itemImage]})`}}
                        />

                        <div className={s.itemText}>

                                <div>
                                    <h2 className={s.itemTitle}>{service.title}</h2>
                                    <Paragraph className={s.itemDescription} ellipsis={{rows: 5}} >{service.description}</Paragraph>
                                </div>

                                <Link to={service.path}>
                                    <ButtonWithArror >Подробнее</ButtonWithArror>
                                </Link>
                        </div>
                    </div>
                </List.Item>
            )}
        />
    )
}

export default ServicesList
