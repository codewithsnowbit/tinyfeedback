import React from 'react'

export default function CreateApp({handleClick}) {
  return (
    <>
        <div className="w-64 h-64 bg-gray-100 flex flex-col space-y-3 justify-center items-center cursor-pointer rounded-md shadow-sm hover:shadow-lg transition" onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" strokeWidth={2} stroke="#4b5563" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1={12} y1={5} x2={12} y2={19}></line>
            <line x1={5} y1={12} x2={19} y2={12}></line>
            </svg>
            <div className="text-center text-md text-gray-600">
                New application
            </div>
        </div>
    </>
  )
}
