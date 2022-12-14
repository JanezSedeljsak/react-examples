import { useRef } from "react";
import {
  USER_LOGOUT,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
} from "../actions/types";
import { useDispatch } from "react-redux";
import { API_BASE, BASE } from "../utils";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./authform.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerAction = () => {
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    dispatch({ type: USER_REGISTER_START });
    axios
      .post(API_BASE + "register", user)
      .then(function (response) {
        if (response.data.success) {
          dispatch({ type: USER_REGISTER_SUCCESS, payload: response.data });
          navigate(BASE);
          toast.success("Successfully registered!");
        } else {
          toast.error("Registration failed.", {
            autoClose: 2000,
          });
          dispatch({ tyle: USER_REGISTER_FAILURE });
        }
      })
      .catch(function (error) {
        dispatch({ type: USER_LOGOUT });
      });
  };

  return (
    <div className="card my-form-card">
      <div className="card-body">
        <h3 className="card-title">Register</h3>
        <div className="card-text">
          <div>
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              ref={nameRef}
              type="text"
              id="name"
              className="form-control"
            />
          </div>
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
        <button
          type="button"
          className="btn btn-primary"
          onClick={registerAction}
        >
          Register
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
