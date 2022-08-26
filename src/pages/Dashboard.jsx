import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import "./dashboard.css";
import axios from "axios";
import { API_BASE } from "../utils";
import {
  COUNT_POST_FAILURE,
  COUNT_POST_START,
  COUNT_POST_SUCCESS,
} from "../actions/types";
import { useDispatch, useSelector } from "react-redux";

function Dashboard() {
  const dispatch = useDispatch();
  const countPost = useSelector((state) => state.post.postCount.data);
  const jwt = useSelector((state) => state.user.jwt);

  useEffect(() => {
    dispatch({ type: COUNT_POST_START });
    axios
      .get(API_BASE + "count", config)
      .then(function (response) {
        //console.log(response);
        dispatch({ type: COUNT_POST_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        alert("napaka");
        dispatch({ type: COUNT_POST_FAILURE });
      });
  }, []);

  const config = {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  };

  const getChartOptions = ({ title }) => ({
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
  });

  function ActiveUsers() {
    if (countPost) {
      console.log(countPost);
      const options = getChartOptions({ title: "Most active users" });
      const data = {
        labels: countPost.map((user) => user.name),
        datasets: [
          {
            label: "Posts by user",
            data: countPost.map((x) => x.post_count),
            backgroundColor: "#ffbb00",
          },
        ],
      };

      return <Bar options={options} data={data} />;
    }
    return <></>;
  }

  return (
    <div className="graph-container">
      <div className="card">
        <div className="card-header"></div>
        <div className="card-body">{ActiveUsers()}</div>
      </div>
    </div>
  );
}

export default Dashboard;
