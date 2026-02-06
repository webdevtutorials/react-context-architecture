// src / components / MyComponent.jsx

import { useEffect } from 'react';
import useMyContext from '../features/myFeature/context/MyContext';

function MyComponent() {
    const { staticData, dynamicData, setDynamicData } = useMyContext();

    // Implementing useEffect will prevent infinite loop from updating the
    // outside state
    useEffect(() => {
        setDynamicData("Stateful");
    }, [setDynamicData]);

    return (
        <div style={{ width: 400, height: 250, backgroundColor: 'skyblue' }}>
            <h1>React Component</h1>
            <p> { staticData }</p>
            <p>{ dynamicData }</p>
        </div>
    );
};

export default MyComponent;