import { Link } from "react-router-dom";
import s from './style.module.css'

const Logo: React.FC = () => {

    const handleLogoClick = () => {
        window.scrollTo(0, 0)
    }

    return (
        <Link onClick={handleLogoClick} to={'/'} className={s.logoContainer}>
            <div className={s.logo} />
        </Link>
    )
}

export default Logo;
