import React from "react";
import { useFormikContext } from "formik";

const ProjectsStep = () => {
  const { values, setFieldValue } = useFormikContext();

  const handleAddProject = () => {
    const newProjects = [...(values.projects || []), {
      title: "",
      image: null,
      description: "",
    }];
    setFieldValue("projects", newProjects);
  };

  const handleRemoveProject = (index) => {
    const updated = [...values.projects];
    updated.splice(index, 1);
    setFieldValue("projects", updated);
  };

  const handleChange = (index, field, value) => {
    const updated = [...values.projects];
    updated[index][field] = value;
    setFieldValue("projects", updated);
  };

  const handleImageChange = (index, file) => {
    const updated = [...values.projects];
    updated[index].image = file;
    setFieldValue("projects", updated);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="text-lg font-semibold">Projects</label>
      </div>

      {values.projects?.map((project, index) => (
        <div key={index} className="space-y-3 border p-4 rounded-md bg-gray-50">
          <div>
            <label>Project Title</label>
            <input
              type="text"
              value={project.title}
              onChange={(e) => handleChange(index, "title", e.target.value)}
              className="border w-full px-3 py-2 rounded"
              placeholder="e.g., Portfolio Website"
            />
          </div>

          <div>
            <label>Project Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(index, e.currentTarget.files[0])}
              className="w-full"
            />
          </div>

          <div>
            <label>Description</label>
            <textarea
              value={project.description}
              onChange={(e) => handleChange(index, "description", e.target.value)}
              className="border w-full px-3 py-2 rounded"
              rows={3}
              placeholder="Brief description of the project"
            />
          </div>

          <button
            type="button"
            onClick={() => handleRemoveProject(index)}
            className="text-red-500 mt-2"
          >
            ✕ Remove Project
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddProject}
        className="text-blue-600 underline"
      >
        + Add Project
      </button>
    </div>
  );
};

export default ProjectsStep;
