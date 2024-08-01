import { Result } from "antd"
import ButtonWithArror from "../../components/ButtonWithArrow";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <Result
            status={"error"}
            icon={<span />}
            title="Страница не найдена"
            extra={(
                <Link to={'/'}>
                    <ButtonWithArror size="large" >На главную</ButtonWithArror>
                </Link>
            )}
        />
    )
}

export default NotFound;
