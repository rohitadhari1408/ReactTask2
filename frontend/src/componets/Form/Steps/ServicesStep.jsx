import React from "react";
import { useFormikContext } from "formik";

const ServicesStep = () => {
  const { values, setFieldValue } = useFormikContext();

  const handleAddService = () => {
    const updatedServices = [...(values.services || []), { title: "", description: "" }];
    setFieldValue("services", updatedServices);
  };

  const handleRemoveService = (index) => {
    const updatedServices = [...values.services];
    updatedServices.splice(index, 1);
    setFieldValue("services", updatedServices);
  };

  const handleChange = (index, field, value) => {
    const updatedServices = [...values.services];
    updatedServices[index][field] = value;
    setFieldValue("services", updatedServices);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Services</h2>

      {values.services?.map((service, index) => (
        <div key={index} className="border rounded p-4 space-y-3 bg-gray-50">
          <div>
            <label>Title</label>
            <input
              type="text"
              value={service.title}
              onChange={(e) => handleChange(index, "title", e.target.value)}
              className="border w-full px-3 py-2 rounded"
              placeholder="e.g., Web Development"
            />
          </div>

          <div>
            <label>Description</label>
            <textarea
              value={service.description}
              onChange={(e) => handleChange(index, "description", e.target.value)}
              className="border w-full px-3 py-2 rounded"
              rows={3}
              placeholder="Brief description of the service"
            />
          </div>

          <button
            type="button"
            onClick={() => handleRemoveService(index)}
            className="text-red-500 mt-1"
          >
            ✕ Remove Service
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddService}
        className="text-blue-600 underline"
      >
        + Add Service
      </button>
    </div>
  );
};

export default ServicesStep;
