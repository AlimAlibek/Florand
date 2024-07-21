import { Card, Grid, Button } from "antd";
import LargeImage from '../../assets/image/img-main-1200.jpg';
import MediumImage from '../../assets/image/img-main-640.jpg';
import SmallImage from '../../assets/image/img-main-320.jpg';
import ArrowRight from '../../assets/icons/arrowRight.svg'
import s from './style.module.css'

const {useBreakpoint} = Grid;

const MainBanner: React.FC = () => {

    const {lg, sm} = useBreakpoint();

    return (
        <div className={s.container}>
            <Card
                className={s.card}
                cover={
                    !sm ? <img alt="example" src={SmallImage} /> :
                    !lg ? <img alt="example" src={MediumImage} />
                    : <img alt="example" src={LargeImage} />
                }
                styles={{
                    body: {position: 'absolute', top: 0, bottom: 0, width: '100%'},
                }}
            />


            <div className={s.titleContainer}>
                <h1>
                    Доставка цветов  из Голландии, Эквадора,  Кении, Колумбии
                </h1>
                <p>
                    Florand – новый формат цветочной логистики
                </p>
            </div>

            <div className={s.buttonContainer}>
                <p>
                    Оставьте заявку <br/> на доставку цветов
                </p>
                <Button icon={<img className={s.buttonIcon} src={ArrowRight} />} iconPosition="end" type="primary" size="large">Оставить заявку</Button>
            </div>
        </div>
    )
}

export default MainBanner;
