// src / providers / AppProviders.jsx

import MyProvider from '../features/myFeature/context/MyProvider.jsx';

const AppProviders = ({ children }) => (
    <MyProvider>
        { children }
    </MyProvider>
);

export default AppProviders;