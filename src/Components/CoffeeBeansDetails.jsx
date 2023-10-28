import useFetch from '../useFetch';
import { useParams }  from 'react-router-dom';
import Copyright from './Copyright';

function CoffeeBeansDetails() {
    const { id } = useParams()
    const { Coffee, error, isPending } = useFetch('https://fake-coffee-api.vercel.app/api/' + id);

    return (  
        <div className="blog-details bg-white">
            {isPending && <div className='bg-[#f4f4f4] flex justify-center text-[30px] mt-[35px] pt-[300px] pb-[300px]'>Loading Specific Coffee...</div>}
            {error && <div className='bg-[#f4f4f4] flex justify-center text-[30px] mt-[35px] pt-[300px] pb-[300px]'>A network error was encountered</div>}
            { Coffee && (
                Coffee.map((CoffeeInfo) => {
                    return (
                        <div>
                            <div className='flex justify-center'>
                                <div key={CoffeeInfo.id} className="grid grid-cols-2 w-[1200px] pt-[100px] pb-[100px]">
                                    <div><img className="pb-[50px]" src={CoffeeInfo.image_url}/></div>
                                    <div className='grid text-[20px] w-[400px]'>
                                        <p><strong>Name: </strong>{CoffeeInfo.name}</p>
                                        <p><strong>Description:</strong></p>
                                        <p>{CoffeeInfo.description}</p>
                                        <p><strong>Region: </strong>{CoffeeInfo.region}</p>
                                        <p><strong>Weight: </strong>{CoffeeInfo.weight} gram</p>
                                        <p><strong>Roast level: </strong>{CoffeeInfo.roast_level}</p>
                                        <p><strong>Price: </strong>${CoffeeInfo.price}</p>
                                        <button className='BuyButton'>Buy</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Copyright />
                            </div>
                        </div>
                    )
                })
            )}
        </div>
    );
}
 
export default CoffeeBeansDetails;