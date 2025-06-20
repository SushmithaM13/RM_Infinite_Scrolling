import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import "./productList.css"

// url="https://dummyjson.com/products"
const Home=()=>{
    const [products, setProducts]=useState([]);

    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then((res)=>{
            console.log(res)
            setProducts(res.data.products)
        }).catch((err)=>{
            console.log(err);
        })
    },[]);

    if(!products){
        return <p>no data</p>
    }

    return(
        <div className="container">
       {products.map((item, index)=>{
            return(
                <div className="card">
                    <h2 key={index}>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>category: {item.category}</p>
                    <p>price: {item.price}</p>
                    <p>ratings: {item.rating}</p>
                    {
                        item.tags.map((tag)=>(
                            <p>{tag}</p>
                        ))
                    }
                </div>
            )
        })}
        </div>
    )
}
export default Home;