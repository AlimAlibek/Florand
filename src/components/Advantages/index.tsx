import { List, Card, Button } from "antd";
import Heading2 from "../Heading2";
import s from './style.module.css'

import items from './items'
import classNames from "classnames";

const itemBodyStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: 0, top: 0,
    padding: 25
}

const Advantages: React.FC = () => {

    return (

        <div>
            <Heading2>
                <span className={s.orangeText}>Преимущества </span>
                работы нашей компании
            </Heading2>

            <List
                grid={{
                  gutter: 20,
                  xs: 1,
                  sm: 2,
                  md: 3,
                  lg: 3,
                  column: 3,
                }}
                dataSource={items}
                renderItem={(item, i) => (
                  <List.Item className={s.item}>
                    <Card
                        size="small"
                        className={classNames(s.itemCard, (i % 2) ? s.simpleBG : s.gradientBG)}
                        styles={{body: itemBodyStyle}}
                        bordered={false}
                    >
                        <div className={s.itemContent}>
                            <img src={item.img} className={s.itemImg}/>
                            <div className={s.itemLabel}>
                                {item.label}
                            </div>
                        </div>

                    </Card>
                </List.Item>
                )}
            />

            <Button size="large" className={s.button} >Подробнее о нашей работе</Button>

        </div>

    )
}

export default Advantages;
