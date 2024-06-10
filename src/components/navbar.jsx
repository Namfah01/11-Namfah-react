import React from "react";

//หลังจากสร้าง path เรียบร้อยให้นำมาลิงค์กับ NavBar
const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <nav>
          <ul>
            <li>
              <a href="/Home">Home</a>
            </li>
            <li>
              <a href="/Owner">Owner</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
