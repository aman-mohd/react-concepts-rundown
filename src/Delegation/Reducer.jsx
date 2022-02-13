export const initialState = {
  value: "",
  loaded: false,
  products: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "detailPage":
      return { ...state, value: action.payload, loaded: true };
    case "homePage":
      return { ...state, value: "", loaded: false };
    case "fetchProducs":
      return { ...state, products: action.payload };
    default:
      throw new Error();
  }
};
