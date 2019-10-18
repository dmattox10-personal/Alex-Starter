import React, { Component } from 'react'

import Nav from './Nav'

// You can declare variables here

class Blank extends Component {
    constructor() {
        super()
        this.state = {
            message: 'We will learn about state, later!'
        }
        this.myFunction = this.myFunction.bind(this)
        this.myFunctionTwo = this.myFunctionTwo.bind(this)
    }

    myFunction() {
        // Do whatever you want here and call it somewhere else
    }

    myFunctionTwo(paramater) {
        // Here too!
    }

    // These next four, are "react lifecycle methods", you can google them!
    componentWillMount() {
        // You can do early stuff here
    }

    componentDidMount() {
        // You can do late stuff here
    }

    componentWillReceiveProps() {
        // Stuff happens here when another component changes this one
    }

    componentWillUpdate() {
        // Stuff happens here when changes force this component to 're-render' itself
    }


    render() {
        const { message } = this.state
        return (
            <div>
                <Nav active='4' />
                {/* DELETE ME AND PUT STUFF HERE! */}
                <h1>{ message }</h1>
            </div>
        )
    }
}

export default Blank