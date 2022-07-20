import React from 'react'

export default function Foote() {
  let footerstyle={
  position:"relative",
  width:"100%",
  top:"90vh",
  }
  return (
    
    <footer className="bg-dark text-light py-3" style={footerstyle} >
        <p className="text-center">
    Copyright &copy; MyBooks.com
      
    </p>
    </footer>
    
  )
}
