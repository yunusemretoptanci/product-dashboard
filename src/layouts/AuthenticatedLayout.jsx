import { Outlet, useNavigate } from "react-router-dom";
import ila_logo from "@/assets/ila_logo.jpg";
import { useAuth } from "@/context/AuthContext";
import { useEffect} from "react";

function AuthenticatedLayout() {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/");
    }
  }, [isLoading]);

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            {isLoading ? (
              <div className="spinner-grow" role="status"></div>
            ) : (
              <img
                className=" rounded"
                src={user?.picture}
                style={{ maxWidth: "50px" }}
              />
            )}
          </a>

          <button
            className="btn btn-dark"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Logout
          </button>
        </div>
      </nav>
      <main className="container pt-5 mt-5">
        <Outlet />
      </main>
    </div>
  );
}

export default AuthenticatedLayout;
