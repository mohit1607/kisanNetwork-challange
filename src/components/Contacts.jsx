import React from 'react'
import SideBar from './SideBar'
import ContactInfo from './ContactInfo'



const Contacts = ({setMessages}) => {

  return (
    <div className='block md:flex'>
        <SideBar></SideBar>
        <ContactInfo setMessages={setMessages}></ContactInfo>
    </div>
  )
}

export default Contacts