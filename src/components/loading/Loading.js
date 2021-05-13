import React from 'react'
import './loading.scss'
import logo from '../../assets/images/logo.gif'
import { motion } from 'framer-motion'

function Loading({loaded}) {

    const loadingFadeOutVariants = {
        hidden : {
            opacity: 0 
        },
        visible: {
            opacity: 1,
            transition: {
                duration :.5
            }
        },
        exit : {
            opacity: 0,
            transition: {
                duration :.5
            }
        }

    }

    return (
        
        <motion.div
            id="loadingScreen" 
            className="vh100 vw100 center loading"
            variants={loadingFadeOutVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
            <div>
                <img src={logo} width="100rem" alt="logo"></img>
                <div className="loadingText text-center">Loading</div>
            </div>
        </motion.div>
    )
}

export default Loading
