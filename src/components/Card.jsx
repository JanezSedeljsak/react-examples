import axios from "axios";
import { DELETE_POST_SUCCESS, DELETE_POST_START, DELETE_POST_FAILURE, GET_PROFILE_START, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from "../actions/types";
import { useDispatch, useSelector } from "react-redux";
import { API_BASE } from "../utils";

function Card({ id, title, content, date, name, image, isDelete }) {
  const dateObj = new Date(date);
  const jwt = useSelector((state) => state.user.jwt);
  const dispatch = useDispatch();

  const config = {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  };

  const deleteAction = () => {
    dispatch({ type: DELETE_POST_START });

    axios.post(API_BASE + "delete/post", { id }, config)
      .then(function (response) {
        dispatch({ type: DELETE_POST_SUCCESS });
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
        console.log(response);
      })
      .catch((error) => {
        alert("napaka");
        dispatch({ type: DELETE_POST_FAILURE });
      });
  }

  return (
    <div className="col-xl-4 col-lg-6 mb-4">
      <div className="card">
        <img
          src={
            image
              ? image
              : "https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
          }
          className="card-img-top"
          alt="Fissure in Sandstone"
          style={{ width: '100%', objectFit: 'cover', height: 200 }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{name} - {dateObj.toLocaleDateString()}</h6>
          <p className="card-text">{content}</p>
          {isDelete ? <button type="button" className="btn btn-danger" onClick={deleteAction}>Delete</button> : null}
        </div>
      </div>
    </div>
  );
}

export default Card;
