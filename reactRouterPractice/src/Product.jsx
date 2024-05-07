import { useParams } from "react-router-dom"

export default function Product(props){
    const category = useParams()
    return (
        <div className="product">
            <h3>Name: {props.name}</h3>
            <h3>Category: {category.category}</h3>
            <h3>Price: {props.price}</h3>
        </div>
    )
}