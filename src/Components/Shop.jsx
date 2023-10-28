import ProductCard from '../Products/ProductCard';
import Copyright from './Copyright';
import useFetch from '../useFetch';

function Shop() {
    const { Coffee, error, isPending } = useFetch('https://fake-coffee-api.vercel.app/api');

    return (
        <div>
            {isPending && <div className='flex justify-center text-[30px] mt-[35px] pt-[300px] pb-[300px]'>Loading Coffee...</div>}
            {error && <div className='flex justify-center text-[30px] mt-[35px] pt-[300px] pb-[300px]'>A network error was encountered</div>}
            <div className="grid grid-cols-3 mt-[30px]">
                <ProductCard Coffee={Coffee} />
            </div>
            <div>
                <Copyright />
            </div>
        </div>
    )
}

export default Shop;