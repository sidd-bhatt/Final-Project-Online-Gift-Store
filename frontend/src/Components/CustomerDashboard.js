import React from 'react'

export default function CustomerDashboard() {
    let email = sessionStorage.getItem("email");
  return (
    <div>
        <h1>CUSTOMER PORTAL</h1>
        <h2>Welcome {email}</h2>
    </div>
  )
}
