import React from "react";
import ila_logo from "@/assets/ila_logo.jpg";
import { useAuth0 } from "@auth0/auth0-react";

function LoginPage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="bg-light d-flex flex-column align-items-center justify-content-center row">
      <div className="d-flex flex-column justify-content-center align-items-center gap-3 col-4">
        <div className="d-flex justify-content-center align-items-center gap-5 ">
          <img
            src={ila_logo}
            alt="ila_logo"
            className="img-fluid  rounded-circle"
            style={{ maxWidth: "100px" }}
          />
          <h1 className="m-auto h1">IlaShop</h1>
        </div>
        <p className=" fs-5 text-dark">Fast & Easy Product Management</p>

        <div className="col-12 text-center p-3 shadow-sm  rounded bg-white">
          <h2 className="mb-4 fs-3">Welcome!</h2>
          <button
          onClick={() => loginWithRedirect()}
          className="btn btn btn-dark btn-lg">Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
