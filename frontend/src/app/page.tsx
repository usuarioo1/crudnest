import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function HomePage() {
  return (
    <div>
      <h1>
        NextNestAPP
      </h1>
      <Link href='/products/new'>
      create Product</Link>
    </div>
  )
}

export default HomePage
