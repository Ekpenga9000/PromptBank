import AuthenticationComponent from '@/components/AuthenticationComponent'
import React from 'react'

const LoginPage = () => {
  return (
      <main className='main'>
          <AuthenticationComponent isLogin={ true } />
    </main>
  )
}

export default LoginPage