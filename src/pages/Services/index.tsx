import { Space } from "antd"
import ServicesList from "../../components/ServicesList";
import s from './style.module.css'
import Heading1 from "../../components/Heading1";
import Breadcrumb from "../../components/Breadcrumb";
import TheForm from "../../components/Form";


const Services: React.FC = () => {
    return (
        <Space direction="vertical" size={54} className={s.mainSpace}>
            <div className={s.mainContainer}>
                <Breadcrumb />
                <Heading1>Наши услуги</Heading1>
                <ServicesList />
            </div>

            <TheForm />
        </Space>
    )
}

export default Services
