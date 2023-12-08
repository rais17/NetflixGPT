import { useEffect, useState } from "react"
import { getSearchNovieUrl, options } from "../Utils/constant";
import { addSearchedMovies } from "../Utils/Slices/searchMovieSlice";
import { useDispatch, useSelector } from "react-redux";

const useSearchMovies = () => {

    const queryArray = useSelector((store) => store.searchMovie.searchQuery);
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      setIsLoading(true);
      Array.isArray(queryArray) && queryArray.length && fetchData();
       
    }, [queryArray]);

    const fetchData = async () => {

        try {
            const responses = await Promise.all(
              queryArray.map((query) =>
                fetch(getSearchNovieUrl(query), options)
              ),
            );

             const jsonResponses = await Promise.all(
               responses.map((response) => {
                 if (!response.ok) throw new Error("Error fetching data");
                 return response.json();
               }),
             );

            dispatch(addSearchedMovies(jsonResponses));
            
        }
        catch (error) {
            console.log(error.message);
        }
        finally {
            setIsLoading(false)
        }
    }

    return isLoading
}

export default useSearchMovies;