import AuthenticationComponent from '@/components/AuthenticationComponent'
import React from 'react'

const RegistrationPage = () => {
  return (
    <main className='main'>
      <AuthenticationComponent isLogin={ false } />
    </main>
  )
}

export default RegistrationPage