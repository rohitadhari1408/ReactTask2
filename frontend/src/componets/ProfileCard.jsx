import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileCard = ({ profile }) => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/portfolio/${profile._id}`, { state: { template: profile.template } });
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
      {profile.hero?.profileImage ? (
        <img
          src={`${import.meta.env.VITE_API_URL}/uploads/${profile.hero.profileImage}`}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-500"
        />
      ) : (
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4 text-gray-500 text-xl font-bold border-4 border-blue-500">
          {profile.hero?.name?.[0] || "?"}
        </div>
      )}

      <h2 className="text-lg font-semibold text-gray-800">{profile.hero?.name}</h2>

      <button
        onClick={handleViewClick}
        className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200"
      >
        View
      </button>
    </div>
  );
};

export default ProfileCard;
