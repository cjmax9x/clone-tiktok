import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('logo')}>
                <img className={cx('image')} alt="logo" src={data.avatar} />
            </span>
            <span className={cx('account')}>
                <h3 className={cx('title')}>{data.full_name}</h3>
                <h4 className={cx('user-name')}>{data.nickname}</h4>
            </span>
        </div>
    );
}

export default AccountItem;
