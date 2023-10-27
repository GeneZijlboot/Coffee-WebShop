import { useState , useEffect } from 'react';
import ProductCard from '../Products/ProductCard';
import Copyright from './Copyright';

function Shop() {
    const [users, setUsers] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users', {mode: 'cors'})
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
            <div className="bg-[#f4f4f4]">
                {isPending && <div className='flex justify-center text-[25px] mt-[35px] pt-[200px] pb-[250px]'>Loading...</div>}
                {error && <div className='flex justify-center text-[25px] mt-[35px] pt-[200px] pb-[250px]'>A network error was encountered!</div>}
                <ProductCard users={users} />
            </div>
            <div>
                <Copyright />
            </div>
        </div>
    )
}

export default Shop;