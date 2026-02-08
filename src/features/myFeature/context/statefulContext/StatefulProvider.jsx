// src / features / feature / context / statefulContext / StatefulProvider.jsx

import { useState, useMemo } from 'react';
import StatefulContext from './StatefulContext';

const StatefulProvider = ({ children }) => {
    const [dynamicData, setDynamicData] = useState("No data");
    
    // memoizing the object prevents consumers from re-rendering
    // unless the data actually changes
    const contextValue = useMemo(() => ({
            dynamicData,
            setDynamicData
    }), [dynamicData]);

    return (
        <StatefulContext.Provider value={contextValue}>
            { children }
        </StatefulContext.Provider>
    );
};

export default StatefulProvider;