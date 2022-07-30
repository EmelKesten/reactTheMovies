import React, {useState, useEffect} from "react";


function Modal(props){
    const [id, setId] = useState(props.id);
    const [data, setData] = useState();
    const [video, setVideo] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US`
            );
            if (result) {
                setData(result.data);
            }
            const result2 = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}/videos?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US`
            );
            if (result2) {
                setVideo(result2.data.results[0].key);
            }
        }
        fetchData();
    }, []);

    return (
        
    )



}