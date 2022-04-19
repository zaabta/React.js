import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    const fetchData = async () => {
      setIsPending(true);
      try {
        const res = await fetch(url, { signal: abortCont.signal });
        if (!res.ok) throw new Error("Could not fetch The Data from Url !");
        else {
          const json = await res.json();
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (err.name === "AbortError") console.log("Feach Aborted");
        else {
          setData(null);
          setIsPending(false);
          setError(err.message);
        }
      } finally {
        setIsPending(false);
      }
    };
    fetchData();
    return () => abortCont.abort();
  }, [url]);

  return [data, isPending, error];
};

export default useFetch;
