import React from 'react'
import './about.scss'
import {aboutData} from '../../data/aboutData'
import { motion } from 'framer-motion'
import {pageLeaveVariants, aboutVariants} from '../../data/variants'

function About({delay}) {
    return (
        <motion.div 
            className="w100 h100 center"
            variants={pageLeaveVariants} 
            initial="hidden"
            animate="visible" 
            exit="exit" >
            <motion.div
                className="about "
                variants={aboutVariants} 
                custom = {delay}
                >
                {aboutData}
            </motion.div>
        </motion.div>
    )
}

export default About
