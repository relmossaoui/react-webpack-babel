import React, { Suspense, Component } from 'react';

const LazyComponent = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(import('./components/LazyComponent'))}, 10000)
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
            </div>)
    }
}