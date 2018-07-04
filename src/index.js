import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './components/App'
import FavoriteRecipeList from './components/FavoriteRecipeList'

import reducers from './reducers'

const store = createStore(reducers)

store.subscribe(() => console.log(store.getState()))

render ((
    <Provider store={store}>
       <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/favorites" component={FavoriteRecipeList} />
        </Switch>
       </BrowserRouter> 
    </Provider>
), document.getElementById('root'))