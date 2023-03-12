import React, { useState } from 'react'

export default function LoginFrom() {
    const [email, setemail] = useState("");
    const [password, setpass] = useState("");

    const handleauth =  (e) => {
        e.preventDefault()

        try {
            const admin = { email, password }
            console.log(admin)
            fetch("http://localhost:8080/user/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(admin)
            }).then((result) => {
                result.json().then((res) => {
                    console.log(res);
                    if (res.email === email) {
                        console.log("email varified");
                        if(res.password === password){
                            console.log("password varified");

                            sessionStorage.setItem("email", res.email);
                            sessionStorage.setItem("password", res.password);
                            sessionStorage.setItem("fname", res.fname);
                            sessionStorage.setItem("lname", res.password);
                            sessionStorage.setItem("id", res.id);
                            sessionStorage.setItem("role", res.role);
                            if(sessionStorage.getItem("role") !== null && sessionStorage.getItem("role") === "CUSTOMER" ){
                                alert("Custome Auth Success");
                                window.location.replace("/CustomerDashboard");
                            }
                            else if(sessionStorage.getItem("role") !== null && sessionStorage.getItem("role") === "SHOPKEEPER") {
                                alert("Shopkeeper Auth Success");
                                window.location.replace("/ShopkeeperDashboard")
                            }
                            else {
                                alert("Login Failed");
                            }
                        }
                    }
                })
            })
        }
        catch {
            alert("Auth Failed")
        }
        finally{
            
        }
    }

    return (
        <>
        <div style={{margin:'auto', display:'table'}} >
            <h1>ENTER USER DETAILS</h1>
        </div>
        <div style={{margin:'auto', display:'table', width:'500px', height:'800px'}}>
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" name='email' value={email} onChange={(event) => {
                    setemail(event.target.value);
                }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" name='password' value={password}
                    onChange={(event) => {
                        setpass(event.target.value);
                    }} class="form-control" id="exampleInputPassword1" />
            </div>
            <button onClick={handleauth} type="button" class="btn btn-primary">Submit</button>
        </form>
    </div>
    </>
  )
}
