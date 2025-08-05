import React, { useEffect, useState } from 'react';
import ProfileCard from '../componets/ProfileCard'; // Adjust path as needed
import axios from 'axios';
import Navbar from '../componets/ui/Navbar';

const PortfolioPage = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProfiles = async () => {
    try {

      const res = await axios.get(`${import.meta.env.VITE_API_URL}/portfolios`);
      setProfiles(res.data);
    } catch (err) {
      console.error('Failed to fetch profiles:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  console.log('Profiles:', profiles);

  return (
    <>
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Developer Portfolios
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-lg text-gray-600 animate-pulse">Loading portfolios...</div>
          </div>
        ) : profiles.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">No profiles found.</div>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profiles.map((profile) => (
              <ProfileCard key={profile._id} profile={profile} />
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default PortfolioPage;

