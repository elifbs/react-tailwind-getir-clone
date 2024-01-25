import React from 'react'

function Menu({title, items}) {
    const menus = [
        {
            title : "Getir'i keşfet",
            items : [
                {
                    title : "Hakkımızda"
                },
                {
                    title : "Kariyer"
                },
                {
                    title : "İletişim"
                },
                {
                    title : "COVİD-19 Duyuru"
                },
                {
                    title : "Sosyal Sorumluluk Projeleri"
                }
            ]
        },
        {
            title : "Yardıma mı ihtiyacın var?",
            items : [
                {
                    title : "Sıkça Sorulan Sorular"
                },
                {
                    title : "Kişisel Verilerin Korunması"
                },
                {
                    title : "Gizlilik Politikası"
                },
                {
                    title : "Kullanım Koşulları"
                },
                {
                    title : "Çerez Politikası"
                },
                {
                    title : "İşlem Rehberi"
                }
            ]
        },
        {
            title : "İş Ortağımız Ol",
            items : [
                {
                    title : "Bayimiz Olun"
                },
                {
                    title : "Deponu Kirala"
                },
                {
                    title : "GetirYemek Restoranı Ol"
                },
                {
                    title : "GetirÇarşı İşletmesi Ol"
                },
                {
                    title : "Zincir Restoranlar"
                }
            ]
        }
    ]
  return (
    <section>
        <nav>
            <h1 className='text-blue-900 font-semibold mb-3'> {title} </h1>
            <nav className='text-start m-5'>
                <ul>
                    {items.map((item,key) => (
                        <li className='m-3 hover:text-purple-800'>
                            <a href="#"> {item.title} </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </nav>
    </section>
  )
}

export default Menu