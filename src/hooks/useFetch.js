import { useState, useEffect } from 'react';

// I'm creating this custom hook to handle API calls in one place
// This way, I don't have to rewrite the same fetch logic in every component
const useFetch = (url) => {
  // We need state to keep track of the data, if it's still loading, and any errors
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect is perfect for side effects like fetching data
  // It runs after the component renders
  useEffect(() => {
    // console.log("Fetching from:", url); // Debugging to see when it triggers
    
    const fetchData = async () => {
      setLoading(true); // Reset loading state when url changes
      try {
        const response = await fetch(url);
        
        // I learned that fetch doesn't throw on 404/500, so I need to check response.ok
        if (!response.ok) {
          throw new Error("Could not fetch the data for that resource");
        }
        
        const result = await response.json();
        // console.log("Data received:", result); // Debugging to see if data is what I expect
        setData(result);
        setError(null);
      } catch (err) {
        // console.log("Fetch Error:", err.message);
        setError(err.message);
      } finally {
        setLoading(false); // Done loading regardless of success or failure
      }
    };

    fetchData();
  }, [url]); // This runs whenever the 'url' variable changes

  // Return the things the component will actually use
  return { data, loading, error };
};

export default useFetch;
