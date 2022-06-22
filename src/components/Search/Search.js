import Tippy from '@tippyjs/react/headless';
import axios from 'axios';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss';
import { SearchBtn } from '../Icons';
import ProperWrapper from '~/components/ProperWrapper';
import AccountItem from '../AccountItem';
import { useEffect, useRef, useState } from 'react';
import useDebounce from '~/hooks/useDebounce';
const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [showSearchResult, setShowSearchResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const deBounced = useDebounce(inputValue, 500);

    useEffect(() => {
        if (!deBounced.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        axios
            .get('https://tiktok.fullstack.edu.vn/api/users/search', {
                params: {
                    q: deBounced,
                    type: 'less',
                },
            })
            .then((api) => {
                setSearchResult(api.data.data);
                setLoading(false);
            })
            .catch(() => {
                console.log('API');
            });
    }, [deBounced]);

    return (
        <div className={cx('wrapper')}>
            <Tippy
                visible={showSearchResult && searchResult.length > 0}
                onClickOutside={() => {
                    setShowSearchResult(false);
                }}
                interactive
                placement="bottom"
                render={(attrs) => (
                    <div className={cx('tippy-box')} tabIndex="-1" {...attrs}>
                        <ProperWrapper>
                            <h4 className={cx('title')}>Accounts</h4>
                            <div className={cx('list-item')}>
                                {searchResult.map((item) => (
                                    <AccountItem key={item.id} data={item} />
                                ))}
                            </div>
                        </ProperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        onFocus={() => {
                            setShowSearchResult(true);
                        }}
                        value={inputValue}
                        onChange={(e) => {
                            const searchValue = e.target.value;
                            if (!searchValue.startsWith(' ')) {
                                setInputValue(searchValue);
                            }
                        }}
                        className={cx('input')}
                        placeholder="Search accounts and videos"
                    />
                    {loading && (
                        <button className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                    )}
                    {!!inputValue && !loading && (
                        <button
                            onClick={() => {
                                setInputValue('');
                                setSearchResult([]);
                                inputRef.current.focus();
                            }}
                            className={cx('close')}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    <button
                        onClick={() => {
                            inputRef.current.blur();
                        }}
                        onMouseDown={(e) => {
                            e.preventDefault();
                        }}
                        className={cx('search-btn')}
                    >
                        <SearchBtn />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
