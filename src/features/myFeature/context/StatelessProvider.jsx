// src / features / feature / context / StatelessProvider.jsx

import { StatelessContext } from './MyContext';
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