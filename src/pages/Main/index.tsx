import {Space} from 'antd'
import MainBanner from "../../components/MainBanner"
import Advantages from '../../components/Advantages';
import ServicesGrid from '../../components/ServicesGrid';

import s from './style.module.css'
import Reviews from '../../components/Reviews';
import TheForm from '../../components/Form';

const Main: React.FC = () => {

    return (
        <Space direction='vertical' size={70} className={s.mainSpace}>
           <MainBanner />

           <div className={s.mainContainer}>
                <Advantages />
           </div>

           <ServicesGrid />

           <Reviews />

           <div id='form'>
             <TheForm />
           </div>

        </Space>
    )

}

export default Main;
