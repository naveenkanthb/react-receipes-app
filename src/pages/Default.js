import React, { Component } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

export default class Default extends Component {
    render() {
        return (
            <Header title="404" styleClass="default-hero">
                <h2 className="text-light text-uppercase display-3 letter-spacing text-slanted">
                    you are on the wrong page
                </h2>
                <Link to='/' className="text-uppercase btn btn-secondary btn-lg mt-3">Return home</Link>
            </Header>
        )
    }
}
