import React from "react";
import { useFormikContext } from "formik";

const TestimonialsStep = () => {
  const { values, setFieldValue } = useFormikContext();

  const handleAddTestimonial = () => {
    const updated = [...(values.testimonials || []), ""];
    setFieldValue("testimonials", updated);
  };

  const handleRemoveTestimonial = (index) => {
    const updated = [...values.testimonials];
    updated.splice(index, 1);
    setFieldValue("testimonials", updated);
  };

  const handleChange = (index, value) => {
    const updated = [...values.testimonials];
    updated[index] = value;
    setFieldValue("testimonials", updated);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Testimonials</h2>

      {(values.testimonials || []).map((testimonial, index) => (
        <div key={index} className="flex gap-3 items-start">
          <textarea
            value={testimonial}
            onChange={(e) => handleChange(index, e.target.value)}
            className="border w-full px-3 py-2 rounded"
            rows={3}
            placeholder="Enter testimonial message..."
          />
          <button
            type="button"
            onClick={() => handleRemoveTestimonial(index)}
            className="text-red-500 text-xl"
          >
            ✕
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddTestimonial}
        className="text-blue-600 underline"
      >
        + Add Testimonial
      </button>
    </div>
  );
};

export default TestimonialsStep;
