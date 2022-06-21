import classNames from 'classnames/bind';
import styles from './ProperWrapper.module.scss';

const cx = classNames.bind(styles);
function ProperWrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

export default ProperWrapper;
