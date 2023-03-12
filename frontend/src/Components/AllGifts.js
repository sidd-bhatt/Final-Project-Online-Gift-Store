import React, { useEffect, useState } from 'react'




export default function AllGifts() {
const [gifts, setgifts] = useState([]);
const [check, setcheck] = useState("");
const user = sessionStorage.getItem("id")
function addtocart(id){
        try{
            let product = id;
            const cart={product, user}
            console.log("cart id is " +cart.product+ " user id is "+ cart.user);
            fetch("http://localhost:8080/cart/addToCart",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(cart)
            }).then(()=>alert("Product Added To Cart"));
        }
    catch {
        alert("something went wrong");
    }

}

    useEffect(()=>{
        try {
            fetch("http://localhost:8080/product/getlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            }).then((result)=> {
                result.json().then((res)=> setgifts(res))
                console.log(gifts);
            })
        }
        catch {
            alert("something went wrong");
        }    
    },[check])

    return (
    <div style={{margin:'auto', display:'table'}}>
        <input value={check} type={'checkbox'} onChange={(event)=> {setcheck(event.target.value)}} hidden/>
        <table class="table">
        <thead class="thead-dark">
            <tr>
                <th>PRODUCT NAME</th><th>PRODUCT PRICE</th><th></th>
            </tr>
        </thead>
        <tbody>
            {gifts.map((gifts)=>(
                <tr>
                    <td>{gifts.productname}</td><td>{gifts.price}</td><td><button onClick={()=>addtocart(gifts.id)}>ADD TO CART</button></td>
                </tr>
            ))}
        </tbody>
        </table>
    </div>
  )
}
