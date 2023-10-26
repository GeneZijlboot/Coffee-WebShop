import { Link } from 'react-router-dom';
import './index.css';

function NavBar() {
    return (
        <div className="flex justify-center bg-[#8aaac7] gap-[100px] pt-[30px] m-0">
            <Link className='HyperLink' to="/">Home</Link>
            <Link className='HyperLink' to="/Shop">Shop</Link>
            <Link className='HyperLink' to="/ShoppingCart">Cart</Link>
        </div>
    )
}

export default NavBar;