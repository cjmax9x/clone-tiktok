import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('logo')}>
                <img
                    className={cx('image')}
                    alt="logo"
                    src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/275429987_1333478183793472_1260258218580277077_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R1Zz2Mho_HQAX8woBhq&_nc_ht=scontent.fhan5-9.fna&oh=00_AT8JfmxeMO4AUoBztyFd05NBL-hRfpw2i-DGaEVhszpsSg&oe=62B646EE"
                />
            </span>
            <span className={cx('account')}>
                <h3 className={cx('title')}>Tung Bui</h3>
                <h4 className={cx('user-name')}>@tungbui</h4>
            </span>
        </div>
    );
}

export default AccountItem;
