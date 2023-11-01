import React from 'react';
import { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import Copyright from "./Copyright";

function ShoppingCart({ SpecificCoffee, handleDeleteProduct , RemoveCartContent , TotalPrice }) {
    
    if (SpecificCoffee.length === 0){
        return(
            <div>
                <div className="flex justify-center m-[250px]">
                    <div className="flex flex-col gap-[15px] justify-center">
                        <p className="text-[30px]">Your Cart Is Empty</p>
                        <Link className="flex justify-center" to="/Shop">
                            <button className="NullButton">Shop now</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <Copyright />
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className="grid grid-cols-3 mt-[30px]">
                    {SpecificCoffee.map((product, index) => (
                        <div key={index} className="bg-[#1e1e1e] m-[50px] rounded-[20px]">
                            <div><img className="bg-white rounded-[15px]" src={product.Url}/></div>
                            <div className='flex justify-evenly'>
                                <div className="text-[25px] text-[white] flex justify-center p-[5px]">{product.Name}</div>
                                <p className='Devider'>|</p>
                                <div className="text-[25px] text-[white] flex justify-center p-[5px]" >${product.Price}</div>
                                <p className='Devider'>|</p>
                                <button className="text-[25px] text-[white] flex justify-center p-[5px]" onClick={() => handleDeleteProduct(index)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='Sum'></div>
                
                <div className='flex gap-[20px] justify-end mb-[20px]'>
                    <p className='text-[25px]'>Total :${TotalPrice}</p>
                    <p className='text-[25px]'>|</p>
                    <Link to="/"><p onClick={RemoveCartContent} className='CheckoutBtn'>Checkout</p></Link>
                </div>
                <div>
                    <Copyright />
                </div>
            </div>
        )
    }
}

export default ShoppingCart;