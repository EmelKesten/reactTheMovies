import React from 'react';
import Modal from 'react-modal';
import { useState, useEffect } from "react";
import axios from 'axios';
import "./Modal.css";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



function PopUp({ id,show  }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    if(show){  
      setIsOpen(true);
    }
    else{
      setIsOpen(false);
    }
  }, [show]);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
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
    };
    fetchData();
    const fetchVideo = async () => {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US`
      );
      if (result) {
        setVideo(`https://www.youtube.com/embed/${result.data.results[0].key}`);
      }
    };
    fetchVideo();
  }, []);

  return (
      <Modal
        id='popUp'
        isOpen={modalIsOpen}

        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
        className="popUp-inner"
        style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data?.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
      >
        <button id="close" onClick={closeModal}>X</button>
        <h4>{data?.title}</h4>
        <p>{data?.overview}</p>
        <iframe width="560" height="315" src={video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      </Modal>
  );
}



export default PopUp;