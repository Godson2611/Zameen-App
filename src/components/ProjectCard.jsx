import React from "react";

const ProjectCard = () => {
  return (
    <div className="container my-3">
      <div className="p-2 card border-0">
        <img
          className="card-img-top img-fluid rounded-3"
          src="https://s3-alpha-sig.figma.com/img/dc65/be1e/1125f6772ed4f467da95ee102e169fbe?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mtdeACLApMHED6RLNl96rNsGswSj4q5LgJCc74IdH11jprLb0G-YXwp-4pBJXODo~8y2KdKqKlMkBgPi416ZUa6ffX1xw6j-tAibOjE8r7d1m-yJwMrlVKTcIJAW3W1FL2D18oxIySdkiXr15kykADl-wedLuebprWirXLaCJkhsLcPtr4YI9OcJmReNVnEusFIA2Y1yR~CdJGfs2Q7~45yAaxY0Xn9JsWWkmYQGaJ12xcTL0muVWxqDSdd~cImkETnpVHBM8Dg472vn2iUrUD9~l172YCQzBmmOsDN2A-PPEPisB0EGrSe3nszf30CToJ-2RVm~ayV~nC8T8XxziA__"
          alt="Property"
        />
        <div className="container">
          <div className="row d-flex flex-row flex-wrap-reverse justify-content-between mt-3">
            <div className="col col-lg-6 d-flex flex-column">
              <p className="font-weight-bold">
                2BHK flat in Vijayanagar, Mysuru
              </p>
              <small className="opacity-50">
                2Nd Floor, Dejgow Building, Kannada Sahithya Parishath Rd,
                Mysuru - 570017
              </small>
            </div>
            <div className="col col-lg-4 d-flex flex-column">
              <span class="badge bg__green">Success</span>
              <h3 className="mt-2 fw-semibold blue">₹ 70 Lac</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
