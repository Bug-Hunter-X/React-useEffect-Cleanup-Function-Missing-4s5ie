```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a variable defined inside the useEffect
    let intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Missing cleanup function to clear the interval when the component unmounts or updates
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```