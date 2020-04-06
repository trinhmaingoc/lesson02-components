import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            
            <nav className="navbar navbar-inverse">
                <a className="navbar-brand" href="/">Bài 2: Component</a>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="/">Trang Chủ</a>
                    </li>
                    <li>
                        <a href="/">Danh Mục Sản Phẩm</a>
                    </li>
                </ul>
            </nav>
            
        )
    }
}

export default Header
