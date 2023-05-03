import React from 'react'
import './Header.css'
import Sidebar from "./SideDrower"
export default function Header() {
  return (
     
     <div className='header'>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
     <div className='logo'>
     </div>
     <div className='Header_contact_details'>
       <div className='mail_logo'/>
       <div className='mail_content'>
         59861 98000
       </div>
       <div className='phone_logo'/>
       <div className='phone_content'>support@gmail.com</div>
     </div>
     </div>
    
  )
}
