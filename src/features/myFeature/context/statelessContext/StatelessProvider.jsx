// src / features / feature / context / statelessContext / StatelessProvider.jsx

import StatelessContext from './StatelessContext';
import staticData from '../../../../myData/staticData';

const CONTEXT_VALUE = { staticData };

const StatelessProvider = ({ children }) => {

    return (
        <StatelessContext.Provider value={ CONTEXT_VALUE }>
            {children}
        </StatelessContext.Provider>
    );
};

export default StatelessProvider;