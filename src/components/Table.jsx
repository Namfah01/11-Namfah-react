/* eslint-disable react/prop-types */

import { useEffect } from "react";

const Table = ({ subHeader, tableArray, setTableArray }) => {
  if (subHeader === "home") {
    console.log(1);
  } else if (subHeader === "admin") {
    console.log(2);
  }

  function onDelete(index) {
    console.log(tableArray);
    const newArray = [...tableArray];
    newArray.splice(index, 1);
    setTableArray(newArray);
    console.log(newArray);
  }

  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <table>
      <thead className="TableHead">
        <tr>
          <th>Name</th>
          <th>Lastname</th>
          <th>Position</th>
          {subHeader === "admin" && <th>Action</th>}
        </tr>
      </thead>
      <tbody className="TableBody">
        {tableArray && tableArray.length > 0 ? (
          tableArray.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.lastname}</td>
              <td>{row.position}</td>
              {subHeader === "admin" && (
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              )}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={subHeader === "admin" ? 4 : 3}>No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
