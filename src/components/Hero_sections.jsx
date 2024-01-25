import React from 'react'
import Slider from "react-slick";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { FaFacebook } from "react-icons/fa";
import { useWindowWidth } from '@react-hook/window-size'

function Hero_sections() {

  const [selected, setSelected] = useState("TR");

  const windowWidth = useWindowWidth()

  const phones = {
    TR: '+90',
    US: '+10',
    DE: '+7',
    IN: '+15'
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear"
  }


  return (
    <div className='relative before:bg-gradient-to-r before:from-purple-700 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10'>
      {windowWidth >= 768 && <Slider {...settings}>
        <div>
          <img className='w-full h-[400px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg" alt="" />
        </div>
        <div>
          <img className='w-full h-[400px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg" alt="" />
        </div>
      </Slider>}
      <div className='md:container lg:px-40 flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 h-full z-20'>
        <div className='hidden sm:block'>
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
          <h3 className='text-2xl md:text-4xl mt-8 font-semibold text-white'>Dakikalar içinde <br /> kapında</h3>
        </div>
        <div className='w-full px-10 md:mx-10 sm:px-5 sm:mx-0 md:w-[400px] md:rounded-lg bg-gray-50 p-6'>
          <h4 className='text-purple-600 text-center font-semibold'>Giriş yap veya kayıt ol</h4>
          <div className='flex gap-2 mt-4'>
            <ReactFlagsSelect
              countries={Object.keys(phones)}
              customLabels={phones}
              onSelect={code => setSelected(code)}
              selected={selected}
              className='flag-select rounded-md'
            />
            <label className='flex-1 relative block'>
              <input required className='border-2 h-11 w-full px-4 transition-colors hover:border-purple-600 rounded-md outline-none peer text-sm pt-4' type="text" />
              <span className='absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-700 transition-all peer-focus:h-7 peer-valid:h-7 peer-valid:text-xs peer-focus:text-xs'>Telefon Numarası</span>
            </label>

          </div>
          <button className='bg-yellow-500 rounded-md text-purple-600 w-full mt-4 p-4 transition-colors hover:bg-purple-600 hover:text-yellow-500'>
            Telefon numarası ile devam et
          </button>
          <hr className='h-[1px] bg-gray-300 my-2' />
          <button className='bg-blue-700 bg-opacity-10 h-12 px-4 ps-16 flex items-center gap-4 rounded-md text-blue-900 text-opacity-80 w-full mt-4'>
            <FaFacebook size={24} />
            Facebook ile devam et
          </button>

        </div>
      </div>
    </div>
  )
}


export default Hero_sections