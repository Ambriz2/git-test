
import React from 'react'
import'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Switch,Route,Link, BrowserRouter } from "react-router-dom";
import StatefulExample from './components/StatefulExample';
import UsingState from './components/UsingState';
import DefaultProps from './components/DefaultProps';
import ValidatingProps from './components/ValidatingProps';





function App() {
        return(
            <div className="wrapper">
                <div>
                    <h1 className="tutorialHeader">Home Page</h1>
                </div>
               
                    <BrowserRouter>
                        
                            <nav>
                                <ul className="btn-info" >
                                    <li>
                                        <Link to="/StatefulExample" >Stateful Example</Link>
                                    </li>
                                    <li>
                                        <Link to="/UsingState">Using State</Link>
                                    </li>
                                    <li>
                                        <Link to="/DefaultProps">Default Props</Link>
                                    </li>
                                    <li>
                                        <Link to="/ValitatingProps">Validating Props</Link>
                                    
                                    </li>
                                </ul>
                              
                            </nav>
                            <br />
                            <Switch>
                                <Route exact path="/StatefulExample"><StatefulExample /></Route>
                                <Route path="/UsingState"><UsingState /></Route>
                                <Route path="/DefaultProps"><DefaultProps /> </Route>
                                <Route path="/ValidatingProps"><ValidatingProps /> </Route>
                            </Switch>
                        
                        </BrowserRouter>
            </div>
        )  
    }


export default App;

