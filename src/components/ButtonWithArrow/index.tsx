import { Button, ButtonProps } from "antd";
import s from './style.module.css';
import cn from "classnames";

const ButtonWithArror: React.FC<ButtonProps> = ({children, size, ...props}) => {

    return (
        <Button
            type="primary"
            icon={<span className={cn(s.icon, size && s[`icon_${size}`])}>&rarr;</span>}
            iconPosition="end"
            size={size}
            {...props}
        >
            {children}
        </Button>
    )
}

export default ButtonWithArror
