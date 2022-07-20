import React from 'react'

export default function App() {
  return (
    <>
        <div className="max-w-screen-lg mx-auto m-2 p-4">
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-col space-y-4">
                    <div>
                        <h1 className="text-3xl text-center font-bold prose lg:prose-4xl">
                            What is your feedback on our service?
                        </h1>
                    </div>
                    <div>
                        <textarea className="
                         mt-1
                         block
                         w-full
                         rounded-md
                         border-transparent
                        border-gray-500 focus:border-gray-500 focus:bg-white focus:ring-0 h-36" placeholder="Tell us what you think..."></textarea>
                    </div>
                    <div>
                        <button className="
                            mt-2
                            w-full
                            bg-blue-500
                            hover:bg-blue-700
                            text-white
                            font-bold
                            py-2
                            px-4
                            rounded-md
                            focus:outline-none
                            focus:shadow-outline
                            focus:border-blue-700
                            focus:ring-0
                            ">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
