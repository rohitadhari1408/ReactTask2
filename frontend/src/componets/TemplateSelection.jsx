import React from "react";
import { useNavigate } from "react-router-dom";
import  ClassicImage from "../assets/images/Classic.avif";
import MordenImage from "../assets/images/Morden.avif";

const TemplateSelection = () => {
  const navigate = useNavigate();

  const handleTemplateSelect = (template) => {
    localStorage.setItem("selectedTemplate", template);
    navigate("/form");
  };

  const templates = [
    {
      name: "Morden",
      id: "morden",
      image: MordenImage, // Adjust the path as needed
    },
    {
      name: "Classic",
      id: "classic",
      image: ClassicImage,
    },
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
        Choose Your <span className="text-blue-600">Portfolio Template</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {templates.map((template) => (
          <div
            key={template.id}
            onClick={() => handleTemplateSelect(template.id)}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer w-80"
          >
            <img
              src={template.image}
              alt={template.name}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-5 text-center">
              <h2 className="text-lg font-semibold text-gray-700">
                {template.name}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Click to select this template
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default TemplateSelection;
