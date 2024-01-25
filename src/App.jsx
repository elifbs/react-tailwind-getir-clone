import Header from './components/Header'
import Hero_sections from './components/Hero_sections'
import Categories from './components/Categories'
import Campanies from './components/Campanies'
import Favorites from './components/Favorites'
import MobileApp from './components/MobileApp'
import Cards from './components/Cards'
import Footer from './components/Footer'
import { useWindowWidth } from '@react-hook/window-size'


function App() {

  const windowWidth = useWindowWidth()

  return (
    <>
      <Header />
      {windowWidth <= 768 && <Campanies />}
      <Hero_sections/>
      <Categories />
      {windowWidth > 768 && <Campanies />}
      <Favorites />
      <MobileApp />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
