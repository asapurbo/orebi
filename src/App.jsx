import Banner from "./components/layout/Banner"
import BestsellersProduct from "./components/layout/BestsellersProduct"
import Convenience from "./components/layout/Convenience"
import Item from "./components/layout/Item"
import NewProduct from "./components/layout/NewProduct"
import Product from "./components/layout/Product"
import SpecialOffers from "./components/layout/SpecialOffers"

function App() {
  
  return (
    <>
      <Banner/>
      <Convenience/>
      <Product/>
      <NewProduct/>
      <BestsellersProduct/>
      <Item/>
      <SpecialOffers/>
    </>
  )
}

export default App
