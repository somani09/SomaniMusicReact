import './App.scss';
import React, { useState, Suspense} from 'react'
import Loading from './components/loading/Loading';
import { BrowserRouter as Router,  } from 'react-router-dom';
import { AnimatePresence} from 'framer-motion'

const Main = React.lazy(() => import('./components/Main'));

function App() {

  const [loaded, setLoaded] = useState(false)
  const [initialLoad, setInitialLoad] = useState(true)
  const [delay, setDelay] = useState(1.5);

  return (
    <div className="App">
      <Suspense fallback={<div className="loadingio-spinner-rolling-vulbiq9juz center-fixed">
                              <div className="ldio-tud414hs6f"><div></div></div>
                          </div>} >
        {loaded?null:
        <AnimatePresence exitBeforeEnter> 
          <Loading loaded={loaded} />
        </AnimatePresence>
          
          }
        <Router >
        <Main 
          loaded={loaded} 
          setLoaded={setLoaded} 
          initialLoad={initialLoad} 
          setInitialLoad={setInitialLoad} 
          delay={delay}
          setDelay={setDelay}
          />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
