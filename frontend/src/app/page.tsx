import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function HomePage() {
  return (
    <div className='flex justify-between'>
      <h1 className='text-4xl font-bold'>
        NextNestAPP
      </h1>
      <Link href='/products/new' className={buttonVariants()}>
      create Product</Link>
    </div>
  )
}

export default HomePage
