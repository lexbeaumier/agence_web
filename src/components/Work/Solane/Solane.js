import React from 'react' 
import { useLocation } from 'react-router-dom'

export default function Solane() {

  const location = useLocation() 
  console.log(location);
  
  return (
    <div>
      <h1>Solane est le premier vendeur de fraises du Poitou-Charentes</h1>
      <p>Et c'est grâce à nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du marché ont fonctionné.</p>
    </div>
  )
}