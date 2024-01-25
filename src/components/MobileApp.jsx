import React from 'react'

function MobileApp() {
  return (
    <div className='bg-purple-600 bg-mobile-app text-center md:text-start p-10 rounded-none md:rounded-lg mt-20 flex justify-between'>
      <div className='flex flex-col gap-y-3 text-white'>
        <h3 className='text-2xl font-bold tracking-tight'>Getir'i indir!</h3>
        <p className='font-semibold '>İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</p>
        <nav className='mt-5 flex gap-x-2'>
          <a href="#">
            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
          </a>
          <a href="#">
            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
          </a>
          <a href="#">
            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
          </a>
        </nav>
      </div>
      <picture className='hidden md:block'>
        <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="" />
      </picture>
    </div>
  )
}

export default MobileApp