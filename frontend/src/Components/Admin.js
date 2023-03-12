import React, { useState } from 'react'

export default function Adminform() {

    const [email, setemail] = useState("");
    const [password, setpass] = useState("");

    const handleauth = (e) => {
        e.preventDefault()

        try {
            const admin = { email, password }
            console.log(admin)
            fetch("http://localhost:8080/admin/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(admin)
            }).then((result) => {
                result.json().then((res) => {
                    if (res.email === email) {
                        sessionStorage.setItem("email", email);
                        console.log("email varified");
                    }
                    if (res.password === password) {
                        sessionStorage.setItem("password", password);
                        console.log("password varified");
                    }
                })
            })
            alert("Auth Success");
            window.location.replace("/AdminDashboard");

        }
        catch {
            alert("Auth Failed")
        }
    }

    return (
        <>
        <div style={{margin:'auto', display:'table'}} >
            <h1>ENTER ADMIN DETAILS</h1>
        </div>
        <div style={{margin:'auto', display:'table', width:'500px', height:'800px'}}>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" name='email' value={email} onChange={(event) => {
                        setemail(event.target.value);
                    }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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
