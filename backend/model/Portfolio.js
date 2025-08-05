const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  template: String,
  hero: {
    name: String,
    title: String,
    tagline: String,
    profileImage: String,
  },
  about: {
    bio: String,
    email: String,
    phone: String,
    location: String,
    socials: [String],
  },
  skills: [String],
  services: [
    {
      title: String,
      description: String,
    },
  ],
  portfolio: [
    {
      title: String,
      image: String,
      description: String,
    },
  ],
  testimonials: [String],
  blog: {
    title: String,
    summary: String,
  },
  contact: {
    message: String,
    email: String,
    phone: String,
  },
});

module.exports = mongoose.model("Portfolio", portfolioSchema);
