import { Link } from 'react-router-dom';
import './index.css';

function NavBar() {
    return (
        <div className="flex justify-center gap-[50px] mt-[25px]">
            <Link className='HyperLink' to="/">Home</Link>
            <Link className='HyperLink' to="/Shop">Shop</Link>
            <Link className='HyperLink' to="/ShoppingCart">Cart</Link>
        </div>
    )
}

export default NavBar;