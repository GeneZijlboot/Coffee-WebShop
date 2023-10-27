function ProductCard({users}) {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id, image_url , name} = curUser;
                    return (
                        <div key={id} className="bg-[#1e1e1e] m-[50px] rounded-[20px] hover:scale-110 transform origin-center transition-transform cursor-pointer">
                            <div><img className="bg-white rounded-[15px]" src={image_url}/></div>
                            <div className="text-[25px] text-[white] flex justify-center p-[5px]">{name}</div>
                        </div>
                    )
                })  
            }
        </>
    )
}

export default ProductCard;