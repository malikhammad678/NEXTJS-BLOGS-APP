import { blog_data } from '@/Assets/assets'
import React, { useState } from 'react'
import Blogitem from './Blogitem'

const Bloglist = () => {

    const [menu,setmenu] = useState("All")

  return (
    <div>
      <div className='flex justify-center gap-6 my-10'>
         <button onClick={() => setmenu("All")} className={`${menu === "All" ? 'bg-black text-white py-1 px-4 rounded-sm cursor-pointer' : 'cursor-pointer'}`}>All</button>
         <button className={`${menu === "Technology" ? 'bg-black text-white py-1 px-4 rounded-sm cursor-pointer' : 'cursor-pointer'}`} onClick={() => setmenu('Technology')} >Technology</button>
         <button className={`${menu === "Startup" ? 'bg-black text-white py-1 px-4 rounded-sm cursor-pointer' : 'cursor-pointer'}`} onClick={() => setmenu('Startup')} >Startup</button>
         <button className={`${menu === "Lifestyle" ? 'bg-black text-white py-1 px-4 rounded-sm cursor-pointer' : 'cursor-pointer'}`} onClick={() => setmenu('Lifestyle')} >Lifestyle</button>
      </div>
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
          {blog_data.filter((item) => menu === "All" ? true : item.category === menu ).map((item,index) => (
             <Blogitem key={index} title={item.title} description={item.description} category={item.category} image={item.image} />
          ))}
      </div>
    </div>
  )
}

export default Bloglist
