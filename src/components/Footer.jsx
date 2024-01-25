import React from 'react'
import Menu from './ui/Menu'
import { FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";

function Footer() {
  const menus = [
    {
      title: "Getir'i keşfet",
      items: [
        {
          title: "Hakkımızda"
        },
        {
          title: "Kariyer"
        },
        {
          title: "İletişim"
        },
        {
          title: "COVİD-19 Duyuru"
        },
        {
          title: "Sosyal Sorumluluk Projeleri"
        }
      ]
    },
    {
      title: "Yardıma mı ihtiyacın var?",
      items: [
        {
          title: "Sıkça Sorulan Sorular"
        },
        {
          title: "Kişisel Verilerin Korunması"
        },
        {
          title: "Gizlilik Politikası"
        },
        {
          title: "Kullanım Koşulları"
        },
        {
          title: "Çerez Politikası"
        },
        {
          title: "İşlem Rehberi"
        }
      ]
    },
    {
      title: "İş Ortağımız Ol",
      items: [
        {
          title: "Bayimiz Olun"
        },
        {
          title: "Deponu Kirala"
        },
        {
          title: "GetirYemek Restoranı Ol"
        },
        {
          title: "GetirÇarşı İşletmesi Ol"
        },
        {
          title: "Zincir Restoranlar"
        }
      ]
    }
  ]
  return (
    <div>
      <div className='grid grid-cols-2 gap-10 md:grid-cols-4 text-center m-10'>
        <div>
          <h3 className='text-blue-900 font-semibold mb-3'>Getir İndir</h3>
          <a className='m-5' href="#">
            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
          </a>
          <a className='m-5' href="#">
            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
          </a>
          <a className='m-5' href="#">
            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
          </a>
        </div>
        {menus.map((menu, index) =>
          <Menu key={index} {...menu} />
        )}
      </div>
      <div className='flex justify-between'>
        <div className='flex gap-5 text-xs mb-10'>
          <p>&copy;2024 Getir</p>
          <ul>
            <a href=""><li className='hover:text-purple-800'>Bilgi Toplumu Hizmetleri</li></a>
          </ul>
        </div>
        <div className='flex gap-x-5'>
          <a href="#"><FaFacebook className='text-gray-600 hover:text-purple-800' size={'24px'}/></a>
          <a href="#"><FaTwitter className='text-gray-600 hover:text-purple-800' size={'24px'}/></a>
          <a href="#"><FaInstagram className='text-gray-600 hover:text-purple-800' size={'24px'}/></a>
        </div>

      </div>
    </div>
  )
}

export default Footer