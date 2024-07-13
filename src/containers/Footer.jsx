import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container mt-sm-5">
        <div className="row container-fluid">
          <div className="d-none d-sm-block col-sm-7 col-lg-5 pe-lg-5 col-xl-4">
            <a className="navbar-brand d-flex flex-wrap mb-3" href="#">
              <img
                src="https://s3-alpha-sig.figma.com/img/cfa2/4566/68b20b1aa02a31b3911a6062d675e68b?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MJA9hwVHJEp87X7SfZy6cq1y3tqXdcjJuuowjadCp6--~4A5kA1YN6FebA34~oRABvuH8mLqfgdceqYGRcym8U2IvaUJHpH~x-GV8Hp~m5nc3B0uHWprX8LjCo-riM69GSEKlubQAZGX0IJJriTVFD2XDdHBkcv4unOWQJDnzpcuzFmN8AwR4X6OMZ0o5oFSRHijfLiQwPRFfeQZfzRujqOngpSZa~JAMWnjNsTykZW9-OhecdzCIG3pi0Hm75w4~RrzAqsXAvZnnY1IK6t5twzdUBR8UgQAfXNXB1SL4~xNA8SatDfYk1zUWT3EzIlf66w1fpbq6lLCNtCIseis-Q__"
                alt="logo"
                width="200"
                height="auto"
                className="img-fluid"
              />
            </a>
            <p className="small text-muted lh-lg">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
            <h3 className="blue mb-3">Subscribe Us</h3>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter your email address"
                aria-label="Enter your email address"
                aria-describedby="button-addon2"
              />
              <button
                class="btn bg__green text-white rounded"
                type="button"
                id="button-addon2"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="d-none d-sm-block col-sm-5 col-lg-3 col-xl-3">
            <h3 className="blue">Quick Links</h3>
            <ul className="list-group gap-2">
              <li className="list-inline-item text-muted">Blogs</li>
              <li className="list-inline-item text-muted">About Us</li>
              <li className="list-inline-item text-muted">Contact Us</li>
              <li className="list-inline-item text-muted">Privacy Policy</li>
              <li className="list-inline-item text-muted">Refund Policy</li>
              <li className="list-inline-item text-muted">Terms & Condition</li>
            </ul>
          </div>
          <div className="d-none d-sm-block mt-4 mt-lg-0 col-lg-4 col-xl-5">
            <h3 className="blue">Top Localities</h3>
            <div className="d-flex flex-wrap">
              <p className="pe-2 text-muted">Properties in New Delhi</p>
              <p className="pe-2 text-muted">Property in Mumbai</p>
              <p className="pe-2 text-muted">Property in Chennai</p>
              <p className="pe-2 text-muted">Property in Bangalore</p>
              <p className="pe-2 text-muted">Property in Ahmedabad</p>
              <p className="pe-2 text-muted">Property in Gurgaon</p>
              <p className="pe-2 text-muted">Property in Hyderabad</p>
            </div>
          </div>
        </div>
        <hr className="d-none d-sm-block" />
        <div className="container d-none d-sm-flex align-items-center justify-content-between px-2">
          <p className="fs-5">© 2021 All right reserved.</p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <i class="fa-brands fa-facebook-f blue fs-4"></i>
            </li>
            <li className="list-inline-item">
              <i class="fa-brands fa-instagram blue fs-4"></i>
            </li>
            <li className="list-inline-item">
              <i class="fa-brands fa-x-twitter blue fs-4"></i>
            </li>
            <li className="list-inline-item">
              <i class="fa-brands fa-linkedin-in text-primary fs-4"></i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
