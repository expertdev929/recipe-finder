import React, { Component } from 'react'
import SearchRecipe from './SearchRecipe'
import RecipeList from './RecipeList'
import '../styles/index.css'

class App extends Component {
    render() {
        return (
            <div>
                <h2>Recipe Finder</h2>
                <SearchRecipe />
                <RecipeList />
            </div>
        )
    }
}

export default App