import s from './style.module.css';

const Heading2: React.FC<{children: React.ReactNode}> = (props) => {

    return (
        <h2 className={s.title}>
            {props.children}
        </h2>
    )

}

export default Heading2;
