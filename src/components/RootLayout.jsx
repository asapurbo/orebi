import Header from './layout/Header'
import Category from './layout/Category'
import About from './layout/About'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
        <Header/>
        <Category/>
        <Outlet/>
        <About/>
    </>
  )
}

export default RootLayout