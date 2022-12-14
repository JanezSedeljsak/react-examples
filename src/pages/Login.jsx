import { useRef } from "react";
import {
  USER_LOGIN_START,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
} from "../actions/types";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_BASE, BASE } from "../utils";
import "./authform.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAction = () => {
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    dispatch({ type: USER_LOGIN_START });
    axios
      .post(API_BASE + "login", user)
      .then(function (response) {
        if (response.data.success) {
          dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });
          navigate(BASE);
          toast.success("Logged in!", {
            autoClose: 2000,
          });
        } else {
          toast.error("Login failed", {
            autoClose: 2000,
          });
          dispatch({ type: USER_LOGIN_FAILURE });
        }
      })
      .catch(function (error) {
        dispatch({ type: USER_LOGIN_FAILURE });
        toast.error("Login failed", {
          autoClose: 2000,
        });
      });
  };

  return (
    <div className="card my-form-card">
      <div className="card-body">
        <h3 className="card-title">Login</h3>
        <div className="card-text">
          <div>
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              className="form-control"
            />
          </div>
          <div>
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              className="form-control"
            />
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={loginAction}>
          Login
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
