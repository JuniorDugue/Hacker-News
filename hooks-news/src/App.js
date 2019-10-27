import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [results, setResults] = useState([]);

  // method using axios

  // useEffect(() => {
  //   axios
  //     .get("http://hn.algolia.com/api/v1/search?query=reacthooks")
  //     .then(res => {
  //       console.log(res.data);
  //       setResults(res.data.hits);
  //     });
  // }, []);

  useEffect(() => {
   getResults();
  }, []);

const getResults = async () => {
  const response = await axios
  .get("http://hn.algolia.com/api/v1/search?query=reacthooks")
  setResults(response.data.hits)
}

  return (
    <>
      <ul>
        {results.map(result => (
          <li key={result.objectID}>
            <a href={result.url}>{result.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
