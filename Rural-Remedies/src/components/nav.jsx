import { Link} from "react-router-dom";
import { useAuth } from "../store/auth";





function Nav() {
  

  console.log(prompt)
  const { isLoggedIn} = useAuth(); // Destructure the logoutUser function from the useAuth hook


 

  return (
    <>
      <nav className="navbar navbar-expand-lg nav-bg">
        <div className="container-fluid">
          <img className="logo" src="src/assets/logo.webp" alt="Logo" />
          <h2 className="Nav-title text-white">Remedies</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link nav-link1 text-white active d-block" aria-current="page" to="/">
                  Home
                </Link>

              </li>
            
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  About
                </Link>
              </li>


              <li className="nav-item">
                <Link className="nav-link text-white" to="/allPost">
                  View Remedies
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <form className="d-flex search align-items-center section2" role="search">
           

    <input
      className="form-control me-3 h-25 w-50"
      type="search"
      placeholder="Search Remedies"
      aria-label="Search"
      
    />
    <p className="btn btn-outline-light search-btn" type="submit">
      Search
    </p>



              {isLoggedIn ? (
                <>
                 <Link to='logout'> <button
                   className="text-decoration-none mx-2 h-25 btn  btn-outline-dark search-btn text-white"
                    type="button"
                    // Add onClick handler for logout button
                  >
                    LOGOUT
                  </button></Link>
                </>
              ) : (
                <>
                  <p className="mx-2 my-0 " type="button">
                    <Link className="text-decoration-none text-white d-flex " to="/login">
                      Login
                    </Link>
                  </p>
                  <p className="  my-0 " type="button">
                    <Link className="text-decoration-none text-white ms-0" to="/signup">
                      Sign-Up
                    </Link>
                  </p>
                </>
              )}  
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
