import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import config from '~/config';
import { Following, FollowingActive, Home, HomeActive, Live, LiveActive } from '~/components/Icons';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    to={config.routes.home}
                    icon={<Home width="3.2rem" height="3.2rem" />}
                    activeIcon={<HomeActive width="3.2rem" height="3.2rem" />}
                >
                    For You
                </MenuItem>
                <MenuItem
                    to={config.routes.following}
                    icon={<Following width="3.2rem" height="3.2rem" />}
                    activeIcon={<FollowingActive width="3.2rem" height="3.2rem" />}
                >
                    Following
                </MenuItem>
                <MenuItem
                    to={config.routes.live}
                    icon={<Live width="3.2rem" height="3.2rem" />}
                    activeIcon={<LiveActive width="3.2rem" height="3.2rem" />}
                >
                    LIVE
                </MenuItem>
            </Menu>
        </div>
    );
}

export default Sidebar;
