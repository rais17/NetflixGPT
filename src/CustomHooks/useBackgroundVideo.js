import { useState } from "react";
import { useEffect } from "react";
import { getVideoUrl, options } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addHomeBackGroundVideo, addMovieBackGroundVideo,addAllVideo } from "../Utils/Slices/backGroundVideoSlice"; 

const useBackgroundVideo = (id, isHomeBackGroundVideo) => {

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchBackGroundVideo();
    }, [id]);

    const fetchBackGroundVideo = async () => {
        try {
          const videoUrl = getVideoUrl(id);

          const response = await fetch(videoUrl, options);
          const json = await response.json();

          const trailer = json.results.filter(
            (video) => video.type === "Trailer",
          );

          if (!trailer) {
            trailer = json.results.filter((video) => video.type === "Teaser");
          }

          isHomeBackGroundVideo
            ? dispatch(addHomeBackGroundVideo(trailer[0].key))
            : dispatch(addMovieBackGroundVideo(trailer[0].key));

          console.log("More Videos insude useBackgroundVideo", json.results);
          !isHomeBackGroundVideo &&
            dispatch(addAllVideo(json.results.map((video) => video.key)));
        } catch (error) {
          console.log(error.message);
        } finally {
          setIsLoading(false);
        }
    }

    return isLoading;

}

export default useBackgroundVideo;