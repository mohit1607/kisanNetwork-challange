import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { Popover } from '@headlessui/react'
import { sendMessage } from '../api'
import Moment from 'moment'
import { useEffect } from 'react'


const IndividualContact = ({setMessages}) => {

     const randomNumber = () => {
        return Math.floor(100000 + Math.random() * 900000); // random six digit otp generator
    }
    const [otp, setOtp] = useState(randomNumber())
    const [inputValue, setInputValue] = useState(`Your otp is ${otp}`)
    const params = useParams() // data is retrived from here
    // console.log(params) // showing it in console

    const sendTheMessage = () => {
        const formatDate = Moment().format('DD-MM-YYYY')
        const formatTime = Moment().format("hh:mm A")
        const newMessage = {
            name: params.name,
            phone: params.contact,
            msgBody: inputValue,
            time: formatTime,
            date:formatDate,
        }
        setMessages((prev) => [...prev,newMessage])
        sendMessage(newMessage)
    }

    const generateRandom = () => {
        setOtp(randomNumber())
    }

    useEffect(() => {
        // console.log(otp)
        setInputValue(`Your OTP is ${otp}`)
    },[otp])

  return (
    <div className='mx-auto'>
       <div className='flex-col items-center'>
         <h1 className='text-5xl mb-4'>Name: {params.name}</h1>
        <h1 className='text-3xl'>Contact: {params.contact}</h1>
       </div>
       <div className='mt-8 text-lg'>
        <Popover className="relative">
            <Popover.Button onClick={() => generateRandom()}  className="bg-sky-600 rounded-sm text-white px-4 py-2">Send a message</Popover.Button>

            <Popover.Panel className="bg-[#F4F4F7] text-black fixed w-1/2 rounded-lg shadow-2xl">
                 <div className='text-2xl mt-8'>
                    New Message
                 </div>
                 <div>
                    <textarea autoFocus value={inputValue} onChange={(e) => setInputValue(e.target.value)}  cols="30" rows="4" className='border-2 border-black rounded-md my-4 px-4 py-2 mb-2'></textarea>
                 </div>
                 <div>
                    <Popover.Button onClick={()=>sendTheMessage()} className='bg-green-600 rounded-sm text-white px-4 py-2 mb-4'>Send Message</Popover.Button>
                 </div>
            </Popover.Panel>
        </Popover>
       
       </div>
    </div>
  )
}


export default IndividualContact