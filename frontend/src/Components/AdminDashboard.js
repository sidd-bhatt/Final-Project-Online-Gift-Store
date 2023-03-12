import React, { useState } from 'react'

export default function AdminDashboard() {
    let email = sessionStorage.getItem("email");
    const[categoryname, setcategoryname] = useState("");


    const handlesubmit = (e) =>{
        e.preventDefault()
    try {
        const category = { categoryname }
        console.log(category)
        fetch("http://localhost:8080/admin/addCategory", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(category)
        })
        alert(categoryname + " category Added");
        setcategoryname("");
    } 
    catch {
        alert("something went wrong")
    }
}
    return (
    <div style={{margin:'auto', display:'table', width:'500px', height:'800px'}}>
        <h1>WELCOME {email}</h1>
        <form class="form-floating">
        <input type="text" class="form-control" id="categoryname" value={categoryname} name="categoryname" onChange={(event)=>{setcategoryname(event.target.value)}} required/>
        <label for="categoryname">ENTER CATEGORY NAME</label>
        <button type='button' className='btn btn-success' onClick={handlesubmit} >SUBMIT</button>
        </form>
    </div>
    )
}
