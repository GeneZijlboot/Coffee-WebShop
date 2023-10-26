import Copyright from "./Copyright";

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
            <div className="bg-[#f4f4f4]">
                <p className="flex justify-center mt-[200px]">on the ShoppingCart Page</p>
            </div>
            
            {/* COPYRIGHT SECTION*/}
            <div>
                <Copyright />
            </div>
        </div>
    )
}

export default ShoppingCart;