import React, { useState } from 'react'

export default function Rform() {

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [role, setrole] = useState("");

  const userRegister=(e)=>{
    e.preventDefault()
try{
    const user={fname,lname,email,password,role}
    console.log(user)
    fetch("http://localhost:8080/user/register",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
  }).then((result)=>{
    result.json().then((res)=>{
        if(res.email === email){
          if(res.password === password){
            sessionStorage.setItem("email", res.email);
            sessionStorage.setItem("password", res.password);
            sessionStorage.setItem("fname", res.fname);
            sessionStorage.setItem("lname", res.password);
            sessionStorage.setItem("id", res.id);
            sessionStorage.setItem("role", res.role);
            if(sessionStorage.getItem("email")!==null){
              alert("user registration Successfull");
              window.location.replace("/Login");
            }
        }  
        }
    })
  })
      setfname("");
      setlname("");
      setemail("");
      setpassword("");
      setrole("");
}
catch{
alert("Registration Failed")
}
}

  return (
    <>
    <div style={{width:'500px', height:'800px', margin:'auto', display:'table'}}>
    <h4>PLEASE ENETER DETAILS TO REGISTER</h4>
    <form class="row g-3">
  <div class="col-md-6">
    <label for="fname" class="form-label">FIRST NAME</label>
    <input type="text" class="form-control" id="fname" name='fname' value={fname} onChange={(event) => {
            setfname(event.target.value);
          }} />
  </div>
  <div class="col-md-6">
    <label for="lname" class="form-label">LAST NAME</label>
    <input type="text" class="form-control" id="lname" name='lname' value={lname} onChange={(event) => {
            setlname(event.target.value);
          }} />
  </div>
  <div class="col-12">
    <label for="email" class="form-label">EMAIL</label>
    <input type="email" class="form-control" id="email" name='email' value={email} onChange={(event) => {
            setemail(event.target.value);
          }} />
  </div>
  <div class="col-12">
    <label for="password" class="form-label">PASSWORD</label>
    <input type="password" class="form-control" id="password" name='password' value={password} onChange={(event) => {
            setpassword(event.target.value);
          }} />
  </div>
  <div class="col-md-4">
    <label for="role" class="form-label">ROLE</label>
    <select id="role" class="form-select" name='role' value={role} onChange={(event) => {
            setrole(event.target.value);
          }} >
      <option selected>Choose...</option>
      <option>CUSTOMER</option>
      <option>SHOPKEEPER</option>
    </select>
  </div>
  <div class="col-12">
    <button type='button' onClick={userRegister} class="btn btn-primary">Sign in</button>
  </div>
</form>
    </div>
    </>
  )
  
}
