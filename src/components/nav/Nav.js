import React, { useEffect } from 'react'
import {Link, useLocation} from 'react-router-dom'
import './nav.scss'
import {navDropDownVariants } from '../../data/variants'
import { motion } from 'framer-motion'

function Nav({activePage, setActivePage, initialLoad, setInitialLoad, setDelay}) {

    const location = useLocation();
  
    useEffect(() => {
        if(location.pathname === '/SomaniMusicReact/')
            setActivePage('home');
        if(location.pathname === '/SomaniMusicReact/songs')
            setActivePage('songs');
        else if(location.pathname === '/SomaniMusicReact/about')
            setActivePage('about')

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <motion.div 
            className="button-group center-row"
            variants={navDropDownVariants}
            initial="hidden"
            animate="visible"
            >
            <Link to="/SomaniMusicReact/" 
                className={activePage === "home" ? "active nav-button w25" : "nav-button w25"} 
                onClick = {()=>{
                    setActivePage("home"); 
                    if(initialLoad) {
                        setInitialLoad(false)
                        setDelay(0)
                    }; 
                    } }>HOME</Link>
            <Link to="/SomaniMusicReact/songs" 
                className={activePage === "songs" ? "active nav-button w25" : "nav-button w25"} 
                onClick = {()=>{
                    setActivePage("songs"); 
                    if(initialLoad) {
                        setInitialLoad(false)
                        setDelay(0)
                    }; 
                    }} >SONGS</Link>
            <Link to="/SomaniMusicReact/about" 
                className={activePage === "about" ? "active nav-button w35" : "nav-button w35"} 
                onClick = {()=>{
                    setActivePage("about"); 
                    if(initialLoad) {
                        setInitialLoad(false)
                        setDelay(0)
                    }; 
                    }} >ABOUT ME</Link>
        </motion.div>
    )
}

export default Nav
