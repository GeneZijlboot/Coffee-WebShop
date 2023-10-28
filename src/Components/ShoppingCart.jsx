import Copyright from "./Copyright";
import { Link } from 'react-router-dom';

function ShoppingCart() {
    return (
        <div>
            {/* 
                if(array = ' '){
                    return ( button die naar shop page gaat);
                } else {
                    return ( display ShoppingCart items);
                }
            */}
            <Link to="/Shop">
                <div className="flex justify-center text-[35px] mt-[35px] pt-[200px] pb-[300px]">
                    <button className="bg-red">Go back to Shop</button>
                </div>
            </Link>
            
            {/* COPYRIGHT SECTION*/}
            <div>
                <Copyright />
            </div>
        </div>
    )
}

export default ShoppingCart;