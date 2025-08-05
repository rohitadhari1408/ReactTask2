import React from "react";
import { useFormikContext } from "formik";

const HeroStep = () => {
  const { values, setFieldValue } = useFormikContext();

  return (
    <div className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Name
        </label>
        <input
          name="name"
          value={values.name}
          onChange={(e) => setFieldValue("name", e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your full name"
        />
      </div>

      {/* Title */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Title
        </label>
        <input
          name="title"
          value={values.title}
          onChange={(e) => setFieldValue("title", e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your professional title (e.g., Full Stack Developer)"
        />
      </div>

      {/* Tagline */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Tagline
        </label>
        <input
          name="tagline"
          value={values.tagline}
          onChange={(e) => setFieldValue("tagline", e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="A short tagline or motto"
        />
      </div>

      {/* Profile Image */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Profile Image
        </label>
        <input
          type="file"
          name="profileImage"
          accept="image/*"
          onChange={(e) => setFieldValue("profileImage", e.currentTarget.files[0])}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>
    </div>
  );
};

export default HeroStep;
