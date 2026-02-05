// src / features / myFeature / context / MyContext.js

import { createContext, useContext } from 'react';

const MyContext = createContext(null);

const useMyContext = () => {
    const context = useContext(MyContext);

    if (!context) {
        throw new Error("useContext must be used within a provider");
    }

    return context;
};

export default useMyContext;
export { MyContext };