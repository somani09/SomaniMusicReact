import React, { useState, Suspense, useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom';
import './main.scss'
import fallbackSign from '../assets/images/fallbackSign.svg'
import BackgroundMain from './backgroundImages/BackgroundMain'
import Nav from './nav/Nav';
import logo from '../assets/images/logo.gif'
import { motion , AnimatePresence} from 'framer-motion'
import { mainVariants } from '../data/variants'
import Footer from './footer/Footer';

const Home = React.lazy(() => import('./home/Home'));
const Songs = React.lazy(() => import('./songs/Songs'));
const About = React.lazy(() => import('./about/About'));
const Header = React.lazy(() => import('./header/Header'));




function Main({loaded, setLoaded, initialLoad, setInitialLoad, delay, setDelay}) {

    const location = useLocation();
    let windowWidth = window.innerWidth;

    const [activePage, setActivePage] = useState("home")

    const [addedDelay, setAddedDelay] = useState(delay)
  
    useEffect(() => {
        if (location.pathname === '/')
            setAddedDelay(prevDelay => prevDelay + 3.5)
        else if(location.pathname === '/songs')
            setAddedDelay(prevDelay => prevDelay + 2.5)
        else if(location.pathname === '/about')
            setAddedDelay(prevDelay => prevDelay + .1)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="outerContainer h100 w100">
        
            <BackgroundMain setLoaded={setLoaded} loaded={loaded} windowWidth={windowWidth}/>

            {loaded?
            <div className="main h100 w100 x-center">
                
                <Suspense fallback={
                    <div className="header  center-row w100">
                        <img src={fallbackSign} width="100%" alt="Somani Music" />                       
                    </div>
                }>
                    <Header />
                </Suspense>
                <Nav 
                    activePage={activePage} 
                    setActivePage={setActivePage} 
                    initialLoad={initialLoad} 
                    setInitialLoad={setInitialLoad}
                    delay={delay}
                    setDelay={setDelay}
                    />
                <motion.div 
                    className="dataContainer center-row"
                    variants={mainVariants}
                    initial="hidden"
                    animate="visible"
                    >
                <Suspense fallback={<img className="loadingComponent" src={logo} width="100rem" alt="logo"></img>}>
                    <AnimatePresence exitBeforeEnter>
                        <Switch location={location} key={location.key}>
                            <Route 
                                exact 
                                path="/" 
                                component={ (props) => <Home activePage={activePage} setActivePage={setActivePage}  delay={delay} /> } />
                            <Route 
                                exact 
                                path="/songs" 
                                component={ (props) => <Songs activePage={activePage} setActivePage={setActivePage} delay={delay} /> } />
                            <Route 
                                exact 
                                path="/about" 
                                component={ (props) => <About activePage={activePage} setActivePage={setActivePage} delay={delay} /> } />
                        </Switch>
                    </AnimatePresence>
                </Suspense>
                </motion.div>

                <Footer delay={addedDelay}/>
            </div> :null}
        </div>
    )
}

export default Main
