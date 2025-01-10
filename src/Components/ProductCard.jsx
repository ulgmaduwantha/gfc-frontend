export function ProductCard(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <h2>price : {props.price}</h2>
            <img src={props.image}></img>
            <button>Add to cart</button>

            
        </div>
    )
}