import React from 'react'


export default function Home() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MyBooks</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
      
        <li className="nav-item">
          <a className="nav-link" href="/Profile">Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Search">Search</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/Upload">Upload</a>
        </li> */}
     
      </ul>
      <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <button onClick={<Home/>} className="btn btn-outline-success"  >Logout</button>
      </form>
    </div>
  </div>
</nav>
{/* <Content/> */}
</>
  )
  }
