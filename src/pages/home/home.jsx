function home(){
    return(
        <>
            <div className="container">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
  
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="true">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div id="navb" className="navbar-collapse collapse hide">
    <ul className="navbar-nav">
      <li className="nav-item active">
    
      </li>
     
    </ul>

    <ul className="nav navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="#"><span className="fas fa-user"></span> Sign Up</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><span className="fas fa-sign-in-alt"></span> Login</a>
      </li>
    </ul>
  </div>
</nav>
            </div>
        </>
    )
}

export default home