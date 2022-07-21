import Link from 'next/link'
import React from 'react'

export default function AppCard({handleClick, appName, appDescription, appEndpoint, appId}) {
  return (
    <>
      <Link href={`/app/dashboard/${appEndpoint}`}>
        <a>
        <div className="relative w-64 h-64 border-2 border-green-500 flex flex-col space-y-3 justify-center items-center cursor-pointer rounded-md shadow-sm hover:shadow-lg transition" onClick={handleClick}>
            <div className="text-lg">
              {appName}
            </div>
            <div className="text-center text-sm text-gray-500">
              {appDescription}
            </div>
            <div className="absolute bottom-0 right-2 text-gray-500 font-extralight text-[8px] font-sans">
              {appId}
            </div>
        </div>
        </a>
      </Link>
    </>
  )
}
