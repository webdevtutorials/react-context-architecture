// src / features / feature / context / StatelessProvider.jsx

import StatelessContext from './StatelessContext';
import staticData from '../../../myData/staticData';

const CONTEXT_VALUE = { staticData };

const StatelessProvider = ({ children }) => {

    return (
        <StatelessContext.Provider value={ CONTEXT_VALUE }>
            {children}
        </StatelessContext.Provider>
    );
};

export default StatelessProvider;

// Redundant Nesting
// You are wrapping staticData in an object: { staticData: staticData }. 
// Consumers will have to write const { staticData } = useStatelessContext();.

// If this context is only meant to provide that specific data, you might be 
// better off passing the data directly to the provider to keep the consumption side cleaner.

// Missing Export
// You defined StatelessProvider but didn't export it as a named export. 
// While export default works, it's often better practice in React features 
// to use named exports for Providers to avoid naming collisions when your app grows.