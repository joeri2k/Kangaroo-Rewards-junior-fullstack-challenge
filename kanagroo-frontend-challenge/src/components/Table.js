import React from "react";

function Table({ data }) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Code</th>
          </tr>
        </tbody>
        {data &&
          data.map((val, key) => {
            return (
              <tbody key={key}>
                <tr>
                  <td>{val.name}</td>
                  <td>{val.code}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
}

export default Table;
