import React from 'react'
import { Outlet,Routes, Route } from "react-router-dom";
import IndividualContact from './IndividualContact';

const ContactInfo = ({setMessages}) => {
  return (
    <div className='w-full text-center'>
       <Routes>
        
          <Route exact path='users/:slug/:name/:contact' element={<IndividualContact setMessages={setMessages}/>}></Route>
       </Routes>
       <Outlet></Outlet>
    </div>
  )
}

export default ContactInfo