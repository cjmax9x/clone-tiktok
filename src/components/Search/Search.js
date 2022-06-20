import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { SearchBtn } from '../Icons';
const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <input className={cx('input')} placeholder="Search accounts and videos" />
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                <FontAwesomeIcon className={cx('close')} icon={faCircleXmark} /> */}
            </div>
            <button className={cx('search-btn')}>
                <SearchBtn />
            </button>
        </div>
    );
}

export default Search;
