import { useState , useEffect } from 'react';
import ProductCard from '../Products/ProductCard';
import Copyright from './Copyright';

function Shop() {
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

    return (
        <div>
            {isPending && <div className='bg-[#f4f4f4] flex justify-center text-[30px] mt-[35px] pt-[300px] pb-[300px]'>Loading...</div>}
            {error && <div className='bg-[#f4f4f4] flex justify-center text-[30px] mt-[35px] pt-[300px] pb-[300px]'>A network error was encountered!</div>}
            <div className="grid grid-cols-3 bg-[#f4f4f4] mt-[30px]">
                <ProductCard users={users} />
            </div>
            <div>
                <Copyright />
            </div>
        </div>
    )
}

export default Shop;