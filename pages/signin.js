import { SignIn } from '@clerk/nextjs'
import React from 'react'

export default function Login() {
  return (
    <>
        <div>
            <SignIn /> 
        </div>
    </>
  )
}
