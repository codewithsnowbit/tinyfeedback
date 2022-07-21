import { UserButton } from '@clerk/nextjs'
import React, {useState, useEffect} from 'react'
import CreateApp from '../../../components/CreateApp'
import { useRouter } from 'next/router'
export default function Dashboard() {
    const router = useRouter()
    const { pathname, query } = router;
    const [appName, setAppName] = useState('')
    const [appDescription, setAppDescription] = useState('')
    const [appModalOpen, setAppModalOpen] = useState(false)
    useEffect(() => {
        if(query.create === 'true'){
            setAppModalOpen(true)
        }
    }, [])
  return (
    <>
        <div className="fixed transition inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" style={{display: appModalOpen ? "block" : "none"}}>
                <div
            className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" onBlur={() => {
                setAppModalOpen(false)
                router.push('/app/dashboard')
            }}>
            <div className="mt-3 text-center">
                <div
                    className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 5h2"></path>
                    <path d="M5 4v2"></path>
                    <path d="M11.5 4l-.5 2"></path>
                    <path d="M18 5h2"></path>
                    <path d="M19 4v2"></path>
                    <path d="M15 9l-1 1"></path>
                    <path d="M18 13l2 -.5"></path>
                    <path d="M18 19h2"></path>
                    <path d="M19 18v2"></path>
                    <path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1.003 1.003 0 0 0 1.329 1.329l9.579 -4.39z"></path>
                    </svg>
                </div>
                <h3 className="text-lg mt-2 leading-6 font-medium text-gray-900">Create a new application!</h3>
                <div className="px-7 py-3">
                    <input className="
                            mt-1
                            block
                            w-full
                            rounded-md
                            border-green-300
                            shadow-sm
                            focus:border-green-300 focus:ring focus:ring-green-100 focus:ring-opacity-50
                  " type="text" placeholder="Application name" />
                </div>
                <div className="items-center px-4 py-3">
                    <button
                        id="ok-btn"
                        className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
                            Create
                    </button>
                </div>
            </div>
        </div>
        </div>
        <div className="max-w-screen-md mx-auto m-2 p-4 z-0">
            <div className="flex flex-col space-y-6  px-3 text-primary sm:px-6 lg:px-8 border-b">
                <div className="flex items-center justify-between">
                    <div className="text-lg font-medium hidden sm:block">
                        dhairyas-org - Create new {query.create}
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
                            Settings
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16">
                <CreateApp handleClick={() => {
                        const href = `/app/dashboard?create=${true}`
                        setAppModalOpen(true)
                        router.push(href, href, { shallow: true })
                }}/>
            </div>
        </div>
    </>
  )
}
