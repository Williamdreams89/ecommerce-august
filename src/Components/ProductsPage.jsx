import { useGetAllProductsQuery } from "../Api/ApiSlice"
import {Link} from 'react-router-dom';
import AddProductsForm from "./AddProductsForm";


function ProductsPage() {
  const {data, error, isLoading, isError, isSuccess} = useGetAllProductsQuery();
  return (
    <div>
      <AddProductsForm />
      {isLoading && <p>Loading ...</p>}
      {isError && <p>{error.message}</p>}
      {isSuccess && data && data.map(product=><div key={product.id}><Link to={`product/${product.id}`}>{product.title}</Link></div>)}
    </div>
  )
}

export default ProductsPage