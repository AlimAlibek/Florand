import { Card, List } from "antd";

import s from './style.module.css'
import Heading2 from "../Heading2";

import items from '../../shared/servicesList';
import { Link } from "react-router-dom";

const itemCardBodyStyle = {
    marginTop: '-22%',
    padding: 0
}

const itemBodyStyle: React.CSSProperties = {
    padding: 20,
    height: '100%',
}

const ServicesGrid: React.FC = () => {

    const itemsWithQuestion = [
        ...items,
        {
            title: 'У вас остались вопросы?',
            description: 'Вы можете задать их менеджеру, оставив завяку.',
            img1x1: '',
            path: '#requestForm'
        }
    ]

    return (
        <Card className={s.container} bordered={false}>
            <Heading2>
                <div className={s.title}>Наши <span>услуги</span></div>
            </Heading2>

            <List
                grid={{
                  gutter: 20,
                  xs: 1,
                  sm: 2,
                  md: 2,
                  lg: 4,
                  column: 4,
                }}
                dataSource={itemsWithQuestion}
                renderItem={(item, i) => (

                    i === itemsWithQuestion.length - 1
                      ?
                        <div className={s.questionCardContainer}>
                            <Card
                                className={s.questionCard}
                                styles={{body: {height: '100%'}}}
                                bordered={false}
                            >
                                <div className={s.questionCardContent}>
                                    <div>
                                        <div className={s.itemTitle}>
                                            {item.title}
                                        </div>
                                        <div className={s.questionDescription}>{item.description}</div>
                                    </div>
                                    <a className={s.itemLink} href={item.path}>Подробнее &gt;</a>
                                </div>
                            </Card>
                        </div>

                      :
                        <List.Item className={s.item}>
                            <Card
                                size="small"
                                className={s.itemCard}
                                cover={<img src={item.img1x1} alt={item.title}/>}
                                styles={{body: itemCardBodyStyle, cover: {minHeight: '200px'}}}
                                bordered={false}
                            >
                                <Card bordered={false} className={s.itemBody} styles={{body: itemBodyStyle}}>
                                    <div className={s.itemBodyContent}>
                                        <div className={s.itemTitle}>
                                            {item.title}
                                        </div>
                                        <Link className={s.itemLink} to={item.path}>Подробнее &gt;</Link>
                                    </div>
                                </Card>

                            </Card>
                        </List.Item>

                )}
            />

        </Card>
    )
}

export default ServicesGrid;
