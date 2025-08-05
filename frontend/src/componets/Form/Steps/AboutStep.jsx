import React from "react";
import { useFormikContext } from "formik";

const AboutStep = () => {
  const { values, setFieldValue } = useFormikContext();

  return (
    <div className="space-y-4">
      <div>
        <label>Bio</label>
        <textarea
          name="bio"
          value={values.bio}
          onChange={(e) => setFieldValue("bio", e.target.value)}
          rows={4}
          className="border w-full px-3 py-2 rounded"
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={(e) => setFieldValue("email", e.target.value)}
          className="border w-full px-3 py-2 rounded"
        />
      </div>

      <div>
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={values.phone}
          onChange={(e) => setFieldValue("phone", e.target.value)}
          className="border w-full px-3 py-2 rounded"
        />
      </div>

      <div>
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={values.location}
          onChange={(e) => setFieldValue("location", e.target.value)}
          className="border w-full px-3 py-2 rounded"
        />
      </div>

      <div>
        <label>Social Links</label>
        {values.socials?.map((link, index) => (
          <div key={index} className="flex items-center gap-2 mt-2">
            <input
              type="url"
              value={link}
              onChange={(e) =>
                setFieldValue(`socials[${index}]`, e.target.value)
              }
              className="border w-full px-3 py-2 rounded"
              placeholder="https://linkedin.com/in/username"
            />
            <button
              type="button"
              onClick={() => {
                const newLinks = [...values.socials];
                newLinks.splice(index, 1);
                setFieldValue("socials", newLinks);
              }}
              className="text-red-500 font-bold"
            >
              ✕
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => setFieldValue("socials", [...(values.socials || []), ""])}
          className="text-blue-600 underline mt-2"
        >
          + Add Social Link
        </button>
      </div>
    </div>
  );
};

export default AboutStep;
