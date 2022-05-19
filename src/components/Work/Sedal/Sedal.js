import React from 'react' 
import { useLocation } from 'react-router-dom'

export default function Sedal() {

  const location = useLocation() 
  console.log(location);
  
  return (
    <div>
      <h1>Sedal, l'entreprise qui a commencé tout en bas... Et qui est toujours tout en bas</h1>
      <p>Malgré nos conseils et notre site web créé sur Wix, Sedal semble ne pas vouloir décoller. Mais comme un grand homme et une grande femme l'ont dit, "les derniers seront les premiers".</p>
    </div>
  )
}