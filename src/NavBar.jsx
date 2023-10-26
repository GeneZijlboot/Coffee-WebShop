import './index.css';

function NavBar() {
    return (
        <div className="flex justify-center gap-[50px] mt-[25px]">
            <a className='HyperLink'>Home</a>
            <a className='HyperLink'>Shop</a>
            <a className='HyperLink'>Cart</a>
        </div>
    )
}

export default NavBar;