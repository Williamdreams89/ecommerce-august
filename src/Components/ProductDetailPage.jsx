import { useGetSingleProductQuery } from "../Api/ApiSlice";
import {useParams} from 'react-router-dom'
import ProductUpdateForm from "./ProductUpdateForm";
import { useState } from "react";
import { Button } from "bootstrap";


export default function ProductDetailPage() {
  const [editProduct, setEditProduct] = useState(false)
  const {productid} = useParams();
  const {data, isFetching, isSuccess} = useGetSingleProductQuery(productid)

  const [titleEntry, setTitleEntry] = useState("");
  const [imgNameEntry, setImgNameEntry] = useState("");
  const [productPriceEntry, setProductPriceEntry] = useState("");
  const [productCategoryEntry, setProductCategoryEntry] = useState("");
  const handleProductEdit = (data) => {
    setTitleEntry(data.title)
  }
  return (
    <div>
      {editProduct &&<ProductUpdateForm editProduct={editProduct} setEditProduct={setEditProduct} data = {data} />}
      {isFetching && <p>Loading Single Product ...</p>}
      {isSuccess && data && <div>
        <h2>Product Name: {data.title}</h2>
        <h3>Product Image Name: {data.imgName}</h3>
        <h3>Product Price: {data.price}</h3>
        <h3>Product Category: {data.tag}</h3>
        <button onClick={()=>{setEditProduct(true); handleProductEdit()}}>Edit</button>
        </div>}
    </div>
  )
}
