function ProductCard({users}) {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id, name, email} = curUser;
                    return (
                        <div className="flex text-center gap-[200px]" key={id}>
                            <p>{id}</p>
                            <p>{name}</p>
                            <p>{email}</p>
                            <button className="text-[blue]" onClick={() => {
                                console.log(id);
                                console.log(name);
                                console.log(email);
                            }}>buy</button>
                        </div>
                    )
                })  
            }
        </>
    )
}

export default ProductCard;
