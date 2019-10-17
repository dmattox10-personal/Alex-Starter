import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const One = () => {
    return (
        <li className="one"><Link to="/">One</Link></li>
    )
}

const Two = () => {
    return (
        <li className="two"><Link to="/2">Two</Link></li>
    )
}

const Three = () => {
    return (
        <li className="three"><Link to="/3">Three</Link></li>
    )
}

const OneA = () => {
    return (
        <li className="one"><Link to="/" className='active'>One</Link></li>
    )
}

const TwoA = () => {
    return (
        <li className="two"><Link to="/2" className='active'>Two</Link></li>
    )
}

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