import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const ImagePreview = ({
  open,
  handleClose,
  image,
}: {
  open: any;
  handleClose: any;
  image: any;
}) => {
  const [zoomed, setZoomed] = useState(false);

  const toggleZoom = () => {
    setZoomed((prev) => !prev);
  };

  return (
    <Dialog
      sx={{ overflow: "hidden" }}
      open={open}
      fullScreen={zoomed}
      onClose={handleClose}
    >
      <DialogTitle sx={{ textAlign: "center", fontSize: "1.5rem" }}>
        Image Preview
      </DialogTitle>
      <DialogContent sx={{ overflow: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: zoomed ? "100vh" : "50vh",
            overflow: "hidden",
            cursor: zoomed ? "zoom-out" : "zoom-in",
            width: "100vw",
          }}
          onClick={toggleZoom}
        >
          <Image
            src={image}
            alt="experience-images"
            layout="fill"
            objectFit="contain"
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

const ExperienceImageComponent = ({ images }: { images: any[] }) => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleImageClick = (image: string) => {
    setCurrentImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        mt: 3,
        mb: 2,
        display: "flex",
        alignItems: "center",
        gap: 4,
        flexWrap: "wrap",
      }}
    >
      {images?.map((image, i) => (
        <Image
          key={i}
          src={image}
          alt="experience-images"
          className="experience-images cursor-pointer"
          width={250}
          height={250}
          onClick={() => handleImageClick(image)}
        />
      ))}
      <ImagePreview
        open={open}
        handleClose={handleClose}
        image={currentImage}
      />
    </Box>
  );
};

export default ExperienceImageComponent;
