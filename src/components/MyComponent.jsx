// src / components / MyComponent.jsx

import { useEffect } from 'react';
import { useStatelessContext } from '../features/myFeature/context/statelessContext/StatelessContext';
import { useStatefulContext } from '../features/myFeature/context/statefulContext/StatefulContext';

function MyComponent() {
    const { staticData } = useStatelessContext();
    const { dynamicData, setDynamicData } = useStatefulContext();

    // useEffect prevents infinite loop
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