import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss';
import { SearchBtn } from '../Icons';
import ProperWrapper from '~/components/ProperWrapper';
import AccountItem from '../AccountItem';
const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('wrapper')}>
            <Tippy
                interactive
                placement="bottom"
                render={(attrs) => (
                    <div className={cx('tippy-box')} tabIndex="-1" {...attrs}>
                        <ProperWrapper>
                            <h4 className={cx('title')}>Accounts</h4>
                            <div className={cx('list-item')}>
                                <AccountItem />
                                <AccountItem />
                            </div>
                        </ProperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input className={cx('input')} placeholder="Search accounts and videos" />
                    {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <FontAwesomeIcon className={cx('close')} icon={faCircleXmark} /> */}
                    <button className={cx('search-btn')}>
                        <SearchBtn />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
