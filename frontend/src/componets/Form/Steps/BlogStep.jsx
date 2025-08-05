import React from "react";
import { useFormikContext } from "formik";

const BlogStep = () => {
  const { values, setFieldValue } = useFormikContext();

  return (
    <div className="space-y-4">
      <div>
        <label>Blog Title</label>
        <input
          name="blog.title"
          value={values.blog?.title || ""}
          onChange={(e) => setFieldValue("blog.title", e.target.value)}
          className="border w-full px-3 py-2 rounded"
        />
      </div>
      <div>
        <label>Blog Summary</label>
        <textarea
          name="blog.summary"
          value={values.blog?.summary || ""}
          onChange={(e) => setFieldValue("blog.summary", e.target.value)}
          className="border w-full px-3 py-2 rounded"
          rows={4}
        />
      </div>
    </div>
  );
};

export default BlogStep;
