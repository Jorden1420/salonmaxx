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

  return (
    <div className="gallery-container" ref={galleryRef}>
      <SectionHeader header={"Maxx Gallery"} />
      <div className="image-list-container d-flex justify-content-center">
        <Box sx={{ width: 1000, height: 450, overflowY: "scroll" }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img} style={{ textAlign: "center" }}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
    </div>
  );
};

const itemData = [
  {
    img: "/images/gallery/1.jpg",
    title: "One Picture Gallery",
  },
  {
    img: "/images/gallery/2.jpg",
    title: "Two Picture Gallery",
  },
  {
    img: "/images/gallery/3.jpg",
    title: "Three Picture Gallery",
  },
  {
    img: "/images/gallery/4.jpg",
    title: "Four Picture Gallery",
  },
  {
    img: "/images/gallery/5.jpg",
    title: "Five Picture Gallery",
  },
  {
    img: "/images/gallery/6.jpg",
    title: "Six Picture Gallery",
  },
  {
    img: "/images/gallery/7.jpg",
    title: "Seven Picture Gallery",
  },
  {
    img: "/images/gallery/8.jpg",
    title: "Eight Picture Gallery",
  },
];

export default GalleryPage;
