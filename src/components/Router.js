import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from '../App'
import Result from './Search/Result'
import Category from './Categories/Category'
import List from './List'

function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={App} exact />
				<Route path="/result" component={Result} />
				<Route path="/category" component={Category} />
				<Route path="/recipe/:id" component={List} />
			</Switch>
		</BrowserRouter>
	)
}

export default Router
