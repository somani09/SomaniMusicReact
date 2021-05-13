import React from 'react'
import youtube from "../../assets/images/youtube-brands.svg"
import spotify from "../../assets/images/spotify-brands.svg"
import apple from  "../../assets/images/itunes-brands.svg"
import logo from '../../assets/images/logo.gif'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { songListVariants, buttonVariants, songListIconsVariants } from '../../data/variants'
import { motion } from 'framer-motion'

function Song({name, img,youtubeLink, spotifyLink, appleLink, other, i, delay}) {

    return (
        <motion.div 
            className="song center-col"
            variants={songListVariants}
            custom={[i,delay]}
            >
            <LazyLoadImage
                className="albumArt"
                src={img}  
                alt={name}
                placeholderSrc = {logo}
                />
            <div className="songName">{name}</div>
            <div className="linksArea">
                <motion.div 
                    className="w20 center"
                    variants={songListIconsVariants}
                    custom={[1,delay]}
                    >
                    <a  href={youtubeLink} target="_blank" rel="noreferrer">
                        <motion.img 
                            className="icons" 
                            src={youtube} 
                            alt="youtube" 
                            variants={buttonVariants}
                            whileHover="hover"
                            />
                    </a>
                </motion.div>
                <motion.div 
                    className="w20 center"
                    variants={songListIconsVariants}
                    custom={[2,delay]}
                    >
                    <a  href={spotifyLink} target="_blank" rel="noreferrer">
                        <motion.img 
                            className="icons" 
                            src={spotify} 
                            alt="spotify" 
                            variants={buttonVariants}
                            whileHover="hover"
                            />
                    </a>
                </motion.div>
                <motion.div 
                    className="w20 center"
                    variants={songListIconsVariants}
                    custom={[3,delay]}
                    >
                    <a  href={appleLink} target="_blank"  rel="noreferrer"> 
                        <motion.img 
                            className="icons" 
                            src={apple} 
                            alt="apple" 
                            variants={buttonVariants}
                            whileHover="hover"
                            /> 
                        
                        </a>
                </motion.div>
                <motion.div 
                    className="w20 center"
                    variants={songListIconsVariants}
                    custom={[4,delay]}
                    >
                    <a  href={other} target="_blank" className="iconOther" rel="noreferrer">Other Stores</a>
                </motion.div>
            </div>
            <div className="line"></div>

        </motion.div>
    )
}

export default Song
