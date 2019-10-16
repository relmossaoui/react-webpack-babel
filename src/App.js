import React, { Suspense, Component } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import NormalError from './components/NoramlError'

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

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                    <Suspense fallback={<h2>Loading ... </h2>}> 
                            <LazyComponent />
                    </Suspense>
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