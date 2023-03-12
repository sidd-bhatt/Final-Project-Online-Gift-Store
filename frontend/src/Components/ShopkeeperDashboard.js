import React, { useEffect, useState } from 'react'



export default function ShopkeeperDashboard() {
    let email = sessionStorage.getItem("email");

    const[productname, setproductname]=useState("");
    const[price, setprice]=useState("");
    const[category, setcategory]=useState("");
    const[categories, setcategories]=useState([]);

    useEffect(()=>{
        try {
            fetch("http://localhost:8080/category/getlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            }).then((result)=> {
                result.json().then((res)=> setcategories(res))
                console.log(categories);
                
            })
            
        }
        catch {
            alert("something went wrong");
        }    
    },[productname])

    const addProduct = (e) => {
        e.preventDefault()
        try{
            const product={productname,price,category}
            console.log(product);
            fetch("http://localhost:8080/product/addProduct",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(product)
        }).then(()=>{
            alert("Product Added")
            setproductname("")
            setprice("")
            setcategory("")
        })
        
    }
    catch {
        alert("something went wrong");
    }
}

    return (
        <div>
            <div style={{display:'table', margin:'auto', textAlign:'center'}}>
            <h1>SHOPKEEPER PORTAL</h1>
            <h2>Welcome {email}</h2>
            <form>
                <div style={{display:'flex'}}>
                    <div style={{marginLeft:'10px'}}>
                        <label htmlFor="productname">PRODUCT NAME</label>
                        <input type="text" class="form-control" id="productname" name='productname' value={productname} onChange={(event) => {setproductname(event.target.value)}}/>
                    </div>
                    <div style={{marginLeft:'10px'}}>
                        <label htmlFor="price">PRICE</label>
                        <input type="text" class="form-control" id="price" name='price' value={price} onChange={(event) => {setprice(event.target.value)}}/>
                    </div>
                    <div style={{marginLeft:'10px'}}>
                        <label htmlFor="category">CHOOSE CATEGORY</label>
                        <select id="category" class="form-control" name='category' value={category} onChange={(event) => {setcategory(event.target.value)}}>
                            <option defaultValue={""}>Choose...</option>
                            {categories.map((categories)=>(
                                <option key={categories.id} value={categories.id}>{categories.categoryname}</option>
                            ))}
                        </select>
                    </div>
                    <button style={{height:'50px', margin:'20px'}} type="button" onClick={addProduct} class="btn btn-primary">ADD</button>
                </div>        
            </form>
            </div>
        </div>
    )
}
