import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'
import Scrollup from './scrollup/Scrollup'

const Layout = () => {
    return <>
        <Header></Header>
        <Outlet />
        <Footer></Footer>
        <Scrollup />
    </>
}

export default Layout