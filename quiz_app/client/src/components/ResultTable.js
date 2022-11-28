import React from "react";

function ResultTable() {
  return (
    <div>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attempts</td>
            <td>Earn Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          <tr className="table-body">
            <td>Username</td>
            <td>01</td>
            <td>01</td>
            <td>fail</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable;
