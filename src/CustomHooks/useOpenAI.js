import { useEffect, useState } from "react"
import { openai } from "../Utils/constant";
import { addSearchedQuery, addErrMsg } from "../Utils/Slices/searchMovieSlice";
import { useDispatch } from "react-redux";

const useOpenAI = (searchString) => {

    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
   
  useEffect(() => {
      setIsLoading(true);
      searchString && fetchData();
    }, [searchString]);

    const fetchData = async () => {
        try {
            const query = `Given: A user is looking for movie recommendations. They have expressed their preference as follows: ${searchString}.\nTask: suggest a list of movies that fit this category. Please format the response like ["Sholay", "Don", "Animal", "Fifty Shades of grey", "Singham"]`;

            const response = await openai.chat.completions.create({
              messages: [{ role: "user", content: query}],
              model: "gpt-3.5-turbo",
            });

            dispatch(
              addSearchedQuery(JSON.parse(response.choices[0].message.content)),
            );

        } catch (error) {
            console.log(error.messages)
        } finally {
            setIsLoading(false);
        }
    }

    return { isLoading };
}

export default useOpenAI