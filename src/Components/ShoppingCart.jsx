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
            <Link className="flex justify-center bg-white text-[35px] mt-[35px] pt-[200px] pb-[300px]" to="/Shop">No Items Go back to Shop</Link>
            
            {/* COPYRIGHT SECTION*/}
            <div>
                <Copyright />
            </div>
        </div>
    )
}

export default ShoppingCart;