import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import image from '~/assets/images/index';
import config from '~/config';
import Search from '~/components/Search';
const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home}>
                    <img src={image.logo} alt="Tiktok" />
                </Link>
                <Search />
            </div>
        </div>
    );
}

export default Header;
