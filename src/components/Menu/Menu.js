import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import ProperWrapper from '~/components/ProperWrapper';
import styles from './Menu.module.scss';
import MenuHeader from './MenuHeader';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, data }) {
    const [history, setHistory] = useState([{ data: data }]);
    let current = history[history.length - 1];
    return (
        <Tippy
            delay={[0, 500]}
            hideOnClick={false}
            onHide={() => {
                setHistory(history.slice(0, 1));
            }}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('tippy-box')} tabIndex="-1" {...attrs}>
                    <ProperWrapper className={cx('custom')}>
                        {history.length > 1 && (
                            <MenuHeader
                                onback={() => {
                                    setHistory(history.slice(0, history.length - 1));
                                }}
                                data={current.title}
                            />
                        )}
                        {current.data.map((item, index) => (
                            <MenuItem
                                key={index}
                                nextMenu={() => {
                                    if (item.children) {
                                        setHistory((prev) => [...prev, item.children]);
                                    }
                                }}
                                leftIcon={item.icon}
                            >
                                {item.title}
                            </MenuItem>
                        ))}
                    </ProperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
