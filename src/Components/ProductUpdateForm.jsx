import styled from "styled-components";

const FormStyled = styled.form``;
export default function ProductUpdateForm({ editProduct, data }) {
  return (
    <>
      {
        <form
          className="d-flex flex-column align-items-between mb-3 mt-4 p-5 w-100"
          editProduct={editProduct}
          style={{
            gap: "2rem",
          }}
          data = {data}
        >
          <input type="text" value={data.title} placeholder="Title" />
          <input type="text" value={data.imgName}  />
          <input type="number" value={data.price} />
          <select name="" id="" value={data.tag}>
            <option value="technology">Technology</option>
            <option value="fashion">Fashion</option>
            <option value="domestic">Domestics</option>
            <option value="books">Books</option>
          </select>
        </form>
      }
    </>
  );
}
