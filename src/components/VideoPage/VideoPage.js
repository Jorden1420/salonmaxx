import React, { useEffect, useRef } from "react";

import SectionHeader from "../../common/SectionHeader";

const VideoPage = (props) => {
  const videoRef = useRef();

  useEffect(() => {
    props.videoNode(videoRef);
  }, []);
  return (
    <div className="videos-container" ref={videoRef}>
      <SectionHeader header={"Videos"} />
      <div className="services-container">
        <div className="row justify-content-center">
          <div className="col-lg-6 shadow-sm">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/owMKb4xWjuI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
          {/* <div className="col-lg-6 shadow-sm">
            <video
              src="https://erasalonbucket.s3.us-west-1.amazonaws.com/Era_Salonvod2.mp4"
              width="100%"
              height="315"
              allowFullScreen
              controls
              title="Era Salon Video Second"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
