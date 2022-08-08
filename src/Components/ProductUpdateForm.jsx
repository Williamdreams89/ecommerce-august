import styled from "styled-components";
import { Button } from "react-bootstrap";

const FormStyled = styled.form``;
export default function ProductUpdateForm({ editProduct, data, setEditProduct }) {
  return (
    <>
      {
        <form
          className="d-flex flex-column align-items-between mb-3 mt-4 p-5 w-100"
          editProduct={editProduct}
          style={{
            gap: "2rem",
          }}
          data={data}
          setEditProduct = {setEditProduct}
        >
          <input type="text" value={data.title} placeholder="Title" />
          <input type="text" value={data.imgName} />
          <input type="number" value={data.price} />
          <select name="" id="" value={data.tag}>
            <option value="technology">Technology</option>
            <option value="fashion">Fashion</option>
            <option value="domestic">Domestics</option>
            <option value="books">Books</option>
          </select>
          <div className="d-flex justify-content-around" style={{width:"40%"}}>
            <Button variant="primary" style={{ width: "max-content" }}>
              Save
            </Button>
            <Button variant="danger" onClick={()=>{setEditProduct(false)}} style={{ width: "max-content" }}>
              Cancel
            </Button>
          </div>
        </form>
      }
    </>
  );
}
