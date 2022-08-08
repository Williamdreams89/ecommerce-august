import { useGetSingleProductQuery } from "../Api/ApiSlice";
import {useParams} from 'react-router-dom'


export default function ProductDetailPage() {
  const {productid} = useParams();
  const {data, isFetching, isSuccess} = useGetSingleProductQuery(productid)
  return (
    <div>
      {isFetching && <p>Loading Single Product ...</p>}
      {isSuccess && data && <div>
        <h2>Product Name: {data.title}</h2>
        <h3>Product Image Name: {data.imgName}</h3>
        <h3>Product Price: {data.price}</h3>
        <h3>Product Category: {data.tag}</h3>
        </div>}
    </div>
  )
}
