import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import image from '~/assets/images/index';
import config from '~/config';
import Search from '~/components/Search';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home}>
                    <img src={image.logo} alt="Tiktok" />
                </Link>
                <Search />
                <div className={cx('action')}>
                    <Button leftIcon={<FontAwesomeIcon icon={faAdd} />} text>
                        Upload
                    </Button>
                    <Button primary>Login</Button>
                    <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
