import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {logoVariants } from '../../data/variants'
import sign from '../../assets/images/sign.gif'
import fallbackSign from '../../assets/images/fallbackSign.svg'

function Header() {

    const [headerLoaded, setHeaderLoaded] = useState(false)

    useEffect(() => {
        const loadImage = image => {
            return new Promise((resolve, reject) => {
                const loadImg = new Image()
                loadImg.src = image
                loadImg.onload = () =>resolve(image)
                loadImg.onerror = err => reject(err)
            })
            }
    
            Promise.all([sign].map(image => loadImage(image)))
            .then(() =>{ setHeaderLoaded(true);})
            .catch(err =>{ console.log("Failed to load images", err);})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <motion.div 
            className="header  center-row w100"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {
            headerLoaded?
                <img src={sign} width="100%" alt="Somani Music" />
                :
                <img src={fallbackSign} width="100%" alt="Somani Music" />   
            }
        </motion.div>
    )
}

export default Header
