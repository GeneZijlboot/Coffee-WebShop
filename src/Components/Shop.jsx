import { useState, useEffect } from 'react';
import Copyright from './Copyright';

function Shop() {
    const [ispending, setIspending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://github.com/ashleypatricks/coffee', {
            method:'GET'
        })
        .then((res) => {
            if(!res.ok){
                throw Error('Could not fetch the data for that resource');
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setIspending(false);
            setError(null);
        })
        .catch((error) => {
            console.log(error);
            setError(error);
            setIspending(false);
        });
    }, [])

    return (
        <div>
            <div className="bg-[#f4f4f4]">
                <p className="flex justify-center mt-[200px]">on the Shop Page</p>
            </div>
            
            {/* COPYRIGHT SECTION*/}
            <div>
                <Copyright />
            </div>
        </div>
    )
}

export default Shop;