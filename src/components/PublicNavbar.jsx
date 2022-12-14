import { SHOW_POST_MODAL, POST_CHANGE_SEARCH } from "../actions/types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BASE } from "../utils";

function PublicNavbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchInput = useSelector((state) => state.post.search);
  const searchRef = useRef(null);
  const updateSearch = (event) => {
    event.preventDefault();
    dispatch({ type: POST_CHANGE_SEARCH, payload: event.target.value });
  };

  useEffect(() => {
    searchRef.current.value = searchInput;
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
          <button
            type="button"
            className="btn btn-primary me-3"
            style={{ height: 35, borderRadius: 5, marginLeft: 15 }}
            onClick={() => navigate(BASE + "login")}
          >
            Login
          </button>
          <button
            type="button"
            className="btn btn-primary me-3"
            style={{ height: 35, borderRadius: 5 }}
            onClick={() => navigate(BASE + "register")}
          >
            Register
          </button>
        </form>
      </div>
    </nav>
  );
}

export default PublicNavbar;
