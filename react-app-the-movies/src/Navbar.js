import React from 'react'


function NavBar(){
    return <div className='nav'>
    <nav className="navbar navbar-expand-lg nav-light bg-black position-fixed wide">
          <div className="container-fluid">
            <a className="navbar-brand clr-blue" href="#top">The Movies</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon navbar-light"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link clr-blue"
                    aria-current="page"
                    href="#mostPopular"
                    >Most Popular</a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link clr-blue" href="#nowPlaying"
                    >Now Playing In Cinema</a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link clr-blue" href="#upComing">Up Coming</a>
                </li>
              </ul>
              <div className="d-flex">
                <input
                  className="form-control bg-yay"
                  id="txt-input"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </div>
          </div>
        </nav>
        </div>
}


export default NavBar