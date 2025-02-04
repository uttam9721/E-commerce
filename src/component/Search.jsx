import React, { useState, useEffect } from 'react';
import productList from './data';
import Home from './Home';
import { useParams } from 'react-router-dom';

const Search = () => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filterProducts = () => {
      const data = productList.filter((p) => 
        p.model.toLowerCase().includes(term.toLowerCase()) // Assuming 'model' is the property to search
      );
      setFilterData(data); // Update the state with filtered data
    };
    filterProducts();
  }, [term]);

  return (
    <div>
      {/* <h1>Search</h1> */}
      {/* <p>Search term: {term}</p> */}
      <Home productList={filterData} />
    </div>
  );
}

export default Search;