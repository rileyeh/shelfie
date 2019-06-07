import React from 'react' 
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'

export default (
    <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/addform' component={Form} />
        <Route path='/editform' component={Form} />
    </Switch>
)