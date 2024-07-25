import {Space} from 'antd'
import MainBanner from "../../components/MainBanner"
import Advantages from '../../components/Advantages';
import ServicesGrid from '../../components/ServicesGrid';

import s from './style.module.css'

const Main: React.FC = () => {

    return (
        <Space direction='vertical' size={70} className={s.mainSpace}>
           <MainBanner />

           <div className={s.mainContainer}>
                <Advantages />
           </div>

           <ServicesGrid />

        </Space>
    )

}

export default Main;
