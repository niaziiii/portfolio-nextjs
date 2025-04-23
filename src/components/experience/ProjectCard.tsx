import React, { useState, useCallback, memo } from "react";
import Image from "next/image";

const ImageModal = memo(
  ({
    isOpen,
    onClose,
    images,
    activeImage,
    setActiveImage,
    projectName,
  }: {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
    activeImage: number;
    setActiveImage: (index: any) => void;
    projectName: string;
  }) => {
    if (!isOpen) return null;

    const handlePrevImage = (e: React.MouseEvent) => {
      e.stopPropagation();
      setActiveImage((prev: any) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    };

    const handleNextImage = (e: React.MouseEvent) => {
      e.stopPropagation();
      setActiveImage((prev: number) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    };

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 transition-colors z-10"
            onClick={onClose}
            aria-label="Close image preview"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <div className="relative h-[70vh] rounded-lg overflow-hidden">
            {/* Use regular img tag instead of Next.js Image for modal to avoid layout shifts */}
            <img
              src={images[activeImage]}
              alt={`${projectName} screenshot`}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex justify-between items-center mt-4">
            <button
              className="bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 transition-colors"
              onClick={handlePrevImage}
              aria-label="Previous image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>

            <span className="text-white">
              {activeImage + 1} / {images.length}
            </span>

            <button
              className="bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 transition-colors"
              onClick={handleNextImage}
              aria-label="Next image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
);

ImageModal.displayName = "ImageModal";

const ImageThumbnail = memo(
  ({
    image,
    index,
    projectName,
    onImageClick,
  }: {
    image: string;
    index: number;
    projectName: string;
    onImageClick: (index: number) => void;
  }) => {
    return (
      <div
        className="relative h-32 rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
        onClick={() => onImageClick(index)}
      >
        <Image
          src={image}
          alt={`${projectName} screenshot ${index + 1}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-2">
          <span className="text-white text-sm font-medium">View larger</span>
        </div>
      </div>
    );
  }
);

ImageThumbnail.displayName = "ImageThumbnail";

const ProjectCard = ({ project }: { project: any }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);

  const handleImageClick = useCallback((index: number) => {
    setActiveImage(index);
    setShowImageModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowImageModal(false);
  }, []);

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700">
      {/* Project Header */}
      <div className="p-6 border-b border-gray-700">
        <h4 className="text-xl font-bold mb-3">{project.name}</h4>
        <p className="text-gray-300 mb-4">{project.description}</p>

        {/* Project Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-blue-900 bg-opacity-40 text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Project Highlights */}
      <div className="p-6 border-b border-gray-700">
        <h5 className="font-semibold text-gray-200 mb-3 flex items-center">
          <svg
            className="w-4 h-4 mr-2 text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          Key Highlights
        </h5>
        <ul className="space-y-2">
          {project.highlights.map((highlight: string, index: number) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-blue-400 mt-0.5 mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="text-gray-300">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Project Images */}
      {project.images && project.images.length > 0 && (
        <div className="p-6">
          <h5 className="font-semibold text-gray-200 mb-3 flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-blue-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              ></path>
            </svg>
            Project Screenshots
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {project.images.map((image: any, index: number) => (
              <ImageThumbnail
                key={index}
                image={image}
                index={index}
                projectName={project.name}
                onImageClick={handleImageClick}
              />
            ))}
          </div>
        </div>
      )}

      {/* Image Modal - Separated into its own component */}
      <ImageModal
        isOpen={showImageModal}
        onClose={handleCloseModal}
        images={project.images || []}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
        projectName={project.name}
      />
    </div>
  );
};

export default ProjectCard;
