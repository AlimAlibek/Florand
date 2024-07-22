
import Track from '../../assets/icons/Truck.svg';
import Time from '../../assets/icons/Time.svg';
import Flower from '../../assets/icons/Flower.svg';
import Sklad from '../../assets/icons/Sklad.svg';
import Chats from '../../assets/icons/Chats.svg';
import Airline from '../../assets/icons/Airplane.svg';

import s from './style.module.css';

export default [
    {
        label: <span><span className={s.orangeText}>Регулярный</span> выход машин из Нидерландов</span>,
        img: Track
    },
    {
        label: <span><span className={s.orangeText}>Минимальные</span>  сроки доставки</span>,
        img: Time
    },
    {
        label: <span><span className={s.orangeText}>Прекулинг</span>  сохраняет цветы в первозданном виде</span>,
        img: Flower
    },
    {
        label: <span><span className={s.orangeText}>Круглосуточный склад</span>   с температурным режимом хранения</span>,
        img: Sklad
    },
    {
        label: <span>Менеджер <span className={s.orangeText}>всегда на связи</span> и готов ответить на все ваши вопросы</span>,
        img: Chats
    },
    {
        label: <span>Вылеты самолетов из <span className={s.orangeText}> Эквадора, Кении, Колумбии</span></span>,
        img: Airline
    },
]
