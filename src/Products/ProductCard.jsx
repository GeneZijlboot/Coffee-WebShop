function ProductCard({users}) {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id, image_url, name, description} = curUser;
                    return (    
                            <div key={id} className="
                                flex
                                w-[400px]
                                h-[400px]
                                border-[solid] 
                                border-[5px]
                                border-[black]
                            ">
                                <div><img className="flex justify-start" src={image_url}/></div>
                                <div>
                                    <p>{name}</p>
                                    <p>{description}</p>
                                </div>
                            </div>
                    )
                })  
            }
        </>
    )
}

export default ProductCard;
{/*
<div className="flex text-center gap-[200px]" key={id}>
<p>{id}</p>
<p>{name}</p>
<p>{description}</p>
<button className="text-[blue]" onClick={() => {
    console.log(id);
    console.log(name);
    console.log(email);
}}>buy</button>
</div>
 */}