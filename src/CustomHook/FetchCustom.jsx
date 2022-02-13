import { useEffect, useState } from "react";

const useFetch = (_url, _options) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async (url, options) => {
      const res = await fetch(url, options);
      const { data } = await res.json();
      setData(data);
    };
    fetchApi(_url, _options);
  }, [_url, _options]);

  return data;
};

const CustomFetch = () => {
  const data = useFetch(
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
  );

  const getList = () => {
    return data.map((names) => (
      <li key={names.Population}>Population: {names.Population}</li>
    ));
  };

  if (!data.length) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>UseFetch Custom Hook</h1>
      {getList()}
    </>
  );
};

export default CustomFetch;
