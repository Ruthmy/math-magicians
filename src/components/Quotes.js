import { useState, useEffect } from 'react';

const category = 'happiness';

function Quotes() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            headers: {
              'X-Api-Key': 'IJxDQE0w1qFvps1T42CbGw==2TlSWBd5MFRPAT17',
              'Content-Type': 'application/json',
            },
          });
        if (res.ok) {
          const json = await res.json();
          setData(json[0]);
        } else {
          setHasError(true);
        }
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (hasError) return <div>Something went wrong!</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="Quotes">
      <div>
        <h3>{data.quote}</h3>
        <p>{data.author}</p>
      </div>
    </div>
  );
}

export default Quotes;
