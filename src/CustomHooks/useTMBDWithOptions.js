import { options } from "../Utils/constant";
import { useState, useEffect } from "react";

const useTMBDWithOptions = (url) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchResponse = async () => {
    try {
      const responseData = await fetch(url, options);

      const json =  await responseData.json();
      setResponse(json);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchResponse();
  }, [url]);

  return { response, isLoading };
};

export default useTMBDWithOptions;
