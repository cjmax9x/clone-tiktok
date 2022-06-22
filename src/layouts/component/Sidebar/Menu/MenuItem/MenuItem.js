import { NavLink } from 'react-router-dom';
import styles from '~/layouts/component/Sidebar/Menu/Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuItem({ children, to, icon, activeIcon }) {
    return (
        <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}> {children}</span>
        </NavLink>
    );
}

export default MenuItem;
