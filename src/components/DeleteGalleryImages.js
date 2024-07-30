import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DeleteGalleryImages = () => {
  const [images, setImages] = useState([]); // Initialize state as an array
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image
  const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility

  const navigate = useNavigate()

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://2lkz6gq8-5002.inc1.devtunnels.ms/get-images"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const data = await response.json();
        console.log("images data:", data); // Log the images data from the API
        setImages(data); // Set the array of image objects to state
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const handleDelete = async (filename) => {
    try {
      const response = await fetch(
        `https://2lkz6gq8-5002.inc1.devtunnels.ms/delete-image/${filename}`,
        { method: "DELETE" }
      );
      if (!response.ok) {
        throw new Error("Failed to delete image");
      }
      console.log(`Image with filename ${filename} deleted successfully.`);
      // Remove the deleted image from the state
      setImages((prevImages) =>
        prevImages.filter((image) => image.filename !== filename)
      );
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const handleImageClick = (filename) => {
    setSelectedImage(filename);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const handleViewClick = () => {
    navigate('/uploadGallery');
  };

  return (
    <div className="w-[100%] flex">
      <div className="lg:w-[20%] md:w-[15%] w-[10%]"></div>
      <div className="container mx-auto p-4 lg:w-[80%] md:w-[85%] w-[90%]">
        <button
        onClick={handleViewClick}
        className="mt-4 mb-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Upload Gallery Images
      </button>
        <h1 className="text-3xl font-bold mb-4">All Gallery Images</h1>

        {images.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b text-left">Images</th>
                  <th className="px-4 py-2 border-b text-left">Filename</th>
                  <th className="px-4 py-2 border-b text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {images.map((image) => (
                  <tr key={image.filename} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border-b">
                      <img
                        src={`https://2lkz6gq8-5002.inc1.devtunnels.ms/gallery/${image.filename}`}
                        alt={image.filename}
                        className="w-64 h-36 cursor-pointer"
                        onClick={() => handleImageClick(image.filename)}
                      />
                    </td>
                    <td className="px-4 py-2 border-b">{image.filename}</td>
                    <td className="px-4 py-2 border-b">
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                        onClick={() => handleDelete(image.filename)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center">No images found.</p>
        )}

        {/* Modal for viewing image */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg relative h-[80vh] w-[80%]">
              <button
                className="absolute top-2 right-2 font-bold text-white hover:text-gray-900 bg-customColor-circleColor hover:bg-white"
                onClick={handleCloseModal}
              >
                &times;
              </button>
              <img
                src={`https://2lkz6gq8-5002.inc1.devtunnels.ms/gallery/${selectedImage}`}
                alt={selectedImage}
                className="w-[100%] max-h-[75vh]"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteGalleryImages;
