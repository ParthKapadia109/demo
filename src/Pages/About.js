import React from "react";
import { NavLink } from "react-router-dom";
import about from "../Images/home.jpg";

const About = () => {
  return (
    <>
      <section id='header' className="d-flex align-items-center bg-black text-light">
        <div className="container mb-5">
          <div className="row">
            <div id='header-img' className="col-12 col-lg-5 order-1 order-lg-1 text-capitalize d-flex justify-content-center flex-column ">
              <img
                src={about}
                className="figure-img img-fluid rounded-3 p-5"
                alt="card with laptop"
              />
            </div>
            <div className="col-12 col-lg-7 order-2 order-lg-2 text-capitalize justify-content-center p-5">
              <h2 className="text-center">How to use app ?</h2>
              <br />

              <div className="p-1">
                <p className="my-3  text-capitalize fs-5 text-center ">
                  Card-based payments are made by using <br />
                  a credit card or a debit card or an ATM Card.
                  <br />
                  Major advantages of card payments are that it will only be
                  accepted <br />
                  if the cardholder has sufficient funds in his/her account and
                  safer than
                  <br />
                  cash and faster than the paper-based payments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
