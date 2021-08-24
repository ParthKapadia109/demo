import React from "react";

const Contact = () => {
  return (
    <>
      <section>
        <h2 className="text-center text-decoration-underline m-2 p-3 ">
          Contact Us
        </h2>
        <form
          className="row g-3 needs-validation align-items-center justify-content-center flex-column"
          novalidate
        >
          <div className='col-4'>
            <label className="form-label fs-4">First name</label>
            <input type="text" className="form-control" required />
          </div>

          <div className='col-4'>
            <label className="form-label fs-4">Last name</label>
            <input type="text" className="form-control" required />
          </div>

          <div className='col-4'>
            <label className="form-label fs-4">Username</label>
            <div className="input-group has-validation">
              <input
                type="text"
                className="form-control"
                placeholder="abc123@gmail.com"
                aria-describedby="validationTooltipUsernamePrepend"
                required
              />
              <div className="invalid-tooltip">
                Please choose a unique and valid username.
              </div>
            </div>
          </div>

          <div className='col-4'>
            <label className="form-label fs-4">State</label>
            <select className="form-select" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option>...</option>
            </select>
            <div className="invalid-tooltip">Please select a valid state.</div>
          </div>

          <div className='col-4'>
            <label className="form-label fs-4">City</label>
            <select className="form-select" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option>
              </option>
            </select>
            <div className="invalid-tooltip">Please select a valid city.</div>
          </div>

          <div className="text-center p-2">
            <button className="btn btn-outline-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
export default Contact;
