
const ItemDetailMini = ({ product }) => {  
    return (
        
        <div className="card mt-4 p-1 text-center shadow bg-body rounded" >
            <img className="card-img-top" src={product.img} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title"> {product.nombre }</h5>
                <span className="text-danger fw-bold ">  USD { product.precio }  </span>
            </div>
            <div className={ product.stock < 1 ? "card-footer bg-danger " : 'card-footer bg-transparent' } >
                <p className={ product.stock < 1 ? "text-white" : ' text-primary' }> {product.stock < 1 ?  "No hay Stock" : "Disponible" }  </p> 
            </div>       
        </div>
    )          
}


export default ItemDetailMini