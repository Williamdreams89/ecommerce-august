import { useState, useEffect } from "react";
import { useGetProductsQuery } from "./Api/ApiSlice";

function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(false);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);

  const {data, error, isSuccess, isError, isLoading} = useGetProductsQuery()
  return (
    <div className="App">
      {loading ? <div>Loading ...</div>: <>
      <h1>Welcome to Products page </h1>
      <div>
        {isLoading && <p>Loading ...</p>}
        {isError && <p>{error.message}</p>}
        {isSuccess && data && data.map(product=><div key={product.id}>{product.title}</div>)}
      </div>
      </> }
    </div>
  );
}

export default App;
