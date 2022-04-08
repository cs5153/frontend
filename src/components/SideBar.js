import React from 'react'
import './SideBar.css';
import {FaWrench } from "react-icons/fa"
import {FaList } from "react-icons/fa"
import {FaCamera } from "react-icons/fa"
import {FaComment } from "react-icons/fa"

function SideBar() {

return (
    <>
        <div className='leftSide'>
           <div className='groupLink'>
               <a className='link' href='/groupPage'>
               <FaWrench  />
                 Settings 
               </a>
           </div>
           <div className='groupLink'>
               <a  className='link' href='/groupPage'>
               <FaList  />
                   List
               </a>
           </div>
           <div className='groupLink'>
               <a  className='link' href='/groupPage'>
               <FaCamera  />
                   Photos
               </a>
           </div>
           <div className='groupLink'>
               <a  className='link' href='/groupPage'>
               <FaComment  />
                   Chat
               </a>
           </div>
        </div> 
        
    </>
)
}

export default SideBar;