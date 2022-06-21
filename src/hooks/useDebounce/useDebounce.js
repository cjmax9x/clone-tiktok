import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [deBounced, setDebounced] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounced(value);
        }, delay);
        return () => {
            clearTimeout(timer);
        };
    }, [value]);
    return deBounced;
}

export default useDebounce;
