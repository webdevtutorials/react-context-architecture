// src / features / myFeature / context / statefulContext / StatefulContext.js

import { createContext, useContext } from 'react';

const StatefulContext = createContext(undefined);

const useStatefulContext = () => {
    const context = useContext(StatefulContext);
    if (context === undefined) throw new Error("useStatefulContext must be used within StatefulProvider");

    return context;
};

export default StatefulContext;
export { useStatefulContext };