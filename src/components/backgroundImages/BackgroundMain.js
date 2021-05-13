import React, { useEffect } from 'react'
import './backgroundMain.scss'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { desktopImages, mobileImages } from '../../data/backgroundImages'

function BackgroundMain({windowWidth, loaded ,setLoaded}) {

    let images = [];

    if(windowWidth<768)
        images = mobileImages
    else
        images = desktopImages



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


    return (
        <div className="lower">
        <Fade duration={3000} arrows={false}>
            {images.map((x,i) => (
                <div key={i} className="each-fade backgroundMain">
                    <img className="backImage"  src={x} alt="backgroundImage" />
                </div>
            ))}
        </Fade>
        </div>
    )
}

export default BackgroundMain
