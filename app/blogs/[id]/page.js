'use client'

import { assets, blog_data } from '@/Assets/assets'
import Footer from '@/Components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = ({params}) => {

    const [data,setData] = useState(null)

    const fetchBlogData = () => {
         const blog = blog_data.find(item => item.id === Number(params.id))
         setData(blog)
    }

    useEffect(() => {
      fetchBlogData()
    },[])

  return data && (
    <>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Link href={`/`}>
        <Image src={assets.logo} alt='' width={180} className='w-[130px] sm:w-auto' />
        </Link>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black cursor-pointer shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow} /></button>
      </div>
      <div className='text-center my-24'>
         <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
         <Image className='mx-auto mt-6 border border-white rounded-full' src={data.author_img} width={60} height={60} alt='' />
         <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
      </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
         <Image className='border-4 border-white' src={data.image} alt='' width={1280} height={720} />
         <h1 className='my-8 text-[26px] font-semibold'>{"Introduction:"}</h1>
         <p className=''>{data.description}</p>
         <h3 className='my-5 text-[18px] font-semibold '>Step 1: Self Reflection and Global Setting</h3>
         <p className='my-3'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.. </p>
         <p className='my-3'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.. </p>
         <h3 className='my-5 text-[18px] font-semibold '>Step 2: Self Reflection and Global Setting</h3>
         <p className='my-3'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.. </p>
         <p className='my-3'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.. </p>
         <h3 className='my-5 text-[18px] font-semibold '>Step 3: Self Reflection and Global Setting</h3>
         <p className='my-3'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.. </p>
         <p className='my-3'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.. </p>
         <h3 className='my-5 text-[18px] font-semibold '>Conclution:</h3>
         <p className='my-3'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
          <div className='my-24'>
             <p className='text-black font-semibold my-4'>Share this article on social media</p>
             <div className='flex'>
                    <Image src={assets.facebook_icon} alt='' width={50} />
                    <Image src={assets.twitter_icon} alt='' width={50} />
                    <Image src={assets.googleplus_icon} alt='' width={50} />
             </div>
          </div>
    </div>
    <Footer />
    </>
  )
}

export default page
