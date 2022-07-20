import { UserButton } from '@clerk/nextjs'
import React from 'react'

export default function Dashboard() {
  return (
    <>
        <div className="max-w-screen-md mx-auto m-2 p-4">
            <div className="flex flex-col space-y-6  px-3 text-primary sm:px-6 lg:px-8 border-b">
                <div className="flex items-center justify-between">
                    <div className="text-lg font-medium hidden sm:block">
                        dhairyas-org
                    </div>
                    <div>
                        <UserButton />
                    </div>
                </div>
                <div>
                    <div className="flex flex-row space-x-3">
                        <div className=" border-b pb-2 pt-1 leading-none text-primary transition sm:px-2 border-sky-400 cursor-pointer">
                            Overview
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
