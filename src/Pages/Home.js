import React from "react";
import { NavLink } from "react-router-dom";
import h1 from "../Images/header.png";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <section id='header' className="d-flex align-items-center bg-black text-light mb-5">
        <div className="container">
          <div className="row">
            <div className="col-6  order-1 order-lg-1 text-capitalize d-flex justify-content-center flex-column ">
              <br />
              <h4>EXCLUSIVE ACCESS</h4>
              <br />
              <h1>
                online payment made <br /> easy for you.
              </h1>
              <p className="my-3  text-capitalize fs-5 ">
                get access to our exclusive diamond card <br />
                allows you to send unlimited transactions
                <br />
                without getting charged any fees
              </p>
              <div className="mt-3 text-capitalize">
                <NavLink
                  to="/SignUp"
                  className=" btn btn-outline-primary rounded-1"
                >
                  get started
                </NavLink>
              </div>
            </div>
            <div className="col-6 order-2 order-lg-2 justify-content-center header-img">
              <img
                src={h1}
                className="figure-img img-fluid rounded-3 p-5 "
                alt="Card"
              />
            </div>
          </div>
        </div>
      </section>

      <Service />
      <About />
      <Contact />
    </>
  );
};
export default Home;
