import LayoutDesktop from '@/components/main comp/desktop/LayoutDesktop'
import React from 'react'

const page = () => {
  return (
    <>
        <section className='max-[1024px]:hidden'>
          <div>
            <LayoutDesktop/>
          </div>
        </section>
    </>
  )
}

export default page