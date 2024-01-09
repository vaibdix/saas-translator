import logoimage from '../images/logos/logoImage.png'
import Link from 'next/link'
import { AspectRatio } from './ui/aspect-ratio'
import Image from 'next/image'

function Logo() {
  return (
    <Link href='/' prefetch={false} className='overflow-hidden'>
      <div className='flex h-14 w-72 items-center'>
        <AspectRatio
          ratio={16 / 9}
          className='flex items-center justify-center'
        >
          <Image
            priority
            src={logoimage}
            alt='anychat'
            className='dark:invert dark:filter'
          />
        </AspectRatio>
      </div>
    </Link>
  )
}

export default Logo
