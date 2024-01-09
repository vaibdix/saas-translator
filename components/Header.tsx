import React from 'react'
import Logo from './Logo'
import DarkModeToggle from './DarkModeToggle'
import UserButton from './UserButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/auth'
import Link from 'next/link'
import { MessageSquareIcon } from 'lucide-react'
import CreateChatButton from './CreateChatButton'

async function Header() {

  const session = await getServerSession(authOptions)
  console.log(session)

  return (
    <header className='sticky top-0 z-50 bg-white dark:bg-gray-900'>
        <nav className='flex flex-col sm:flex-row items-center p-5 pt-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto'>
            <Logo />
            <div className='flex-1 flex items-center justify-end space-x-4'>
              {/* lang select */}
              {session ? (
                <>
                  <Link
                    href={'/chat'} prefetch={false}>
                    <MessageSquareIcon className='text-black dark:text-white' />
                  </Link>
                  <CreateChatButton />
                </>
              ): (
                <Link href='/pricing'>
                  Pricing
                </Link>
              )}

              {/* dark mode toggle */}
              <DarkModeToggle />

              {/* user button */}
              <UserButton session={session} />
            </div>
        </nav>
        {/* upgradde banner */}
    </header>
  )
}

export default Header