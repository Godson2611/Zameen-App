import React from "react";

const AgentCard = () => {
  return (
    <div className="card border-0 mx-3 rounded-5">
      <div className="ratio ratio-1x1 rounded-circle">
        <img
          src="https://s3-alpha-sig.figma.com/img/3e23/7d30/065a7089938b45eecb5d4d9ab46f3daf?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BOaKszHib6CqtIBM-oblwK3zDqKrznRsqWU3n3NzUwkQmOgOMmtEOhVYVoB60vMcJ~Ho~LiFkLGCJm2BdV3OP8MMZpOsl3f93FZdIrItq86h3CrQW4w5JwAdEkER9FnMyz3W6lKiIc4ZPHlqer2IanBu336miCLl~vlSwrxhsGpsq3iNcIi4jI1zCJwlYFLi-j~LieWekUh3n5kuxfM-eAvSIOiJqHZ~ldrJWsC2BLPxz7rN4KuwKKJkrze7z9jkLWv5Av8MYdpF0pvsjXnRKClybevU1iZ2hI8Ak4fbtwbv-xgp5RJhLzG8h6dkMHiMRt9Q5vQRaHbxCze0YXvB7A__"
          className="card-img-top img-fluid rounded-circle object-fit-cover w-50 h-50 top-50 start-50 translate-middle"
          alt="..."
        />
      </div>
      <div className="container">
        <div className="card-body text-center">
          <h3 className="card-title fw-normal">Card title</h3>
          <div className="row g-2">
            <div className="col-12">
              <p className="card-text text-muted">12 Properties | Mysuru</p>
            </div>
            <div className="col-12 my-2">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <i class="fa-solid fa-star text-warning"></i>
                </li>
                <li className="list-inline-item">4.7 Ratings (236)</li>
              </ul>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <button className="btn bg__blue text-white w-100 me-3">
              Contact
            </button>
            <button className="btn bg__gray blue">
              <i class="fa-solid fa-share"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
