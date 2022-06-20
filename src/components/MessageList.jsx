import React from 'react'

const MessageList = ({messages}) => {
  return (
    <div>
        <div className="text-2xl text-center">History</div>
        <ul>
           {
            messages.reverse().map((curr,ind) => {
            return(
                <li className='flex py-2 justify-evenly my-4 bg-[#F4F4F7] rounded-lg'>
                    <div>name: {curr.name}</div>
                    <div>to: {curr.phone}</div>
                    <div>msg: {curr.msgBody}</div>
                    <div>at: {curr.time}  &nbsp; on: {curr.date}</div>
                </li>
            )
           })
           }
        </ul>
    </div>
  )
}

export default MessageList