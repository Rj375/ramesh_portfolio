
import React from 'react'
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

// const getData = async(id) => {
//    const data = await fetch(`${workData}/${id}`)
//    return data
// }

const WorkDetails = async ({params}) => {
  const workDetails = await (params).showmoreworkId

  const getWorkData = (workDetails) => {
      return workData.find(
        (data) => data.id === workDetails
      );
    }
    let work = getWorkData(parseInt(workDetails, 10));
  return (
    <div>
      <div
          className='dark:text-black'>
                  <div

                  className='bg-no-repeat bg-cover h-80 w-full relative cursor-pointer'
                  style={{backgroundImage: `url(${work.bgImage})`}}>
                      
                      
                  </div>
                  <div className='bg-white w-10/12 py-3 px-5 flex items-center justify-between'>
                          <div>
                              <h2 className='font-semibold'>{work.title}</h2>
                              <p className='text-sm text-gray-700'>{work.description}</p>
                          </div>
                      </div>
          </div>
      
    </div>
  )
}

export default WorkDetails