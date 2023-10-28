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
            <div className="flex justify-center m-[250px]">
                <div className="flex flex-col gap-[15px] justify-center">
                    <p className="text-[30px]">Your Cart Is Empty</p>
                    <Link className="flex justify-center" to="/Shop">
                        <button className="NullButton">Shop now</button>
                    </Link>
                </div>
            </div>
            
            {/* COPYRIGHT SECTION*/}
            <div>
                <Copyright />
            </div>
        </div>
    )
}

export default ShoppingCart;