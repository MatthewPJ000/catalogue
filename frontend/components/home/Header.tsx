/**
 * @name Hotel Room Booking System
 * @author Kir Kalarash
 * @description Hotel Room Booking and Management System Software ~ Developed By Kir Kalarash
 * @copyright ©2023 ― Kir Kalarash. All rights reserved.
 * @version v0.0.1
 *
 */
// import { useState } from 'react';
import { IoIosSearch } from "react-icons/io";

const Header: React.FC = () => {
  
    const handleClick = () => {
      const form = document.forms[0]; // Get the first form
      if (form) {
        form.submit(); // Submit the form
      }
    };


  // const [searchKeyword, setSearchKeyword] = useState("")

  return (
    <header className="header">
  
      <div className="header-content">
      <h1>Delivering solutions around the world!</h1>
        <div>
          <div className="relative mt-2 rounded-md shadow-sm" onClick={handleClick}>
      
            <input
              id="price"
              name="price"
              type="text"
              placeholder="Find Products by Part Number"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <div className="absolute inset-y-0 right-0 flex items-center gap-2 right-6 font-medium text-base leading-normal text-primary">
              
              <IoIosSearch />
              <p>search</p>
            
            </div>
          </div>
        </div>
        
       
      </div>
      
    </header>
  );
};

export default Header;