import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
export default function GetStarted() {
    const router = useRouter()
    const [orgName, setOrgName] = useState('')
    const [clerkId, setClerkId] = useState('')
    useEffect(() => {
        async function checkUserEntry(){
            console.log('checkUserEntry')
            const userId = localStorage.getItem('userId')
            const checkUserEntry = await axios.get(`/api/checkusercreated?userId=${userId}`)
            if(checkUserEntry.data.success){
                router.push('/app')
            }
        }
        checkUserEntry()
    })
    async function handleCreateOrg(){
        const body = {
            orgName,
            clerkId,
        }
        const res = await axios.post('/api/getstarted', body)
        console.log(res)
        }
  return (
    <>
        <div className="flex justify-center items-center min-h-screen m-2 p-4">
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
                    " value={orgName} placeholder="Tim's Org" onChange={(e) => {setOrgName(e.target.value)
                        // get the userId from localStorage
                        const userId = localStorage.getItem('userId')
                        setClerkId(userId)
                    }}/>
                    <div className="flex justify-end mt-2">
                        <button className={`border px-4 py-1 rounded-md text-lg font-light ${orgName ? "bg-black text-white" : "bg-gray-300 text-black"} duration-300`}
                        disabled={!orgName} onClick={handleCreateOrg}>
                            Next →
                        </button>
                    </div>
                </div>
        </div>
    </>
  )
}
