import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { UserButton } from '@clerk/nextjs'
import axios from 'axios'
export default function Application() {
    const router = useRouter()
    const [appName, setAppName] = useState('')
    const [appDescription, setAppDescription] = useState('')
    const { pathname, query } = router
    useEffect(() => {
        const slug = query.slug
        async function getAppInfo() {
            await axios.get(`/api/appinfo?endpoint=${slug}`)
            .then(res => {
                const { data } = res
                console.log(data.checkAppEntry[0])
                if(data.success){
                    setAppName(data.checkAppEntry[0].appName)
                    setAppDescription(data.checkAppEntry[0].appDescription)
                }else{
                    toast.error(data.message)
                }
            })
        }
        getAppInfo()
    }, [])
  return (
    <>
        <div className="max-w-screen-md mx-auto m-2 p-4 z-0">
            <div className="flex flex-col space-y-6  px-3 text-primary sm:px-6 lg:px-8 border-b">
                <div className="flex items-center justify-between">
                    <div className="text-lg hidden sm:block">
                        {localStorage.getItem('orgInfo') ? JSON.parse(localStorage.getItem('orgInfo')).organizationName : 'Something went wrong'} / {appName}
                    </div>
                    <div>
                        <UserButton />
                    </div>
                </div>
                <div>
                    <div className="flex flex-row space-x-3">
                        <div className=" border-b pb-2 pt-1 leading-none text-primary transition sm:px-2 border-green-400 cursor-pointer">
                            Overview
                        </div>
                        <div className="pb-2 pt-1 leading-none transition sm:px-2 hover:border-b hover:border-gray-800 cursor-pointer">
                            Responses
                        </div>
                        <div className="pb-2 pt-1 leading-none transition sm:px-2 hover:border-b hover:border-gray-800 cursor-pointer">
                            Settings
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
