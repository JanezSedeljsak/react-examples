import {
  SHOW_POST_MODAL,
  POST_CHANGE_SEARCH,
  USER_LOGOUT,
} from "../actions/types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BASE } from "../utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchInput = useSelector((state) => state.post.search);
  const searchRef = useRef(null);
  const updateSearch = (event) => {
    event.preventDefault();
    dispatch({ type: POST_CHANGE_SEARCH, payload: event.target.value });
  };

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.value = searchInput;
    }
  }, []);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid" style={{ marginTop: 8 }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img src="../assets/favicon.png" alt="icon" width="35" height="35" onClick={() => navigate(BASE)} style={{ marginRight: 15, cursor: "pointer"  }} />
          <a
            style={{ cursor: "pointer" }}
            className="navbar-brand"
            onClick={() => navigate(BASE)}
          >
            Blog App
          </a>
        </div>
        <form className="d-flex input-group w-auto">
          {location?.pathname === BASE ? (
            <>
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                ref={searchRef}
                onChange={(event) => updateSearch(event)}
              />
              <span className="input-group-text border-0" id="search-addon">
                <i className="fas fa-search"></i>
              </span>
            </>
          ) : (
            <></>
          )}

          <button
            type="button"
            className="btn btn-primary me-3"
            style={{ height: 35, borderRadius: 5, marginLeft: 15 }}
            onClick={() => dispatch({ type: SHOW_POST_MODAL })}
          >
            Add todo
          </button>
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              style={{ height: 35, borderRadius: 5}}
              id="dropdownExampleAnimation"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
              data-mdb-dropdown-animation="off"
            >
              Actions
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownExampleAnimation"
            >
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => {
                    navigate(BASE + "profile");
                  }}
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => {
                    navigate(BASE + "dashboard");
                  }}
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => {
                    dispatch({ type: USER_LOGOUT });
                    navigate(BASE);
                    toast.success("Logged out!", {
                      autoClose: 2000,
                    });
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
