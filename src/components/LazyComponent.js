import React, { Component } from 'react'

export default class LazyComponent extends Component {
    render(h) {
        return (
            <h2> This a lazy loaded component </h2>
        )
    }   
}