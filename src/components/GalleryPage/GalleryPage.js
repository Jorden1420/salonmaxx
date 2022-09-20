import React, { useEffect, useRef } from "react";

import SectionHeader from "../../common/SectionHeader";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const GalleryPage = (props) => {
  const galleryRef = useRef();

  useEffect(() => {
    props.galleryNode(galleryRef);
  }, []);

  const getIt = () => {
    let data = "";
    for (let i = 1; i < 49; i++) {
      data += "\n";
      data += JSON.stringify(i);
    }
    return data;
  };

  return (
    <div className="gallery-container" ref={galleryRef}>
      <SectionHeader header={"Maxx Gallery"} />
      <div className="image-list-container d-flex justify-content-center">
        <Box sx={{ width: 1000, height: 450, overflowY: "scroll" }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item, index) => (
              <ImageListItem key={index} style={{ textAlign: "center" }}>
                <img
                  src={`${item}?w=248&fit=crop&auto=format`}
                  srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={"Salon Maxx gallery images"}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
      {/* {getIt()} */}
    </div>
  );
};

const itemData = [
  "/images/gallery/image(2).jpg",
  "/images/gallery/image(3).jpg",
  "/images/gallery/image(4).jpg",
  "/images/gallery/image(5).jpg",
  "/images/gallery/image(6).jpg",
  "/images/gallery/image(7).jpg",
  "/images/gallery/image(8).jpg",
  "/images/gallery/image(9).jpg",
  "/images/gallery/image(10).jpg",
  "/images/gallery/image(11).jpg",
  "/images/gallery/image(12).jpg",
  "/images/gallery/image(13).jpg",
  "/images/gallery/image(14).jpg",
  "/images/gallery/image(15).jpg",
  "/images/gallery/image(16).jpg",
  "/images/gallery/image(17).jpg",
  "/images/gallery/image(18).jpg",
  "/images/gallery/image(19).jpg",
  "/images/gallery/image(20).jpg",
  "/images/gallery/image(21).jpg",
  "/images/gallery/image(22).jpg",
  "/images/gallery/image(23).jpg",
  "/images/gallery/image(24).jpg",
  "/images/gallery/image(25).jpg",
  "/images/gallery/image(26).jpg",
  "/images/gallery/image(27).jpg",
  "/images/gallery/image(28).jpg",
  "/images/gallery/image(29).jpg",
  "/images/gallery/image(30).jpg",
  "/images/gallery/image(31).jpg",
  "/images/gallery/image(32).jpg",
  "/images/gallery/image(33).jpg",
  "/images/gallery/image(34).jpg",
  "/images/gallery/image(35).jpg",
  "/images/gallery/image(36).jpg",
  "/images/gallery/image(37).jpg",
  "/images/gallery/image(38).jpg",
  "/images/gallery/image(39).jpg",
  "/images/gallery/image(40).jpg",
  "/images/gallery/image(41).jpg",
  "/images/gallery/image(42).jpg",
  "/images/gallery/image(43).jpg",
  "/images/gallery/image(44).jpg",
  "/images/gallery/image(45).jpg",
  "/images/gallery/image(46).jpg",
  "/images/gallery/image(47).jpg",
  "/images/gallery/image(48).jpg",
];

export default GalleryPage;
