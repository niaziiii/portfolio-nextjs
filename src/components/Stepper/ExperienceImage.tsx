import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Fade,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const ImagePreview = ({
  open,
  handleClose,
  image,
  images,
  currentIndex,
  setCurrentIndex,
}: {
  open: any;
  handleClose: any;
  image: any;
  images: any;
  currentIndex: any;
  setCurrentIndex: any;
}) => {
  const [zoomed, setZoomed] = useState(false);

  const toggleZoom = () => {
    setZoomed((prev) => !prev);
  };

  const handlePrevious = (e: any) => {
    e.stopPropagation();
    setCurrentIndex((prev: any) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = (e: any) => {
    e.stopPropagation();
    setCurrentIndex((prev: any) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <Dialog
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "rgba(18, 18, 18, 0.95)",
          backdropFilter: "blur(5px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
          borderRadius: "8px",
          maxWidth: zoomed ? "100vw" : "90vw",
          maxHeight: zoomed ? "100vh" : "90vh",
          m: zoomed ? 0 : 2,
          transition: "all 0.3s ease-in-out",
        },
      }}
      open={open}
      fullScreen={zoomed}
      onClose={handleClose}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 500 }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          fontSize: "1.5rem",
          position: "relative",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "16px 24px",
        }}
      >
        Project Screenshot
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "grey.500",
            "&:hover": { color: "white" },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent
        sx={{
          overflow: "hidden",
          position: "relative",
          p: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: zoomed ? "calc(100vh - 68px)" : "70vh",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src={image}
            alt="experience-image"
            layout="fill"
            objectFit="contain"
            quality={90}
          />

          {/* Navigation overlay */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 2,
              opacity: 0,
              transition: "opacity 0.3s",
              "&:hover": { opacity: 1 },
            }}
          >
            <IconButton
              aria-label="previous image"
              onClick={handlePrevious}
              sx={{
                bgcolor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                "&:hover": { bgcolor: "rgba(0, 0, 0, 0.7)" },
              }}
            >
              <NavigateBeforeIcon fontSize="large" />
            </IconButton>

            <IconButton
              aria-label="next image"
              onClick={handleNext}
              sx={{
                bgcolor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                "&:hover": { bgcolor: "rgba(0, 0, 0, 0.7)" },
              }}
            >
              <NavigateNextIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>

        {/* Controls */}
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            right: 16,
            display: "flex",
            gap: 1,
            background: "rgba(0, 0, 0, 0.5)",
            borderRadius: "24px",
            padding: "4px 8px",
          }}
        >
          <IconButton size="small" onClick={toggleZoom} sx={{ color: "white" }}>
            {zoomed ? <ZoomOutIcon /> : <ZoomInIcon />}
          </IconButton>
        </Box>

        {/* Image counter */}
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            left: 16,
            background: "rgba(0, 0, 0, 0.5)",
            color: "white",
            borderRadius: "24px",
            padding: "4px 12px",
            fontSize: "0.875rem",
            fontWeight: 500,
          }}
        >
          {currentIndex + 1} / {images.length}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

const ExperienceImageComponent = ({ images }: { images: any }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index: any) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        mt: 3,
        mb: 4,
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        },
        gap: 2,
      }}
    >
      {images?.map((image: any, i: any) => (
        <Box
          key={i}
          sx={{
            position: "relative",
            height: 180,
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              "& .image-overlay": {
                opacity: 1,
              },
            },
          }}
          onClick={() => handleImageClick(i)}
        >
          <Image
            src={image}
            alt={`Project screenshot ${i + 1}`}
            layout="fill"
            objectFit="cover"
            className="experience-images"
          />
          <Box
            className="image-overlay"
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.8) 100%)",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              padding: "12px",
              opacity: 0,
              transition: "opacity 0.3s ease",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "0.875rem",
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              View full image
            </Typography>
          </Box>
        </Box>
      ))}

      <ImagePreview
        open={open}
        handleClose={handleClose}
        image={images[currentIndex]}
        images={images}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </Box>
  );
};

export default ExperienceImageComponent;
