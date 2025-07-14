import React from 'react'
import { Outlet } from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function Admin() {
  return (
    <div>
      <Link to="/admin/users">Users</Link>
      <Link to="/admin/products">Products</Link>
      <Link to="/admin/orders">Orders</Link>

      <div>
      <Outlet/>
    </div>
    </div>

  )
}

