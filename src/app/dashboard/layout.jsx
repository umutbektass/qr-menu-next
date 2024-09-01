import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/sidebar';
import style from './style.module.css'
const Layout = ({ children }) => {
    return (
        <div className='flex h-full'>
            <div className={`${style.sidebarContainer} pt-12 hidden sm:block`}>
                <Sidebar />
            </div>
            <div className='flex-1 p-3 pt-12'>
                {children}
            </div>
            <ToastContainer />
        </div>
    )
}

export default Layout