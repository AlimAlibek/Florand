import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";
import s from './style.module.css';
import pagePathMap from "../../shared/pagePathMap";

const TheBreadcrumb: React.FC<{light?: boolean}> = ({light}) => {

    const {pathname} = useLocation();
    const items: {title: React.ReactNode, href: string}[] = [];

    pathname.split('/').forEach((path, i) => {
        const prevPath = items[i - 1]?.href || ''

        items.push({
            title: <span className={light ? s.itemTitleLight : s.itemTitleDark}>{pagePathMap[path] || path}</span>,
            href: `${prevPath}${prevPath === '/' ? '' : '/'}${path}`
        })
    });

    return (
        <Breadcrumb
            className={s.breadcrumb}
            separator={<span className={light ? s.itemTitleLight : s.itemTitleDark}>{">"}</span>}
            items={items}
        />
    )
}

export default TheBreadcrumb
