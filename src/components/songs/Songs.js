import React from 'react'
import './songs.scss'
import Song from './Song';
import { songsData } from '../../data/songsData'
import { motion } from 'framer-motion'
import {pageLeaveVariants, } from '../../data/variants'

function Songs({ delay}) {
    return (
        // <div className="dataContainer center-col">
        //     <Nav activePage={activePage} setActivePage={setActivePage}/>
            <motion.div 
            className="songs"
            variants={pageLeaveVariants} 
            initial="hidden"
            animate="visible" 
            exit="exit"
            >
                {songsData.map((x,i) => (
                    <Song 
                        key={i} 
                        name={x.name} 
                        img={x.img} 
                        youtubeLink={x.youtube} 
                        spotifyLink={x.spotify} 
                        appleLink={x.apple} 
                        other={x.other}
                        i={i}
                        delay={delay}
                        />
                ))}
            </motion.div>
        // </div>
    )
}

export default Songs
