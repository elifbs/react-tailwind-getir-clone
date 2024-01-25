import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import Banners from '../api/banner.json'


function Campanies() {

  const [banners, setBanners] = useState([])

  useEffect(() => {
    setBanners(Banners)
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1520,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (

    <div>
      <h3 className='text-3xl font-semibold text-center m-10'>Kampanyalar</h3>
      <Slider {...settings}>
        {Banners.length && Banners.map((banner, index) => (
          <div key={banner.id} className='px-5'>
            <img src={banner.image} className='rounded-none md:rounded-lg' />
          </div>
        ))}
      </Slider>

    </div>
  )
}

export default Campanies