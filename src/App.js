import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/contact">
                    <ContactPage />
                </Route>
                <Route path="/about">
                    <AboutPage />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;