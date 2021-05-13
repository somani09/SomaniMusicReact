import React from 'react'
import './home.scss'
import spotify from "../../assets/images/spotify-brands.svg"
import apple from  "../../assets/images/itunes-brands.svg"
import { motion} from 'framer-motion'
import {pageLeaveVariants, latestVariants, storeTitleVariants, storeListVariants, buttonVariants, youtubeLinkContainerVariants, youtubeLinkVariants } from '../../data/variants'

function Home({ delay}) {

    return (

            <motion.div 
                variants={pageLeaveVariants} 
                initial="hidden"
                animate="visible" 
                exit="exit"   
                className=" home center-col">
                
                <motion.div 
                    className="textCenter headingLatest "
                    variants={latestVariants}
                    custom={delay}
                    >Latest by Somani
                </motion.div>

                <div className="latestSongContainer ">
                    <motion.div 
                        className=" youtube  "
                        variants={youtubeLinkContainerVariants}
                        custom={delay}
                        >
                        <motion.iframe
                            key={"youtube"}
                            src="https://www.youtube.com/embed/0bMCJQeEK5U"
                            variants={youtubeLinkVariants}
                            custom={delay}
                            >
                        </motion.iframe >
                    </motion.div>
                    <div className="stores center-col text-center">
                        <motion.div 
                            className="storesTitle w100"
                            variants={storeTitleVariants}
                            custom={delay}
                            >
                            <div>
                                Stores
                            </div>    
                        </motion.div>
                        <div className="storeInner">
                            <motion.div 
                                className="w30 center"
                                variants={storeListVariants}
                                custom={[1,delay]}
                                >
                                <a className="center" href="https://open.spotify.com/album/0FsNWcyy4jDJdRYjQenONI?si=yop_Of8rSJKCeEZC0YQemw" target="_blank" rel="noreferrer">
                                    <motion.img
                                        className="zoom" 
                                        src={spotify} 
                                        alt="spotify"
                                        variants={buttonVariants}
                                        whileHover="hover" />
                                </a>
                            </motion.div>

                            <motion.div 
                                className="w30 center"
                                variants={storeListVariants}
                                custom={[2,delay]}
                                >
                                <a className="center" href="https://music.apple.com/us/album/still-the-same-single/1514589665?uo=4" target="_blank" rel="noreferrer">
                                    <motion.img 
                                    className="zoom" 
                                    src={apple} 
                                    alt="spotify"
                                    variants={buttonVariants}
                                    whileHover="hover" /> 
                                </a>
                            </motion.div>

                            <motion.div 
                                className="otherStores center text-center "
                                variants={storeListVariants}

                                custom={[3,delay]}
                                >
                                <a  href="https://distrokid.com/hyperfollow/somani/still-the-same" className="other" target="_blank" rel="noreferrer">Other Stores</a>
                            </motion.div>
                        </div>
                        
                    </div>
                </div>
            </motion.div>

    )
}

export default Home
