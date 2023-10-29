import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [Coffee, setCoffee] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, {mode: 'cors'})
            .then(res => {
                return res.json();
            })
            .then(data => {
                setCoffee(data)
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
    }, []);

    return {Coffee, isPending, error}
}

export default useFetch;