import React from 'react'
import "../CSS/style.css"
const bearsPicture =new URL("../image/pexels.jpg",import.meta.url)
export default function Content() {
  return (
    <div className="background-Image">
      <img src={bearsPicture}/>
    </div>
  )
}
