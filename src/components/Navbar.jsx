import React from "react";
import logo from "../assets/react.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 flex justify-between items-center ">
    
      <div className="flex items-center ml-10 text-white gap-2">
        {/* Logo */}
        <img src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-computer-icon-png-image_5064133.jpg" alt="Logo" className="h-8 w-8 mr-2 rounded-full" />

        {/* Brand Text */}
        <span className="text-white font-semibold text-lg">NVC Training Center</span>
      </div>

      <ul className="flex space-x-4 mr-10">
        <li>
          <NavLink to="/" className="text-white hover:bg-blue-100 hover:text-black p-3 rounded-lg">
            หน้าหลัก
          </NavLink>
        </li>
        <li>
          <NavLink to="/course" className="text-white hover:bg-blue-100 hover:text-black p-3 rounded-lg">
            หลักสูตรที่เปิดสอน
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="text-white hover:bg-blue-100 hover:text-black p-3 rounded-lg">
            ติดต่อ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
