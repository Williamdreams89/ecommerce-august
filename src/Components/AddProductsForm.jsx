import { useState } from "react"
import { useAddProductMutation } from "../Api/ApiSlice";

export default function AddProductsForm() {
    const [newTitle, setNewTitle] = useState('');

    const [addProduct] = useAddProductMutation();
    

    const handleForm = event => {
        event.preventDefault()
        addProduct({title: newTitle, imgName: "provided", tag: "provisioning", price: 3000});
        setNewTitle("")

        // Clear all form fields after submission
        event.target.reset()
    }

  return (
    <div>
        <form onSubmit={handleForm} className='d-flex justify-content-around w-50 mb-5'>
            <input type="text" placeholder='Title' onChange={(e)=>setNewTitle(e.target.value)} />
            <button type='submit'>Save</button>
        </form>
    </div>
  )
}
