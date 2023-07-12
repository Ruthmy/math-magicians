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

  if (hasError) return <div><p>Something went wrong!</p></div>;

  if (isLoading) {
    return (
      <>
        <div className="lds-ripple">
          <div />
          <div />
        </div>
        <p>Loading...</p>
      </>
    );
  }

  return (
    <div className="Quotes">
      <h3>{data.quote}</h3>
      <p>{data.author}</p>
    </div>
  );
}

export default Quotes;
