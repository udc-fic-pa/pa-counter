import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 0};
    }

    handleIncrement() {
        this.setState({value: this.state.value+1});
    }

    handleDecrement() {
        this.setState({value: this.state.value-1});
    }

    handleReset() {
        this.setState({value: 0});
    }

    render() {
        return (
            <div>
                {this.state.value + ' '}
                <button onClick={() => this.handleIncrement()}>+</button>
                {' '}
                <button onClick={() => this.handleDecrement()}>-</button>
                {' '}
                <button onClick={() => this.handleReset()}>Reset</button>
            </div>
        );
    }

}

export default App;
