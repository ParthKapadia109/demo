import React from "react";
import { useState } from "react";

const Sign_Up = () => {
  const [Sign_up, NewSign_up] = useState({
    Firstname: "",
    Lastname: "",
    Mobile: "",
    Email: "",
    Password: "",
  });

  const [Data, SetData] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    NewSign_up({ ...Sign_up, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const Record = { ...Sign_up, id: new Date().getTime().toString() };
    console.log(Data);

    SetData([...Data, Record]);
    console.log(Data);

    NewSign_up({
      Firstname: "",
      Lastname: "",
      Mobile: "",
      Email: "",
      Password: "",
    });
  };

  return (
    <>
      <section>
        <h4 className="text-center text-decoration-underline fs-2 p-3 bg-black ">
          Sign-Up
        </h4>
        <form
          className="row g-3 needs-validation bg-black flex-column align-items-center mb-5 "
          onSubmit={handleSubmit}
          novalidate
        >
          <div className="col-4">
            <label className="form-label text-white">First name</label>
            <input
              type="text"
              autoComplete="off"
              value={Sign_Up.Firstname}
              name="firstname"
              onChange={handleInput}
              className="form-control"
              required
            />
          </div>

          <div className="col-4">
            <label className="form-label text-white">Last name</label>
            <input
              type="text"
              value={Sign_Up.Lastname}
              name="lastname"
              onChange={handleInput}
              className="form-control"
              required
            />
          </div>

          <div className="col-4">
            <label className="form-label text-white">Mobile</label>
            <div className="input-group has-validation">
              <input
                type="number"
                className="form-control"
                value={Sign_Up.Mobile}
                name="mobile"
                onChange={handleInput}
                placeholder="+91"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedback">
                Please write a your proper Number.
              </div>
            </div>
          </div>

          <div className="col-4">
            <label className="form-label text-white">Email</label>
            <div className="input-group has-validation">
              <input
                type="text"
                className="form-control"
                value={Sign_Up.Email}
                name="email"
                onChange={handleInput}
                placeholder="abc123@gmail.com"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedback">Please choose a username.</div>
            </div>
          </div>

          <div className="col-4">
            <label className="form-label text-white">Password</label>
            <div className="input-group has-validation">
              <input
                type="password"
                value={Sign_Up.Password}
                name="password"
                onChange={handleInput}
                className="form-control"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedback">Please Enter Password.</div>
            </div>
            <div>
              <span id="passwordHelpInline" class="form-text">
                Must be 8-20 characters long.
              </span>
            </div>
          </div>

          <div className="text-center p-2">
            <button className="btn btn-outline-primary" type="submit">
              Sign-Up
            </button>
          </div>
        </form>

        <div>
          {Data.map((CurElem) => {
              const{id,Firstname,Lastname,Email,Mobile,Password} = CurElem
            return (
              <div key={id }>
                <p>{Firstname}</p>
                <p>{Lastname}</p>
                <p>{Email}</p>
                <p>{Mobile}</p>
                <p>{Password}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Sign_Up;
