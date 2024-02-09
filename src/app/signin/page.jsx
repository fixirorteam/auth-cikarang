import LayoutSigninDesktop from '@/components/page comp/signin comp/desktop/LayoutSigninDesktop'
import React from 'react'

const page = () => {
  return (
    <>
        <section className='max-[1024px]:hidden'>
            <div>
                <LayoutSigninDesktop/>
            </div>
        </section>
    </>
  )
}

export default page