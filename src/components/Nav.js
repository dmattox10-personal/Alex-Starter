import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// This is the first NAV link, edit what it says below
const One = () => {
    return (
        <li className="one"><Link to="/">One</Link></li>
    )
}
// Second NAV link
const Two = () => {
    return (
        <li className="two"><Link to="/2">Two</Link></li>
    )
}
// Third NAV link
const Three = () => {
    return (
        <li className="three"><Link to="/3">Three</Link></li>
    )
}
// This is where we set the ACTIVE menu item to be so in CSS with className='active'
// Changing CSS classnames with code is so powerful!
const OneA = () => {
    return (
        <li className="one"><Link to="/" className='active'>One</Link></li>
    )
}
// Second ACTIVE NAV item
const TwoA = () => {
    return (
        <li className="two"><Link to="/2" className='active'>Two</Link></li>
    )
}
// Third ACTIVE NAV item
const ThreeA = () => {
    return (
        <li className="three"><Link to="/3" className='active'>Three</Link></li>
    )
}

class Nav extends Component {
    render() {
        const { active } = this.props
        switch (active)
        {
            // If we are ON the first tab, set it to active
            case '1':
                return(
                    <div className='news'>
                        <header>
                            <div class="nav">
                            <ul>
                                <OneA />
                                <Two />
                                <Three />
                            </ul>
                            </div>
                        </header>
                    </div>
                )
            // If we are ON the second tab, set it to active
            case '2':
                return(
                    <div className='news'>
                        <header>
                            <div class="nav">
                            <ul>
                                <One />
                                <TwoA />
                                <Three />
                            </ul>
                            </div>
                        </header>
                    </div>
                )
            // Third tab detection
            case '3':
                return(
                    <div className='news'>
                        <header>
                            <div class="nav">
                            <ul>
                                <One />
                                <Two />
                                <ThreeA />
                            </ul>
                            </div>
                        </header>
                    </div>
                )
            // This is here in case anything goes wrong, should never be "called"
            default: 
                return(
                    <div className='news'>
                        <header>
                            <div class="nav">
                            <ul>
                                <One />
                                <Two />
                                <Three />
                            </ul>
                            </div>
                        </header>
                    </div>
                )
        }
    }
}

export default Nav