import React from "react";
import { useFormikContext } from "formik";

const ContactStep = () => {
  const { values, setFieldValue } = useFormikContext();

  return (
    <div className="space-y-4">
      <div>
        <label>Message</label>
        <textarea
          name="contact.message"
          value={values.contact?.message || ""}
          onChange={(e) => setFieldValue("contact.message", e.target.value)}
          className="border w-full px-3 py-2 rounded"
          rows={3}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="contact.email"
          value={values.contact?.email || ""}
          onChange={(e) => setFieldValue("contact.email", e.target.value)}
          className="border w-full px-3 py-2 rounded"
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          type="tel"
          name="contact.phone"
          value={values.contact?.phone || ""}
          onChange={(e) => setFieldValue("contact.phone", e.target.value)}
          className="border w-full px-3 py-2 rounded"
        />
      </div>
    </div>
  );
};

export default ContactStep;
