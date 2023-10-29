import Copyright from "./Copyright";
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../Products/BoughtProducts';

function ShoppingCart() {
    if(!PRODUCTS.length){
        return (
            <div>
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
    } else {
        return (
            <div>
                {PRODUCTS.map((CoffeeProducts) => (
                    <div key={CoffeeProducts.id}>
                        <p>{CoffeeProducts.id}</p>
                        <p>{CoffeeProducts.url}</p>
                        <p>{CoffeeProducts.name}</p>
                        <p>{CoffeeProducts.price}</p>
                    </div>
                ))}

                {/* COPYRIGHT SECTION*/}
                <div>
                    <Copyright />
                </div>
            </div>
        )
    }
}

export default ShoppingCart;