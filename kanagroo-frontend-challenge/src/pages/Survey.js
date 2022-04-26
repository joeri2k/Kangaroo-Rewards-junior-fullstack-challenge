import React from "react";
import Table from "../components/Table";

function Survey() {
  const data = [
    {
      name: "Paris",
      code: "XX1",
    },
    {
      name: "Melun",
      code: "XX3",
    },
    {
      name: "Chartres",
      code: "XX2",
    },
  ];
  return (
    <div className="container">
      <Table data={data} />
    </div>
  );
}

export default Survey;
