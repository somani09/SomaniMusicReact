import React from 'react'
import insta from "../../assets/images/instagram.svg"
import linkedIn from "../../assets/images/linkedin.svg"
import logo from '../../assets/images/logo.gif'
import './footer.scss'
import { motion} from 'framer-motion'
import { footerVariants } from '../../data/variants'

function Footer({delay}) {


    return (
        <motion.div 
        className="footer"
        initial="hidden"
        animate="visible"
        >
            <motion.a 
                className="socialLinks" 
                href="https://www.instagram.com/somanimusic/" 
                target="_blank" 
                rel="noreferrer" 
                variants={footerVariants}
                custom={[1,delay]}
                >
                <img className="socials" src={insta} width="30rem" alt="insta"  />
            </motion.a>
            <motion.img 
                src={logo} 
                width="50rem" 
                alt="" 
                variants={footerVariants}
                custom={[2,delay]}
                />
            <motion.a 
                className="socialLinks" 
                href="https://www.linkedin.com/in/vaibhav-somani/" 
                target="_blank" 
                rel="noreferrer" 
                variants={footerVariants}
                custom={[3,delay]}
                >
                <img className="socials" src={linkedIn} width="30rem" alt="linkedIn"  />
            </motion.a>
        </motion.div>
    )
}

export default Footer
