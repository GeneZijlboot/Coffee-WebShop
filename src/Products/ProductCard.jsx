import React from 'react';
import { Link } from 'react-router-dom'

function ProductCard({Coffee}) {

    return (
        <>
            {
                Coffee.map((CoffeeInfo) => {
                    return (
                        <div key={CoffeeInfo.id}>
                            <Link to={`/Shop/${CoffeeInfo.id}`}>
                                <div className="bg-[#1e1e1e] m-[50px] rounded-[20px] hover:scale-110 transform origin-center transition-transform cursor-pointer">
                                    <div><img className="bg-white rounded-[15px]" src={CoffeeInfo.image_url}/></div>
                                    <div className="text-[25px] text-[white] flex justify-center p-[5px]">{CoffeeInfo.name}</div>
                                </div>
                            </Link>
                        </div>
                    )
                })  
            }
        </>
    )
}

export default ProductCard;