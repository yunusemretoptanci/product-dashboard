import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import ila_logo from "@/assets/ila_logo.jpg";

function AuthenticatedLayout() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={ila_logo} alt="ila logo rounded" style={{ maxWidth: "50px" }} />
          </a>
        </div>
      </nav>
      <main classNameName="container pt-5 mt-5">
        <Outlet />
      </main>
    </div>
  );
}

export default AuthenticatedLayout;
