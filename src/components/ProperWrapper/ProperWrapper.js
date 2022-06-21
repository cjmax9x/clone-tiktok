import classNames from 'classnames/bind';
import styles from './ProperWrapper.module.scss';

const cx = classNames.bind(styles);
function ProperWrapper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default ProperWrapper;
