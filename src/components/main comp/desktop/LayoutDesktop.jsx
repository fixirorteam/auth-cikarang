"use client"
import React from 'react'
import Link from 'next/link'
import FixirorLogo from '../../../../public/assets/img/fixirorlogo.png'
import Image from 'next/image'
import { Nunito_Sans, Montserrat, Fira_Sans } from 'next/font/google'

const Nunito = Nunito_Sans({ subsets: ['latin'], weight: ['400']})
const montserrat = Montserrat({ subsets: ['latin'], weight: ['500']})
const fira = Fira_Sans({ subsets: ['latin'], display: 'swap', weight: ['500']})

const LayoutDesktop = () => {
  return (
    <>
        <section className='max-[1024px]:hidden'>
            <div className='flex justify-between'>
                <div className='flex flex-col items-center ml-[10rem] mt-6'>
                    <div className=''>
                        <Image
                            src={FixirorLogo}
                            width={120}
                            height={120}
                            alt="Fixiror"
                            quality={100}
                            priority={true}
                        />
                    </div>
                    <div className='flex flex-col gap-[2rem] items-center mt-[2rem]'>
                        <div>
                            <h1 className={`${fira.className} text-3xl font-semibold`}>Mulai Berinovasi</h1>
                        </div>
                        <div className='flex flex-col gap-6 mt-4'>
                            <button  className='w-[300px] h-[50px]  bg-[#0a6460] rounded-xl hover:bg-[#021615] hover:scale-95 hover:shadow-lg hover:shadow-[#6eeaf3]'>
                                <Link href={'/signin'}>
                                    <h1 className='text-white'>Masuk</h1>
                                </Link>
                            </button>
                            <button  className='w-[300px] h-[50px] bg-[#0a6460] rounded-xl hover:bg-[#021615] hover:scale-95 hover:shadow-lg hover:shadow-[#6eeaf3]'>
                                <Link href={'/signup/authfirst'}>
                                    <h1 className='text-white'>Daftar</h1>
                                </Link>
                            </button>
                        </div>
                        <div className='flex flex-col mt-[5.5rem] gap-8 items-center'>
                            <div className='flex items-center gap-2'>
                                <button>
                                    <span className={`${Nunito.className} text-sm underline-offset-2 underline`}>Kebijakan</span>
                                </button>
                                <div className='border border-y-2 h-[28px] border-slate-400'>

                                </div>
                                <button>
                                    <span className={`${Nunito.className} text-sm underline-offset-2 underline`}>
                                        Syarat & Ketentuan
                                    </span>
                                </button>
                            </div>
                            <div className='flex items-center gap-2'>
                                <p className={`${montserrat.className} text-sm font-semibold`}>&copy; 2024.</p>
                                <h1 className={`${montserrat.className} text-sm font-semibold`}>Powered By PT FIXIROR IFELSE TECH</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-[700px] h-[600px] bg-slate-100 mt-6 mr-8 rounded-3xl shadow-2xl shadow-[#256864]'>
                    Layer 2
                </div>
            </div>
        </section>
    </>
  )
}

export default LayoutDesktop