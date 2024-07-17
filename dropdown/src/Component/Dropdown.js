import React from 'react'
import './dropdown.css'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from 'react';



function Dropdown({items}) {
    const [value,setValue]= useState(null)
    const [isOpen, setIsOpen] = useState(false);

    //To Display dropdown list during hovering of the button 
    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };
    const handleClick =(item) =>{
        setIsOpen(false);
        setValue(item)
       

    }
  return (
    <div className='dropdown' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h1> Dropdown </h1>

        <div className='dropdown_btn'> 
        {value ? (
                    <>
                        {value} 
                    </>
                ) : (
                    'Select one'
                )}
          
            <span id="faangledown">{isOpen? <FaAngleUp />:<FaAngleDown />}</span>
        
        </div>

        {/* mapping array */}
        <div>
            { isOpen&& (
        
            <div className='dropdown_item'>
                {items.map((item) => <div className='dropitem' onClick={() => handleClick(item)} >{item}</div>)}
            </div>
                )
        }
        </div>


      



    
  

    </div>
  )
}

export default Dropdown
