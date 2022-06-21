import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from '~/components/Menu/Menu.module.scss';

const cx = classNames.bind(styles);
function MenuHeader({ data, onback }) {
    return (
        <div className={cx('header-wrapper')}>
            <span onClick={onback} className={cx('header-icon')}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </span>
            <Button className={cx('title')}>{data}</Button>
        </div>
    );
}

export default MenuHeader;
