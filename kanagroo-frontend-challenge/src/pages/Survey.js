import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "axios";

function Survey() {
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
      <h1>Kangaroo Rewards junior fullstack challenge </h1>
      <h2>List of the surveys</h2>
      <Table data={data && data} />
    </div>
  );
}

export default Survey;
