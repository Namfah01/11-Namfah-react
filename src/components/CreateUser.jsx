import { useState } from "react";

const CreateUser = ({ sendDataToParent }) => {
  //กำหนด state สำหรับเก็บข้อมูลที่กรอกทั้ง Name Lastname Position
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");
  const [errors, setErrors] = useState({}); //ประกาศตัวแปรเพื่อ set ค่า validation

  //ใช้เมื่อมีการเปลี่ยนแปลงค่าของ state ของข้อมูลโดยจะส่งข้อมูลที่มีการเปลี่ยนแปลงมาในรูปแบบ event object
  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  //เรียกใช้เมื่อมีการ submit ข้อมูล
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, lastname, position }; //เก็บข้อมูล userData ในรูปแบบ object
    //สร้างตัว validation เพื่อบังคับให้ user ใส่ข้อมูลในช่องที่กำหนด
    if (!name.trim() || !lastname.trim() || !position.trim()) {
      //ใช้สำหรับตรวจสอบช่องว่างก่อนและหลัง ข้อความที่ input ลงไป
      const newErrors = {}; //หากช่องinput ว่างจะกำหนดให้แสดง error
      if (!name.trim()) {
        newErrors.name = "Name is required";
      }
      if (!lastname.trim()) {
        newErrors.lastname = "Last name is required";
      }
      if (!position.trim()) {
        newErrors.position = "Position is required";
      }
      setErrors(newErrors);
    } else {
      sendDataToParent(userData); // ส่งข้อมูลผู้ใช้ไปยังหน้าหลัก
      setName(""); //หลังจากส่งข้อมูลแล้วให้เคลียร์ค่า Name
      setLastname(""); //หลังจากส่งข้อมูลแล้วให้เคลียร์ค่า LastName
      setPosition(""); //หลังจากส่งข้อมูลแล้วให้เคลียร์ค่า Position
    }
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
            className="input1"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={handleChange(setLastname)}
            className="input2"
          />
          <input
            type="text"
            placeholder="Position"
            value={position}
            onChange={handleChange(setPosition)}
            className="input3"
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
