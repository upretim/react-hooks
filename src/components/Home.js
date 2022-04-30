import React from 'react';
import useFetch from "./useFetch";
import FavColor from './FavColor';
const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
    <FavColor/>
      {/*data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })*/}
    </>
  );
};

export default Home;