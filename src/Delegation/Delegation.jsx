import { useEffect, useReducer } from "react";
import DetailPage from "./DetailPage";
import { reducer, initialState } from "./Reducer";

const Delegation = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOpenDetailPage = (e) => {
    if (e.target.dataset.itemId) {
      return dispatch({ type: "detailPage", payload: e.target.dataset.itemId });
    }
  };

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=5");
      const data = await res.json();
      dispatch({ type: "fetchProducs", payload: data });
    };
    fetchApi();
  }, []);

  if (!state.products.length) {
    return <h1>Loading...</h1>;
  }
  if (state.loaded) {
    return <DetailPage value={state.value} onClick={dispatch} />;
  }

  return (
    <>
      <h1>My E-Commenrce</h1>
      <div
        style={{ display: "flex" }}
        className="mainDiv"
        onClick={handleOpenDetailPage}
      >
        {state.products.map((item) => (
          <div style={{ width: "50%" }} data-item-id={item.id} key={item.id}>
            <img
              data-item-id={item.id}
              src={item.image}
              alt="Girl in a jacket"
              width="140"
              height="200"
            />
            <h4 data-item-id={item.id}>${item.price}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Delegation;
