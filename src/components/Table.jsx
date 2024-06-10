import { useEffect } from "react";
import Home from "../Page/Home";

//รับ prop subHear เพื่อระบุรูปแบบตารางระหว่างหน้า Home และหน้า admin
//รับ prop tableArray เพื่อแสดงข้อมูลในตาราง
//รับ prop setTableArray เพื่ออัพเดทข้อมูลในตาราง
const Table = ({ subHeader, tableArray, setTableArray }) => {
  if (subHeader === "home") {
    console.log(1);
  } else if (subHeader === "admin") {
    console.log(2);
  }

  //ฟังก์ชั้นในการลบ UserData โดยการรับ index เพื่อระบุตำแหน่งในการลบ
  function onDelete(index) {
    console.log(tableArray); //กำหนดให้แสดงtable arrays ก่อนมีการลบ data
    const newArray = [...tableArray]; // โดยจะรับค่า index มาจาก table Array และสร้าง array ใหม่
    newArray.splice(index, 1);
    setTableArray(newArray); //กำหนดให้ NewArrays มาแทนที่ tableArray
    console.log(newArray); //กำหนดให้แสดง table arrays หลังมีการลบ data
  }

  //กำหนดให้เมื่อเรียกใช้ฟังก์ชั้นลบ data ได้โดยนำไปใช้ร่วมกับ function on click
  const handleDelete = (index) => {
    onDelete(index);
  };

  //สร้างตาราง
  return (
    <table>
      <thead className="TableHead">
        <tr>
          <th>Name</th>
          <th>Lastname</th>
          <th>Position</th>
          {/*กำหนดให้เมื่อเลือกหน้า admin ตารางแถว action จะแสดงผล*/}
          {subHeader === "admin" && <th>Action</th>}
        </tr>
      </thead>
      <tbody className="TableBody">
        {/*ตรวจสอบค่า tableArrray ว่าไม่ใช้ค่าว่าง*/}
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
            {/*หากในตารางไม่มีข้อมูล inputทั้งในหน้า admin และ หน้า home ให้แสดงผล No data available*/}
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
