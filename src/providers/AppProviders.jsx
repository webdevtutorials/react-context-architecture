// src / providers / AppProviders.jsx

import StatelessProvider from '../features/myFeature/context/StatelessProvider';
import StatefulProvider from '../features/myFeature/context/StatefulProvider';

const AppProviders = ({ children }) => (
    <StatelessProvider>
        <StatefulProvider>
            {children}
        </StatefulProvider>
    </StatelessProvider>
);

export default AppProviders;