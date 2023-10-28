import useFetch from '../useFetch';
import { useParams }  from 'react-router-dom';

function CoffeeBeansDetails() {
    const { id } = useParams()
    const { Coffee, error, isPending } = useFetch('https://fake-coffee-api.vercel.app/api/' + id);

    return (  
        <div className="blog-details bg-white">
            {isPending && <div className='bg-[#f4f4f4] flex justify-center text-[30px] mt-[35px] pt-[300px] pb-[300px]'>Loading Coffee...</div>}
            {error && <div className='bg-[#f4f4f4] flex justify-center text-[30px] mt-[35px] pt-[300px] pb-[300px]'>A network error was encountered</div>}
            { Coffee && (
                Coffee.map((CoffeeInfo) => {
                    return (
                        <div key={CoffeeInfo.id} className="grid grid-cols-2">
                            <div><img src={CoffeeInfo.image_url}/></div>
                            <div>{CoffeeInfo.name}</div>
                        </div>
                    )
                })
            )}
        </div>
    );
}
 
export default CoffeeBeansDetails;