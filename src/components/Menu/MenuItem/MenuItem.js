import classNames from 'classnames/bind';
import styles from '~/components/Menu/Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ children, leftIcon, nextMenu }) {
    return (
        <Button leftIcon={leftIcon} onClick={nextMenu} className={cx('item')}>
            {children}
        </Button>
    );
}

export default MenuItem;
