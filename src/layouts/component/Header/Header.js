import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import image from '~/assets/images/index';
import config from '~/config';
import Search from '~/components/Search';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAdd,
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import Menu from '~/components/Menu';
const cx = classNames.bind(styles);
const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Language',
        children: {
            title: 'Language',
            data: [
                {
                    title: 'English',
                    children: { title: 'Language1', data: [{ title: 'English1' }, { title: 'VietNamese1' }] },
                },
                { title: 'VietNamese' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard',
    },
];
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
                    <Menu data={MENU_ITEM}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
