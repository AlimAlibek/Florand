import { Link } from "react-router-dom";
import { Button } from "antd";

export default [
    {
        key: '/about-us',
        title: 'О компании',
        label: <Link  to={'/about-us'} >О компании</Link>
    },
    {
        key: '/services',
        title: 'Услуги',
        label: <Link  to={'/services'} >Услуги</Link>
    },
    {
        key: '/contacts',
        title: 'Контакты',
        label: <Link  to={'/contacts'} >Контакты</Link>
    },
    {
        key: '/job',
        title: 'Вакансии',
        label: <Link  to={'/job'} >Вакансии</Link>
    },
    {
        key: '/cooperations',
        title: 'Сотрудничество',
        label: <Link  to={'/cooperations'} >Сотрудничество</Link>
    },
    {
        key: '/purchase',
        title: 'Покупка цветов',
        label: <Button size='small'>Покупка цветов</Button>
    }
]
