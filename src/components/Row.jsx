import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  console.log(movies);

  return (
    <>
      <h2></h2>
    </>
  );
};

export default Row;
