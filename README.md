# React MyContext for Stateless Data.
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

A quick-start guide to scaffolding a React-Vite project and implementing 
react context architecturewith with nesting providers. This architeture
designed to imitate how the structure might look like in a larger scale app.

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

### Context
- React context is isolated in src/features/myFeature/context/MyContext.js

- Context:
```js const MyContext = createContext(null) ```

- Hook to use in consumers:
```js 
const useMyContext = () => {
    const context = useContext(MyContext);

    if (!context) {
        throw new Error("useContext must be used inside a provider");
    }

    return context;
};
```

### Providers & dynamic data:
- Provider and context live in the same folder src/features/myFeature/context/MyProvider.js.
- Dynamic (stateful) data cannot be imported, it must be originated inside the provider (provider owns state).
- It's important to use **useMemo()** React hook to stabilize the provider to avoid consumer re-renders every time provider re-renders.

```js
const MyProvider = ({ children }) => {
    const [dynamicData, setDynamicData] = useState("No data");
    
    const contextValue = useMemo(() => ({
            staticData,
            dynamicData,
            setDynamicData
    }), [dynamicData]);

    return (
        <MyContext.Provider value={contextValue}>
            { children }
        </MyContext.Provider>
    );
};

export default MyProvider;
```

### AppProviders - aggregating multiple providers:
- AppProviders.jsx is located in src/providers/AppProviders.jsx

```js
const AppProviders = ({ children }) => (
    <MyProvider>
        { children }
    </MyProvider>
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
- useEffect should be used to update dynamic data to avoid infinite loop and crush.

```jsx
function MyComponent() {
    const { staticData, dynamicData, setDynamicData } = useMyContext();

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
```




Wrap Consumer Components in React.memo
You can pass the context data into a sub-component as a prop and wrap that sub-component in memo.

JavaScript
const Consumer = () => {
  const { staticData } = useContext(MyContext);
  return <ExpensiveComponent data={staticData} />;
};

// Only re-renders if props actually change
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});
3. Use a 3rd-Party State Manager
If your context object grows very large and has many different pieces of data, tools like Zustand or Recoil allow for "selectors," which let components subscribe to specific values without re-rendering when other values change.