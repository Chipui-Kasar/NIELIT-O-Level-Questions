// import axios from "axios";
import React, { useEffect } from "react";
import "./Questions.css";
import data from "./data";
import { Link } from "react-router-dom";
const Questions = () => {
  useEffect(() => {
    console.log(data);
    // axios
    //   .post(
    //     `https://app-send-data-splist.azurewebsites.net/api/send_data_to_splist?params=[{"fieldNameValue": "Name:Chipui"},{"fieldNameValue": "Email:chipui@sharepointdesigns.com"},{"fieldNameValue": "LeaderGUID:57384"},{"fieldNameValue": "LeadersurveyID:35325"},{"fieldNameValue": "ObserversurveyID:58982"}]&body={"listName": "Leaderssurveyemail","listUrl":"https://randcome.sharepoint.com/sites/KnowledgeSharing/_api/web/lists/GetByTitle('Leaderssurveyemail')/items"}`
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // return () => {};
  }, []);

  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        placeContent: "center",
        placeItems: "center",
        flexDirection: "column",
      }}
    >
      <h1> Waiting for the design </h1>

      <Link to="/" className="goBack">
        Go Back
      </Link>
    </div>
  );
};

export default Questions;
