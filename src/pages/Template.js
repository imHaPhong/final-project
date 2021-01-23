import React from 'react'
import BottomNavBar from '../components/BottomNavBar';
import NavBar from "../components/NavBar";
import { useMediaQuery } from '../mics/custom-hook';

const Template = ({children}) => {
    const isDesktop = useMediaQuery('(min-width: 992px');

    return (
        <div>
            {isDesktop && <NavBar />}
            {children}
            {!isDesktop &&< BottomNavBar/>}
        </div>
    )
}

export default Template
