import React from "react";

const Reviews = () => {
  const iconColor = {
    color: "#007bff",
  };
  return (
    <div className="container formContainer">
      <div className="row text-center justify-content-center">
        <React.Fragment>
          <div className="col-md-3 img-thumbnail m-4">
            <h2 className="text-center py-2">Write a Google Review</h2>
            <a
              href="https://g.page/r/CYxcVeBkyATYEBE/review"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-google fa-4x pb-2" style={iconColor} />
            </a>
          </div>
          <div className="col-md-3 img-thumbnail m-4">
            <h2 className="text-center py-2">Write a Yelp Review</h2>
            <a
              href="https://www.yelp.com/biz/salon-maxx-citrus-heights-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-yelp fa-4x pb-2" style={iconColor} />
            </a>
          </div>
          <div className="col-md-3 img-thumbnail m-4">
            <h2 className="text-center py-2">Like on Facebook</h2>
            <a
              href="https://www.facebook.com/SalonMaxx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f fa-4x pb-2" style={iconColor} />
            </a>
          </div>
        </React.Fragment>
      </div>
    </div>
  );
};

export default Reviews;
