import React from "react";

function Table({ data }) {
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Code</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.code}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Table;
