import React from "react";
import StepperForm from "../Form/StepperForm";
import HeroStep from "../Form/Steps/HeroStep";
import AboutStep from "../Form/Steps/AboutStep";
import SkillsStep from "../Form/Steps/SkillsStep";
import ServicesStep from "../Form/Steps/ServicesStep";
import ProjectsStep from "../Form/Steps/projectStep";
import TestimonialsStep from "../Form/Steps/TestomonialStep";
import BlogStep from "../Form/Steps/BlogStep";
import ContactStep from "../Form/Steps/ContactStep";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const stepLabels = [
  "Hero", "About", "Skills", "Services",
  "Projects", "Testimonials", "Blog", "Contact"
];

const stepFieldMap = {
  0: ["name", "title", "tagline", "profileImage"],
  1: ["bio", "email", "phone"],
  2: ["skills"],
  3: ["services"],
  4: ["projects"],
  5: ["testimonials"],
  6: ["blog"],
  7: ["contactFormEnabled", "address", "mapLink"]
};

const initialValues = {
  name: "",
  title: "",
  tagline: "",
  profileImage: null,
  bio: "",
  email: "",
  phone: "",
  skills: [],
  services: [],
  projects: [],
  testimonials: [],
  blog: {
    title: "",
    summary: ""
  },
  contact: {
    message: "",
    email: "",
    phone: ""
  },
  contactFormEnabled: false,
  address: "",
  mapLink: ""
};

const validationSchema = [
  Yup.object({
    name: Yup.string().required("Required"),
    title: Yup.string().required("Required"),
    tagline: Yup.string().required("Required"),
    profileImage: Yup.mixed()
  }),
  Yup.object({
    bio: Yup.string(),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required")
  }),
  Yup.object({
    skills: Yup.array().of(
      Yup.object({
        title: Yup.string().required("Skill title is required"),
        level: Yup.string().required("Skill level is required")
      })
    ).min(1, "At least one skill is required")
  }),
  Yup.object({
    services: Yup.array().of(
      Yup.object({
        title: Yup.string().required("Service title is required"),
        description: Yup.string().required("Service description is required")
      })
    ).min(1, "At least one service is required")
  }),
  Yup.object({
    projects: Yup.array()
  }),
  Yup.object({
    testimonials: Yup.array().of(
      Yup.string().required("Testimonial is required")
    ).min(1, "At least one testimonial is required")
  }),
  Yup.object({
    blog: Yup.object({
      title: Yup.string().required("Blog title is required"),
      summary: Yup.string().required("Blog summary is required")
    })
  }),
  Yup.object({
    contact: Yup.object({
      message: Yup.string().required("Message is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().required("Phone is required")
    })
  })
];

const buildFormData = (data) => {
  const formData = new FormData();
const template = localStorage.getItem("selectedTemplate");
  formData.append("template", template);
  // Flatten and format fields as per your backend format
  if (data.name) formData.append("name", data.name);
  if (data.title) formData.append("title", data.title);
  if (data.tagline) formData.append("tagline", data.tagline);
  if (data.bio) formData.append("bio", data.bio);
  if (data.email) formData.append("email", data.email);
  if (data.phone) formData.append("phone", data.phone);
  if (data.location) formData.append("location", data.location);
  if (data.template) formData.append("template", data.template);

  // File
  if (data.profileImage instanceof File) {
    formData.append("profileImage", data.profileImage);
  }

  // Arrays and objects to JSON strings
  if (Array.isArray(data.skills)) {
    formData.append("skills", JSON.stringify(data.skills));
  }

  if (Array.isArray(data.services)) {
    formData.append("services", JSON.stringify(data.services));
  }

  if (Array.isArray(data.projects)) {
    formData.append("projects", JSON.stringify(data.projects));
  }

  if (Array.isArray(data.testimonials)) {
    formData.append("testimonials", JSON.stringify(data.testimonials));
  }

  if (Array.isArray(data.socials)) {
    formData.append("socials", JSON.stringify(data.socials));
  }

  if (typeof data.blog === "object" && data.blog) {
    formData.append("blog", JSON.stringify(data.blog));
  }


  // Contact flattened
  if (data.contact) {
    if (data.contact.message) formData.append("contactMessage", data.contact.message);
    if (data.contact.email) formData.append("contactEmail", data.contact.email);
    if (data.contact.phone) formData.append("contactPhone", data.contact.phone);
  }

  return formData;

};


const handleStepSubmit = async (data, step) => {
  try {
    const formData = buildFormData(data);
    console.log("Submitting step:", step);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    if (step === 0) {
  //     const template = localStorage.getItem("selectedTemplate");
  // formData.append("template", template);
  const res = await axios.post(`${API_BASE_URL}/portfolios`, formData);

  const id = res.data?.data?._id;
  console.log("Portfolio created with ID:", id);

  if (id) localStorage.setItem("portfolioId", id);
} else {
      const id = localStorage.getItem("portfolioId");
      if (!id) throw new Error("Portfolio ID not found.");
      await axios.patch(`${API_BASE_URL}/portfolios/${id}`, formData);
    }
  } catch (err) {
    console.error(`Step ${step} failed:`, err);
    alert(`Step ${step + 1} failed. Check console.`);
  }
};

const handleFinalSubmit = async (data) => {
  try {
    const formData = buildFormData(data);
    const id = localStorage.getItem("portfolioId");
    if (!id) throw new Error("Portfolio ID not found.");
    await axios.put(`${API_BASE_URL}/portfolios/${id}`, formData);
    alert("Portfolio updated successfully!");
  } catch (err) {
    console.error("Final submit failed:", err);
    alert("Final submit failed.");
    Navigate("/professionals");
    localStorage.removeItem("selectedTemplate");
    localStorage.removeItem("portfolioId");

  }
};


const PortfolioStepper = () => {
  return (
    <><div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-6 md:p-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Build Your <span className="text-blue-600">Professional Portfolio</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Fill in the details step-by-step to create your custom portfolio.
          </p>
        </div>

        <StepperForm
          initialValues={initialValues}
          stepFieldMap={stepFieldMap}
          stepComponents={[
            <HeroStep />,
            <AboutStep />,
            <SkillsStep />,
            <ServicesStep />,
            <ProjectsStep />,
            <TestimonialsStep />,
            <BlogStep />,
            <ContactStep />,
          ]}
          stepLabels={stepLabels}
          onStepSubmit={handleStepSubmit}
          onFinalSubmit={handleFinalSubmit}
          validationSchema={validationSchema}
        />
      </div>
    </div>
    </>
  );
};

export default PortfolioStepper;
