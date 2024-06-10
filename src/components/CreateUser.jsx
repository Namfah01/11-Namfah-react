import { useState } from "react";

const CreateUser = ({ sendDataToParent }) => {
  //กำหนด state สำหรับเก็บข้อมูลที่กรอกทั้ง Name Lastname Position
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  //ใช้เมื่อมีการเปลี่ยนแปลงค่าของ state ของข้อมูลโดยจะส่งข้อมูลที่มีการเปลี่ยนแปลงมาในรูปแบบ event object
  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  //เรียกใช้เมื่อมีการ submit ข้อมูล
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, lastname, position }; //เก็บข้อมูล userData ในรูปแบบ object
    console.log("Form submitted:", userData);
    sendDataToParent(userData); // ส่งข้อมูลผู้ใช้ไปยังหน้าหลัก
    setName(""); //หลังจากส่งข้อมูลแล้วให้เคลียร์ค่า Name
    setLastname(""); //หลังจากส่งข้อมูลแล้วให้เคลียร์ค่า LastName
    setPosition(""); //หลังจากส่งข้อมูลแล้วให้เคลียร์ค่า Position
  };

  return (
    <>
      <div className="create">
        <div>
          <h3>Create User</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleChange(setName)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={handleChange(setLastname)}
          />
          <input
            type="text"
            placeholder="Position"
            value={position}
            onChange={handleChange(setPosition)}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
