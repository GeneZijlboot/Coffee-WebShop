import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [users, setUsers] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://fake-coffee-api.vercel.app/api', {mode: 'cors'})
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setUsers(data)
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
    }, []);

    return {users, isPending, error}
}

export default useFetch;