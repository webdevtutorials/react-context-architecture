// src / features / feature / context / StatefulProvider.jsx

import { useState, useMemo } from 'react';
import { StatefulContext } from './MyContext';

const StatefulProvider = ({ children }) => {
    const [dynamicData, setDynamicData] = useState("No data");
    
    // memoizing the object prevents consumers from re-rendering
    // unless the data actually changes
    const contextValue = useMemo(() => ({
            dynamicData,
            setDynamicData
    }), [dynamicData, setDynamicData]);

    return (
        <StatefulContext.Provider value={contextValue}>
            { children }
        </StatefulContext.Provider>
    );
};

export default StatefulProvider;