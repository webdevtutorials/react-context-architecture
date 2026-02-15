// src / providers / AppProviders.jsx

import StatelessProvider from '../features/myFeature/context/statelessContext/StatelessProvider';
import StatefulProvider from '../features/myFeature/context/statefulContext/StatefulProvider';

const AppProviders = ({ children }) => {
    return (
        <StatelessProvider>
            <StatefulProvider>
                {children}
            </StatefulProvider>
        </StatelessProvider>
    )
};

export default AppProviders;