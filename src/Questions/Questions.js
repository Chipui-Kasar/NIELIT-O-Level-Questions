// import axios from "axios";
import React, { useEffect } from "react";
import data from "./data";
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

  return <h1 style={{ textAlign: "center" }}>Waiting for the design</h1>;
};

export default Questions;
