import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            
            <nav className="navbar navbar-inverse">
                <a className="navbar-brand" href="https://trinhmaingoc.github.io/lesson02-component">Bài 2: Component</a>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="https://trinhmaingoc.github.io/lesson02-component">Trang Chủ</a>
                    </li>
                    <li>
                        <a href="https://trinhmaingoc.github.io/lesson01-helloreact">Bài 01 - Hello React</a>
                    </li>
                </ul>
            </nav>
            
        )
    }
}

export default Header
