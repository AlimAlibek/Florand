import { Avatar, Carousel, Row, Col, Button, Typography } from 'antd';
import s from './style.module.css';
import Heading2 from '../Heading2';
import reviews from '../../shared/reviews';
import { useRef } from 'react';
import cn from 'classnames';

const {Paragraph} = Typography

const Reviews: React.FC = () => {

    const carouserRef = useRef<any>(null);

    const next = () => {
        if (carouserRef.current?.next) {
            carouserRef.current.next()
        }
    }
    const prev = () => {
        if (carouserRef.current?.prev) {
            carouserRef.current.prev()
        }
    }

    return (
        <div>
            <Heading2>
                <div className={s.title}>Отзывы клиентов</div>
            </Heading2>

           <Row align="middle" justify="space-between" gutter={16}>
                <Col
                    span={2}
                    xs={{order: 2, span: 12}}
                    sm={{order: 1, span: 2}}
                    lg={{span: 1}}
                >
                    <Button
                        className={cn(s.arrow, s.arrowLeft)}
                        type='text'
                        shape="circle"
                        icon={<span>&larr;</span>}
                        onClick={prev}
                    />
                </Col>

                <Col
                    flex={"auto"}
                    xs={{span: 24, order: 1}}
                    sm={{span: 20, order: 2}}
                >
                    <Carousel
                        ref={carouserRef}
                        className={s.carousel}
                        autoplay
                        dots={false}
                    >
                        {
                            reviews.map((review, i) => {
                                return (
                                    <div key={i} className={s.reviewContainer}>
                                        <Avatar size={100} src={review.img} />
                                        <div className={s.reviewName} >{review.name}</div>
                                        <Paragraph
                                            ellipsis={{rows: 7, tooltip: review.review}}
                                        >{review.review}</Paragraph>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </Col>

                <Col
                    order={3}
                    xs={12}
                    sm={2}
                    lg={1}
                >
                    <Button
                        type='text'
                        className={cn(s.arrow, s.arrowRight)}
                        shape="circle"
                        icon={<span>&rarr;</span>}
                        onClick={next}
                    />
                </Col>

            </Row>
        </div>

    )
}

export default Reviews
