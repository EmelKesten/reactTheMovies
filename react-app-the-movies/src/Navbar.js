import React from 'react'


function NavBar(){
    return <div>
    <nav class="navbar navbar-expand-lg nav-light bg-black position-fixed wide">
          <div class="container-fluid">
            <a class="navbar-brand clr-blue" href="#top">The Movies</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon navbar-light"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a
                    class="nav-link clr-blue"
                    aria-current="page"
                    href="#mostPopular"
                    >Most Popular</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link clr-blue" href="#nowPlaying"
                    >Now Playing In Cinema</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link clr-blue" href="#upComing">Up Coming</a>
                </li>
              </ul>
              <div class="d-flex">
                <input
                  class="form-control bg-yay"
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