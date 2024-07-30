import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Dropzone Component
const Dropzone = ({ onDrop }) => {
  const onDropCallback = useCallback(
    (acceptedFiles) => {
      onDrop(acceptedFiles);
    },
    [onDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropCallback,
    accept: "image/*",
  });

  return (
    <div
      {...getRootProps()}
      className={`border-dashed border-4 p-6 text-center cursor-pointer ${
        isDragActive ? "border-blue-600" : "border-gray-300"
      }`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};

// UploadGallery Component
const UploadGallery = () => {
  const [images, setImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  const handleDrop = (acceptedFiles) => {
    setImages((prevImages) => [...prevImages, ...acceptedFiles]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    images.forEach((image) => {
      formData.append("images", image);
    });

    setIsUploading(true);
    try {
      const response = await axios.post(
        "https://2lkz6gq8-5002.inc1.devtunnels.ms/upload-multiple",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Upload successful:", response.data);
      setImages([]);
    } catch (error) {
      console.error("Error uploading images:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleViewClick = () => {
    navigate("/deleteGallery");
  };

  return (
    <div className="flex w-full gap-10">
      <div className="lg:w-[20%] md:w-[15%] w-[10%]"></div>
      <div className=" p-4 lg:w-[80%] md:w-[85%] w-[90%] lg:ml-0 md:ml-20">
        <h1 className="font-bold text-black mb-10 mt-10 text-3xl max-w-md ">
          Upload Gallery
        </h1>
        <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            Upload Your Gallery Images here:
          </h2>
          <p className="font-bold text-gray-400">(You can upload multiple images too)</p>
          <Dropzone onDrop={handleDrop} />
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Selected Images:</h3>
            <ul>
              {images.map((image, index) => (
                <li key={index} className="text-sm">
                  {image.name}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={handleUpload}
            className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded ${
              isUploading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isUploading}
          >
            {isUploading ? "Uploading..." : "Upload"}
          </button>
          <button
            onClick={handleViewClick}
            className="mt-4 ml-4 px-4 py-2 bg-green-500 text-white rounded"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadGallery;
