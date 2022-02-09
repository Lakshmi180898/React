import React from 'react'
import{BrowserRouter as Router,Switch,Route}from 'react-router-dom'
import Navbar from './Navbar'
import Services from './Services'
import Contact from './Contact'

class App extends React.Component {
    render() {
        return <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/services" component={Services} />
                    <Route path="/contact" component={Contact} />
                    
                    
                </Switch>
            </Router>
        </>
    }
}
export default App