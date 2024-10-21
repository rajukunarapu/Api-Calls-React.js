function Product({id,price,title,category}){
    return(
        <>
            <h1>Product Id:</h1>
            <p>{id}</p>
            <h1>Product Price:</h1>
            <p>{price}</p>
            <h1>Product Title:</h1>
            <p>{title}</p>
            <h1>Product Category:</h1>
            <p>{category}</p>
        </>
    )
}

export default Product