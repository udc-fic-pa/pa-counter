import {useState} from 'react';

const App = () => {

    const [value, setValue] = useState(0);
    
    const handleIncrement = () => setValue(value+1);
    const handleDecrement = () => setValue(value-1);
    const handleReset = () => setValue(0);

    return (
        <div>
            {value + ' '}
            <button onClick={handleIncrement}>+</button>
            {' '}
            <button onClick={handleDecrement}>-</button>
            {' '}
            <button onClick={handleReset}>Reset</button>
        </div>
    );

}

export default App;
