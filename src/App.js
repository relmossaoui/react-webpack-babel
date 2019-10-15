import React, { Suspense, Component } from 'react';

const LazyComponent = React.lazy(() => import('./components/LazyComponent'));

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 10000)
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                {
                    this.state.loading ? <div> Loading ... </div> :
                    <Suspense fallback={<h2>Loading ... </h2>}> 
                        <LazyComponent />
                    </Suspense>               
                }
            </div>)
    }
}