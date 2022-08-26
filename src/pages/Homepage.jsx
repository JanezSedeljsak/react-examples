import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { API_BASE } from "../utils";
import {
  GET_POSTS_FAILURE,
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
} from "../actions/types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomePage() {
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_POSTS_START });
    toast("Loading posts...", {
      autoClose: 500,
    });
    axios
      .get(API_BASE + "posts")
      .then(function (response) {
        dispatch({ type: GET_POSTS_SUCCESS, payload: response.data.posts });
        toast.success("🦄 Posts loaded successfully.!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        dispatch({ type: GET_POSTS_FAILURE });
        toast("Error!");
      });
  }, []);

  return (
    <>
      <div className="row">
        {posts.map((post, index) => (
          <Card key={index} {...post} />
        ))}
      </div>
      <ToastContainer />
    </>
  );
}

export default HomePage;
