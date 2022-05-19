import React from 'react' 
import {Link, Outlet } from 'react-router-dom'
 
export default function Work() {
  return (
    <div>
      <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
      <p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
      <nav>
        <Link to="/Work/Platon">Platon </Link>
        <Link to="/Work/Sedal">Sedal </Link>
        <Link to="/Work/Solane">Solane </Link>

      </nav>
      <Outlet />
    </div>
  )
}