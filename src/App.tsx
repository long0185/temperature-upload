import React, { ReactElement } from 'react'
import Home from "./pages//upload"
import Done from "./pages/done"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

interface Props {

}

export default function App({ }: Props): ReactElement {
    return (
        <div className='box'>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/done" component={Done} />
                
            </Switch>
               
               
              

            </Router>
        </div>
    )
}
