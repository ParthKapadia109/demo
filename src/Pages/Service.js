import React from "react";
import WorkApi from "../Api/WorkApi";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Service = () => {
  const [Data, NewData] = useState(WorkApi);

  console.log(Data);
  return (
    <>
      <section>
        <div className="container work_container p-5 mb-5">
          <div className="row ">
            <h2 className="text-decoration-underline fst-normal text-center ">
              Our Services
            </h2>
            {Data.map((curElem) => {
              const { id, logo, to, name, description } = curElem;
              return (
                <>
                  <div className="col-4 g-2 ">
                    <div className="card-body justify-content-center text-center">
                      <br />
                      {logo}
                      <br />
                      <p className="fw-normal">{description}</p>
                      <h4>{name}</h4>
                      <br />
                      <NavLink
                        to={"/servicedetail/" + curElem.id + "/" + curElem.name}
                        className="btn btn-outline-primary"
                      >
                        Click to more
                      </NavLink>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Service;
