import { Link } from "react-router-dom";
import { Button } from "antd";

export default [
    {
        key: '/services',
        label: <Link  to={'/services'} >Услуги</Link>
    },
    {
        key: '/about-us',
        label: <Link  to={'/about-us'} >О компании</Link>
    },
    {
        key: '/contacts',
        label: <Link  to={'/contacts'} >Контакты</Link>
    },
    {
        key: '/job',
        label: <Link  to={'/job'} >Вакансии</Link>
    },
    {
        key: '/cooperations',
        label: <Link  to={'/cooperations'} >Сотрудничество</Link>
    },
    {
        key: '/purchase',
        label: <Button size='small'>Покупка цветов</Button>
    }
]
