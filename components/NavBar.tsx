import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
      <header>
          <nav className='flex justify-between items-center px-2 py-3'>
                <Link href="/" className='title font-bold text-lg'>PromptBank</Link>
                <ul className='flex item-center gap-5'>
                    <li>
                        <Link href="/prompts"><i className='bx bx-store' ></i>Marketplace</Link> {/* This would be the link to see all prompts. */}
                    </li>
                    <li>
                        <Link href="/create"><i className='bx bx-plus'></i> Create</Link>
                    </li>
                    <li>
                        <Link href="/signin"><i className='bx bx-log-in-circle' ></i>Login</Link>
                    </li>
                </ul>
          </nav>
    </header>
  )
}

export default NavBar