import About from "./components/layout/About"
import Banner from "./components/layout/Banner"
import BestsellersProduct from "./components/layout/BestsellersProduct"
import Category from "./components/layout/Category"
import Convenience from "./components/layout/Convenience"
import Header from "./components/layout/Header"
import Item from "./components/layout/Item"
import NewProduct from "./components/layout/NewProduct"
import Product from "./components/layout/Product"
import SpecialOffers from "./components/layout/SpecialOffers"

function App() {
  
  return (
    <>
      <Header />
      <Category />
      <Banner/>
      <Convenience/>
      <Product/>
      <NewProduct/>
      <BestsellersProduct/>
      <Item/>
      <SpecialOffers/>
      <About/>
    </>
  )
}

export default App
