import {Row, Col, Card} from 'antd';
import s from './style.module.css';
import Heading2 from '../Heading2';
import Inputs from './Inputs';

const TheForm: React.FC = () => {

    return (
        <div className={s.container} id='requestForm'>
            <Row>
                <Col
                    sm={24}
                    md={24}
                    lg={8}
                >
                    <div className={s.formTitle}>
                        <Heading2>Оставьте заявку</Heading2>
                        <p>
                            Если хотите что-либо уточнить, обсудить или сделать заказ, оставьте заявку.
                        </p>
                        <p className={s.managerCall}>
                           Наш менеджер перезвонит вам в течениие 24 часов.
                        </p>
                    </div>
                </Col>
                <Col
                    span={24}
                    md={24}
                    lg={16}
                >
                    <Card
                        className={s.formCard}
                        bordered={false}
                    >
                        <Row justify="center">
                          <Inputs />
                        </Row>

                    </Card>
                </Col>
            </Row>
        </div>
    )
}


export default TheForm;
