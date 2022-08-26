import { useEffect } from "react";
import {
  GET_PROFILE_START,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
} from "../actions/types";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_BASE } from "../utils";
import Card from "../components/Card";

function Profile() {
  const dispatch = useDispatch();
  const jwt = useSelector((state) => state.user.jwt);
  const profileData = useSelector((state) => state.post.profileData);
  console.log(profileData);
  const config = {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  };

  useEffect(() => {
    dispatch({ type: GET_PROFILE_START });
    axios
      .get(API_BASE + "profile", config)
      .then(function (response) {
        dispatch({ type: GET_PROFILE_SUCCESS, payload: response.data });
        console.log(response);
      })
      .catch((error) => {
        alert("napaka");
        dispatch({ type: GET_PROFILE_FAILURE });
      });
  }, []);

  return (
    <>
      {profileData?.posts?.map((post) => (
        <Card key={post.id} {...post} />
      ))}
    </>
  );
}

export default Profile;
