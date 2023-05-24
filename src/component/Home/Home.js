import React, { useContext, useState } from 'react';
import { ContContext } from '../../App';


const Home = () => {
    const [count, setCount] = useContext(ContContext);
    const [error, setErorr] = useState('');
    const handleCountNumber = () => {
        const addNumber = count + 1;
        setCount(addNumber);
    }
    const handleLessCountNumber = () => {
        if (count < 1) {
            setErorr('At last add a number')
            return (-1);
        }
        const addNumber = count - 1;
        setCount(addNumber);
    }
    return (
        <div>
            <h1>{count}</h1>
            
            <button onClick={handleCountNumber}>Add number </button>
            <button onClick={handleLessCountNumber}>Dicress number </button>
        </div>
    );
};

export default Home;