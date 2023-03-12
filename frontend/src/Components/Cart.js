import React, { useEffect, useState } from 'react'

export default function CART() {
  const [total, settotal] = useState(0);
  const [amount, setamount] = useState(0);
  const [list, setlist] = useState([]);
  const [data, setdata] = useState("Please Login First");
  let cart = {}
  try {

    useEffect(() => {
      if(sessionStorage.getItem("email")!==null){
        setdata("");
      }
      fetch("http://localhost:8080/cart/FindlistByUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }).then((result) => {
        result.json().then((res) => setlist(res))
      }
      )
    }, [total])

    let id = sessionStorage.getItem("id")
    const data = { id }

    fetch("http://localhost:8080/cart/FindByUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then((result) => {
      result.json().then((res) => {
        cart.id = res.id
        cart.total = res.total
        for (var i = 0; i < res.list.length; i++) {
          list[i] = res.list[i]
        }
        setamount(res.amount)
        settotal(res.total)
      }
      )
    })
  }
  catch {
    alert("something went wrong");
  }

  const placeOrder = (e) => {
    e.preventDefault()
    try {
      let user = sessionStorage.getItem("id")
      const users = { user, amount , total }
      fetch("http://localhost:8080/cart/placeOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(users)
      })
    } catch {

    }
  }
  return (
    <div>
    <div style={{margin:'auto', display:'table'}}>
      <h3>{data}</h3>
    </div>
      
      <div style={{ margin: 'auto', display: 'table' }}>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th>PRODUCT NAME</th><th>PRODUCT PRICE</th>
            </tr>
          </thead>
          <tbody>
            {list.map((list) => {
              return (<tr>
                <td>{list.product.productname}</td><td>{list.product.price}</td>
              </tr>)
            })}
            <tr>
              <td><button className='btn btn-success' onClick={placeOrder} >Place Order for Amount</button></td><td>{amount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}