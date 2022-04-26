import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "axios";

function Survey() {
  //   const data1 = [
  //     {
  //       name: "Paris",
  //       code: "XX1",
  //     },
  //     {
  //       name: "Melun",
  //       code: "XX3",
  //     },
  //     {
  //       name: "Chartres",
  //       code: "XX2",
  //     },
  //   ];
  const [data, setData] = useState("");
  async function getSurveys() {
    const url = "http://127.0.0.1:8001/api/surveys";
    try {
      const response = await axios.get(url);
      const data_received = await response.data;
      console.log(data_received);
      setData(data_received);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getSurveys();
  }, []);
  return (
    <div className="container">
      {/* <div>{data1}</div> */}
      <h1>title</h1>
      <Table data={data && data} />
    </div>
  );
}

export default Survey;
