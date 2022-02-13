import { useEffect, useState } from "react";

const DetailPage = ({ value, onClick }) => {
  const [productDetail, setProductDetail] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${value}`);
      const data = await res.json();
      setProductDetail(data);
    };
    fetchApi();
  }, [value]);

  if (!productDetail) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <img
        src={productDetail.image}
        alt="Girl in a jacket"
        width="200"
        height="300"
      />
      <h4>{productDetail.title}</h4>
      <p>
        <b>Price:</b> {productDetail.price}
      </p>
      <p>
        <b>Category:</b> {productDetail.category}
      </p>
      <button onClick={() => onClick({ type: "homePage" })}>Go Back</button>
    </div>
  );
};

export default DetailPage;
