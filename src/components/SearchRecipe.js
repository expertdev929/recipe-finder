import React, { Component } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setRecipes } from '../actions'

class SearchRecipe extends Component {
    constructor() {
        super()
        this.state = {
            ingredients: '',
            dish: ''
        }
    }

    search() {
        let { ingredients, dish } = this.state
        const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`

        fetch(url, {
            method: 'GET'
        }).then(response => response.json())
            .then(json => this.props.setRecipes(json.results))
    }

    render() {
        return (
            <Form inline>
                <FormGroup>
                    <ControlLabel>Ingredients</ControlLabel>
                    {' '}
                    <FormControl
                        onChange={event => this.setState({ ingredients: event.target.value })}
                        type="text"
                        placeholder="garlic, chicken"
                        value={this.state.ingredients}
                    />
                </FormGroup>
                {' '}
                <FormGroup>
                    <ControlLabel>Dish</ControlLabel>
                    {' '}
                    <FormControl
                        onChange={event => this.setState({ dish: event.target.value })}
                        type="text"
                        placeholder="adobo"
                        value={this.state.dish}
                    />
                </FormGroup>
                {' '}
                <Button onClick={() => this.search()}>Submit</Button>
            </Form>
        )
    }
}

export default connect(null, { setRecipes })(SearchRecipe)