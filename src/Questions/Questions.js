// import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Questions.css";
import data from "./data";
import { Link } from "react-router-dom";
import bg from '../images/background.jpg'
const Questions = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    setData(data);
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
  console.log(bg);
  return (
    <div className="questions" style={{ backgroundImage: `url(${bg})` }}>
      {/* <h1> Waiting for the design </h1> */}


      {/* <marquee> Hover to preview the file & click to download</marquee> */}
      <Link to="/" className="goBack">
        Go Back
      </Link>
      <div className="container">
        {datas.length > 0 &&
          datas.map((res, key) => {
            return (
              <div className="questionBox" key={key}>
                <b>{res.subject}</b>
                <ol>
                  {res.details.map((sub, key) => {
                    // let splitUrl = "https://drive.google.com/file/d/";
                    // let id = sub.url.split(splitUrl)[1].split("/")[0];
                    return (
                      <>
                        <li key={key} className="items">
                          <a
                            href={
                              sub.url
                            }
                            target="_blank"
                            rel="noreferrer"
                          >
                            {sub.title}
                          </a>
                          {/* <a
                          href={
                            "https://drive.google.com/u/0/uc?id=" +
                            id +
                            "&export=download"
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          {sub.title}
                        </a> */}


                        </li>

                      </>
                    );
                  })}
                </ol>
              </div>
            );
          })}
      </div>

    </div>
  );
};

export default Questions;
