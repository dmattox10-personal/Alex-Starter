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
const Four = () => {
    return (
        <li className="four"><Link to="/4">Four</Link></li>
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
const FourA = () => {
    return (
        <li className="four"><Link to="/4" className='active'>Four</Link></li>
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
                                <Four />
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
                                <Four />
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
                                <Four />
                            </ul>
                            </div>
                        </header>
                    </div>
                )
            case '4':
                return(
                    <div className='news'>
                        <header>
                            <div class="nav">
                            <ul>
                                <One />
                                <Two />
                                <Three />
                                <FourA />
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
                                <Four />
                            </ul>
                            </div>
                        </header>
                    </div>
                )
        }
    }
}

export default Nav