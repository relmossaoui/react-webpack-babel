import React, { Suspense, Component } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import NormalError from './components/NoramlError';
import ForwardRefComponent from './components/ForwardRefComponent';

const LazyComponent = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(import('./components/LazyComponent'))}, 10000)
    })
});

const LazyError = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { reject('lazy loading of the component is failed')}, 5000)
        setTimeout(() => { resolve(import('./components/LazyError'))}, 15000)
    })
});

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            check: false
        }
        this.buttonRef = React.createRef();
    }

    componentDidMount() {
        this.buttonRef.current.focus()
        this.buttonRef.current.addEventListener('click', () => {
            this.setState({
                check : true
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                    <ForwardRefComponent ref={this.buttonRef}> Click me </ForwardRefComponent>
                    {
                        this.state.check ? (
                            <Suspense fallback={<h2>Loading ... </h2>}> 
                                <LazyComponent />
                            </Suspense>
                        ) : ''
                    }
                    <ErrorBoundary> 
                        <Suspense fallback={<h2>Loading ... </h2>}>
                            <LazyError />
                        </Suspense> 
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <NormalError />
                    </ErrorBoundary>
            </div>
        )
    }
}