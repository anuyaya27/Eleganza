import React, { useState } from 'react';
import axios from 'axios';

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setMessage('');
    }
  };

  const handleSubmit = () => {
    if (!image) {
      setMessage('Please upload an image first!');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    axios
      .post('YOUR_BACKEND_URL', formData)
      .then((response) => {
        setMessage('Image uploaded successfully!');
      })
      .catch((error) => {
        setMessage('Error uploading image');
      });
  };

  return (
    <div className="upload-image p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold mb-4 text-turquoise-600">Upload Your Clothing Image</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="p-2 border rounded text-gray-700 w-full mb-4 focus:ring-2 focus:ring-turquoise-500"
      />
      {image && (
        <div className="mb-4">
          <img src={image} alt="Preview" className="w-64 h-64 object-cover rounded-lg" />
        </div>
      )}

      <button
        onClick={handleSubmit}
        className="bg-turquoise-500 text-white p-2 rounded hover:bg-turquoise-600 transition duration-300"
      >
        Submit Image
      </button>

      {message && <p className="text-lg text-gray-700 mt-4">{message}</p>}
    </div>
  );
};

export default UploadImage;
