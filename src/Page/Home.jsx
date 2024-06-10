import { useEffect, useState } from "react";
import Table from "../components/Table";
import CreateUser from "../components/CreateUser";

const Home = () => {
  const [detail, setDetail] = useState("default"); //กำหนด state สำหรับเก็บข้อมูล detail
  const [tableArray, setTableArray] = useState([]); //กำหนด state สำหรับเก็บข้อมูล tableArray
  //ใช้ฟังก์ชั่น haddleUserData สำหรับการรับข้อมูลจากcomponent crateUser ที่ใช้ในการเก็บข้อูลจากฟอร์ม
  const handleUserData = (userData) => {
    setTableArray([...tableArray, userData]);
    console.log(tableArray);
  };
  //  ใช้เพื่อเปลี่ยน subheader และ detail ของตาราง
  function onclick1() {
    setDetail("home");
  }

  //  ใช้เพื่อเปลี่ยน subheader และ detail ของตาราง
  function onclick2() {
    setDetail("admin");
  }
  return (
    <>
      <h1 className="header">Generation Thailand</h1>
      {/* แสดง subHeader เมื่อมีการเปลี่ยนแปลงของ detail */}
      {detail === "default" ? (
        <h1 className="subheader">React - Assessment</h1>
      ) : detail === "home" ? (
        <h1 className="subheader">Home - User Sector</h1>
      ) : detail === "admin" ? (
        <h1 className="subheader">Home - Admin Sector</h1>
      ) : null}
      {/* สร้างปุ่มเพื่อสำหรับ Set detail เพื่อแบ่งระหว่างส่วนของ Home และ ฤกทรื */}
      <div className="button">
        <button onClick={onclick1} className="b1">
          User Home Sector
        </button>
        <button onClick={onclick2} className="b2">
          Admin Home Sector
        </button>
      </div>
      {/* แสดง Table ดังต่อไปนี้ หาก detail เป็น "home" */}
      {detail === "home" && (
        <Table
          subHeader={detail}
          tableArray={tableArray}
          setTableArray={setTableArray}
        />
      )}
      {/* แสดง CreateUser และ Table หาก detail เป็น "admin" */}
      {detail === "admin" && <CreateUser sendDataToParent={handleUserData} />}
      {/* ในส่วนของ admin จะแสดง CreateUser พร้อมระบุ props ด้วย sendDataToParent เพื่อให้ CreateUser สามารถส่งข้อมูลผู้ใช้กลับไปยังคอมโพเนนต์หลักได้ โดยที่ handleUserData ถูกใช้เป็น callback function ซึ่งจะถูกเรียกเมื่อมีการสร้างผู้ใช้ใหม่และต้องการส่งข้อมูลผู้ใช้กลับไปยัง Table   */}
      {detail === "admin" && (
        <Table
          subHeader={detail}
          tableArray={tableArray}
          setTableArray={setTableArray}
        />
      )}
    </>
  );
};

export default Home;
