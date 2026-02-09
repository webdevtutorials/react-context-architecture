# React MyContext for Stateless Data.
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

A quick-start guide to scaffolding a React-Vite project and using
**React Context** with with nesting providers. The tutorial imitates an implementation in a large scale app.

---

## To run the app:
```bash
cd react-context-architecture
yarn install
yarn dev
```

## To build from scratch start a new Vite-React project:
```bash
cd tutorials

yarn create vite reactMyContextStateless --template react
cd reactMyContextStateless
```

## Initiate version control:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -m master main
```

## Upload to GitHub:
```bash
gh auth status
gh repo create reactMyContextStateless --public --source=. --remote=origin --push
```

## Open in editor (optional):
```bash
code
```

## Create static context consuming React component:
```bash
cd src
code MyComponent.jsx
```

### Static (stateless) data:
- Static data is located in src/myData/staticData.js

### Context and access hook:
- Contexts are located alongside their respective providers in the folders statelessContext/ and statefulContext/ in src/features/myFeature/context/

```js 
    import { createContext, useContext } from 'react';

    const StatelessContext = createContext(undefined);

    const useStatelessContext = () => {
        const context = useContext(StatelessContext);
        if (context === undefined) throw new Error("useStatelessContext must be used within StatelessProvider");

        return context;
    };

    export default StatelessContext;
    export { useStatelessContext };
```

```js
    import { createContext, useContext } from 'react';

    const StatefulContext = createContext(undefined);

    const useStatefulContext = () => {
        const context = useContext(StatefulContext);
        if (context === undefined) throw new Error("useStatefulContext must be used within StatefulProvider");

        return context;
    };

    export default StatefulContext;
    export { useStatefulContext };
```

### Providers:
- Provider and context live in the same folder src/features/myFeature/context/statelessContext.js or ...statefulContext.js.

```js
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
```

### Dynamic data:
- Dynamic (stateful) data must be originated inside the provider (provider owns state), it cannot be imported.
- Memoizing the object prevents consumers from re-rendering unless the data actually changes

```js
    import { useState, useMemo } from 'react';
    import StatefulContext from './StatefulContext';

    const StatefulProvider = ({ children }) => {
        const [dynamicData, setDynamicData] = useState("No data");
        
        const contextValue = useMemo(() => ({
                dynamicData,
                setDynamicData
        }), [dynamicData]);

        return (
            <StatefulContext.Provider value={contextValue}>
                { children }
            </StatefulContext.Provider>
        );
    };

    export default StatefulProvider;
```

### AppProviders - aggregating multiple providers:
- AppProviders.jsx is located in src/providers/AppProviders.jsx

```js
import StatelessProvider from '../features/myFeature/context/statelessContext/StatelessProvider';
import StatefulProvider from '../features/myFeature/context/statefulContext/StatefulProvider';

const AppProviders = ({ children }) => (
    <StatelessProvider>
        <StatefulProvider>
            {children}
        </StatefulProvider>
    </StatelessProvider>
);

export default AppProviders;
```

### Wrapping consumers:
- The wrapping takes place in main.jsx (index.jsx)

```js
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
)
```

### Consuming:
- Consuming is streamlined using custom hook inside MyComponent.
- useEffect prevents infinite loop.

```js
import { useEffect } from 'react';
import { useStatelessContext } from '../features/myFeature/context/statelessContext/StatelessContext';
import { useStatefulContext } from '../features/myFeature/context/statefulContext/StatefulContext';

function MyComponent() {
    const { staticData } = useStatelessContext();
    const { dynamicData, setDynamicData } = useStatefulContext();

    useEffect(() => {
        setDynamicData("Stateful");
    }, [setDynamicData]);

    return (
        <div style={{ width: 400, height: 250, backgroundColor: 'skyblue' }}>
            <h1>React Component</h1>
            <p> { staticData }</p>
            <p>{ dynamicData }</p>
        </div>
    );
};

export default MyComponent;
```