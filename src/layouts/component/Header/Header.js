import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import image from '~/assets/images/index';
import config from '~/config';
import Search from '~/components/Search';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAdd,
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Menu from '~/components/Menu';
import { Inbox, Message } from '~/components/Icons';
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
const MENU_USER = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
    },
    ...MENU_ITEM,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        separate: true,
    },
];
function Header() {
    const currentUser = true;
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
                    {!currentUser ? (
                        <Button primary>Login</Button>
                    ) : (
                        <>
                            <Tippy content="Message" placement="bottom" delay={[0, 300]}>
                                <button className={cx('user-icon')}>
                                    <Message height="2.6rem" width="2.6rem" />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom" delay={[0, 300]}>
                                <button className={cx('user-icon')}>
                                    <Inbox height="3.2rem" width="3.2rem" />
                                </button>
                            </Tippy>
                        </>
                    )}

                    <Menu data={currentUser ? MENU_USER : MENU_ITEM}>
                        {currentUser ? (
                            <span className={cx('user-login')}>
                                <img
                                    src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-1/275429987_1333478183793472_1260258218580277077_n.jpg?stp=dst-jpg_p240x240&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=R1Zz2Mho_HQAX9iimUA&_nc_ht=scontent.fhan5-9.fna&oh=00_AT8aVEdpVLOmuzb5dcHWpAM7NgGwJoJVLhg_utIfnjPGvQ&oe=62B62370"
                                    className={cx('user-logo')}
                                />
                            </span>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
