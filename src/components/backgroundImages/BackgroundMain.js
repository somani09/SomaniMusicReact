import React, { useEffect, useState, useCallback } from 'react'
import './backgroundMain.scss'
import { desktopImages, mobileImages } from '../../data/backgroundImages'
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from '@popmotion/popcorn';
import { backgroundvariants } from '../../data/variants'

function BackgroundMain({windowWidth, loaded ,setLoaded}) {
    let images = [];

    if(windowWidth<768)
        images = mobileImages
    else
        images = desktopImages

    const [[page, direction], setPage] = useState([0,0])
    const imageIndex = wrap(0, desktopImages.length, page)

    const paginate = useCallback((newDirection)=>{
            setPage([page + newDirection, newDirection]);
    },[page])
     

    useEffect(() => {
        const loadImage = image => {
        return new Promise((resolve, reject) => {
            const loadImg = new Image()
            loadImg.src = image
            loadImg.onload = () =>resolve(image)
            loadImg.onerror = err => reject(err)
        })
        }

        Promise.all(images.map(image => loadImage(image)))
        .then(() =>{ setLoaded(true);})
        .catch(err =>{ console.log("Failed to load images", err);})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        let interval = null;

        interval = setInterval(() => {
            paginate(1);
            
        }, 5000);
        return () => {
            clearInterval(interval)

        }
    }, [paginate])

    return (
        <div className="lower">
            <AnimatePresence initial={false} custom={direction} >
                <motion.img
                    className="backImage"
                    key={page}
                    src={images[imageIndex]}
                    custom={direction}
                    variants={backgroundvariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                />
                </AnimatePresence>
        </div>
    )
}

export default BackgroundMain
