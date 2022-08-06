import { useState, useEffect } from "react";

function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loading ? <div>Loading ...</div>: <><h1>Welcome home </h1></> }
    </div>
  );
}

export default App;
