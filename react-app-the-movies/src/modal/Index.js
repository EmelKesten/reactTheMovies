import React, {useState, useEffect} from "react";
import axios from "axios";


function Modal(props){
    const [id, setId] = useState(props.id); 
    console.log(id, "!id!");
    const [data, setData] = useState();
    const [video, setVideo] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US`
            );
            if (result) {
                setData(result.data);
                console.log(result.data, "!result.results!");
            }
        }
        fetchData();
        const fetchVideo = async () => {
            const result = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}/videos?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US`
            );
            if (result) {
                setVideo(result.data.results[0].key);
                console.log(result.data.results[0].key, "!result.results!");
            }
        }
        fetchVideo();
    }, []);
    console.log(`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`, "!data.backdrop_path!");
    /*return (
        <div className="modal">
            <div className="popUp-inner" style={
                {
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`
                }
            }>
                    <button id="close">X</button>
                    <h4>{data.title}</h4>
                    <p>{data.overview}</p>
                    
            </div>
        </div>
    )
    
*/

}

export default Modal;