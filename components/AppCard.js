import React from 'react'

export default function AppCard({handleClick, appName, appDescription, appEndpoint, appId}) {
  return (
    <>
        <div className="w-64 h-64 border-2 border-green-500 flex flex-col space-y-3 justify-center items-center cursor-pointer rounded-md shadow-sm hover:shadow-lg transition" onClick={handleClick}>
            <div className="text-lg">
              {appName}
            </div>
            <div className="text-center text-sm text-gray-500">
              {appDescription}
            </div>
        </div>
    </>
  )
}
