import React from 'react';
import { useNavigate } from 'react-router-dom';
import DefalutImage from '../assets/images/defalut.jpg';

const ProfileCard = ({ profile }) => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/portfolio/${profile._id}`, {
      state: { template: profile.template },
    });
  };

  const { hero } = profile || {};
  const name = hero?.name || "Unknown";
  const title = hero?.title || "No Title";
  const tagline = hero?.tagline || "";
  const profileImage = hero?.profileImage;

  const imageUrl = profileImage
    ? `http://localhost:5000/uploads/${profileImage}`
    : DefalutImage;

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Full-width rectangular image */}
      <img
        src={imageUrl}
        alt="Profile"
        className="w-full h-48 object-cover"
      />

      <div className="p-6 text-center">
        {/* Name styled differently below image */}
        <h2 className="text-2xl font-bold text-blue-800 mb-1">{name}</h2>


        <button
          onClick={handleViewClick}
          className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
