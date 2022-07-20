import React, {useState} from 'react'

export default function GetStarted() {
    const [orgName, setOrgName] = useState('')
  return (
    <>
        <div className="flex justify-center items-center min-h-screen">
        <div className={`mt-16 max-w-screen-md mx-auto w-full`}>
                    <h3 className="text-2xl sm:text-3xl font-bold">
                        Organization Name
                    </h3>
                    <input type="text" className="
                        mt-4
                        block
                        w-full
                        px-0.5
                        border-0 border-b-2 border-gray-200
                        focus:ring-0 focus:border-black
                        text-lg
                        sm:text-2xl
                        font-light
                    " value={orgName} placeholder="Tim's Org" onChange={(e) => setOrgName(e.target.value)}/>
                    <div className="flex justify-end mt-2">
                        <button className={`border px-4 py-1 rounded-md text-lg font-light ${orgName ? "bg-black text-white" : "bg-gray-300 text-black"} duration-300`}
                        disabled={!orgName}>
                            Next →
                        </button>
                    </div>
                </div>
        </div>
    </>
  )
}
