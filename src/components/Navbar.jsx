import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg mx-sm-5">
      <div className="container-fluid ">
        <a className="navbar-brand d-flex gap-2 flex-wrap" href="#">
          <img
            src="https://s3-alpha-sig.figma.com/img/cfa2/4566/68b20b1aa02a31b3911a6062d675e68b?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MJA9hwVHJEp87X7SfZy6cq1y3tqXdcjJuuowjadCp6--~4A5kA1YN6FebA34~oRABvuH8mLqfgdceqYGRcym8U2IvaUJHpH~x-GV8Hp~m5nc3B0uHWprX8LjCo-riM69GSEKlubQAZGX0IJJriTVFD2XDdHBkcv4unOWQJDnzpcuzFmN8AwR4X6OMZ0o5oFSRHijfLiQwPRFfeQZfzRujqOngpSZa~JAMWnjNsTykZW9-OhecdzCIG3pi0Hm75w4~RrzAqsXAvZnnY1IK6t5twzdUBR8UgQAfXNXB1SL4~xNA8SatDfYk1zUWT3EzIlf66w1fpbq6lLCNtCIseis-Q__"
            alt="logo"
            width="200"
            height="auto"
            className="img-fluid"
          />
          <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Bengaluru
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    open model
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-3 d-none d-lg-flex">
            <li className="nav-item">
              <a className="nav-link text-primary" aria-current="page" href="#">
                Buy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" aria-current="page" href="#">
                Rent
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" aria-current="page" href="#">
                Sell
              </a>
            </li>
          </ul>
        </div>
        <button
          className="btn btn-primary ms-sm-auto px-sm-4 p-sm-2"
          type="submit"
        >
          Post Property
        </button>
        <button
          className="btn btn-outline-primary sm-auto px-sm-3 ms-2 p-sm-2 mt-2 mt-sm-0"
          type="submit"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
