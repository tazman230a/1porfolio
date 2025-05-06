"use client"

import { motion } from "framer-motion"
import React,{ useState }  from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { projects } from "@/constants"



const service = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [project, setProject] = useState(projects[0]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSlideChange = (swiper: { activeIndex: any }) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex])
  }

  return (
    <motion.section 
      initial={{opacity: 0}}
      animate={{opacity: 1, 
          transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }} 
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">
                {project.description}
              </p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((Item, index ) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {Item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20 "></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
               
                 {/* github project button */}
                
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1} 
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide 
                    key={index}
                    className="w-full"
                  >
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                       {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 "></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image 
                          src={project.image}
                          fill
                          alt=""
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/* slider button */}
              <WorkSliderBtns />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default service