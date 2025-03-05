import { useState, useEffect } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
      <li>
        {data.slice(0,data.length).map((item) => (
          <li key={item.id}>{item.id}{" "}{item.title.substr(0,10)}</li>
        ))}
      </li>
  );
}
