import { useEffect, useState } from "react";

const useTMBD = (url) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchResponse = async () => {
    try {
      const responseData = await fetch(url);

      // Check if the response content type is JSON and update state accordingly
      const contentType = responseData.headers.get("Content-Type");
      contentType && contentType.includes("application/json")
        ? setResponse(await responseData.json())
        : setResponse(responseData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchResponse();
  }, []);

  return { response, isLoading };
};

export default useTMBD;
