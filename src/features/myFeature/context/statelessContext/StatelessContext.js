// src / features / myFeature / context / statelessContext / StatelessContext.js

import { createContext, useContext } from 'react';

const StatelessContext = createContext(undefined);

const useStatelessContext = () => {
    const context = useContext(StatelessContext);
    if (context === undefined) throw new Error("useStatelessContext must be used within StatelessProvider");

    return context;
};

export default StatelessContext;
export { useStatelessContext };