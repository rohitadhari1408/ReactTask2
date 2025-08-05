

import React from "react";
import { useFormikContext } from "formik";

const SkillsStep = () => {
  const { values, setFieldValue } = useFormikContext();

  const handleAddSkill = () => {
    setFieldValue("skills", [...(values.skills || []), ""]);
  };

  const handleRemoveSkill = (index) => {
    const updated = [...values.skills];
    updated.splice(index, 1);
    setFieldValue("skills", updated);
  };

  const handleChangeSkill = (index, value) => {
    const updated = [...values.skills];
    updated[index] = value;
    setFieldValue("skills", updated);
  };

  return (
    <div className="space-y-4">
      <div>
        <label>Skills</label>
        {values.skills?.map((skill, index) => (
          <div key={index} className="flex items-center gap-2 mt-2">
            <input
              type="text"
              value={skill}
              onChange={(e) => handleChangeSkill(index, e.target.value)}
              className="border w-full px-3 py-2 rounded"
              placeholder="e.g., React, Node.js"
            />
            <button
              type="button"
              onClick={() => handleRemoveSkill(index)}
              className="text-red-500 font-bold"
            >
              ✕
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddSkill}
          className="text-blue-600 underline mt-2"
        >
          + Add Skill
        </button>
      </div>
    </div>
  );
};

export default SkillsStep;
