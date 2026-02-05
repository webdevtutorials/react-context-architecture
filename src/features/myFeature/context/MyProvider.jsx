// src / features / feature / context / MyProvider.jsx

import { useState, useMemo } from 'react';
import { MyContext } from './MyContext.js';
import staticData from '../../../myData/staticData.js';

const MyProvider = ({ children }) => {
    const [dynamicData, setDynamicData] = useState("No data");
    
    const contextValue = useMemo(() => ({
            staticData,
            dynamicData,
            setDynamicData
    }), [dynamicData]);

    return (
        <MyContext.Provider value={contextValue}>
            { children }
        </MyContext.Provider>
    );
};

export default MyProvider;