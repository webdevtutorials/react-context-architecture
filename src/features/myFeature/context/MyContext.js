// src / features / myFeature / context / MyContext.js

import { createContext, useContext } from 'react';

const StatelessContext = createContext(null);
const StatefulContext = createContext(null);

const useMyContext = () => {
    const statelessValue = useContext(StatelessContext);
    const statefulValue = useContext(StatefulContext);

    if (statelessValue === null || statefulValue === null) {
        throw new Error("useContext must be used within a provider");
    }

    return { ...statelessValue, ...statefulValue };
};

export default useMyContext;
export { StatelessContext, StatefulContext };