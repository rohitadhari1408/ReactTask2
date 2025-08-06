const Portfolio = require("../model/Portfolio");






exports.getPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find();
    res.json(portfolios);
  } catch (error) {
    res.status(500).json({ error: "Error fetching portfolios" });
  }
};

exports.getPortfolioById = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ error: "Error fetching portfolio by ID" });
  }
};


exports.updatePortfolio = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      title,
      tagline,
      bio,
      email,
      phone,
      location,
      socials,
      skills,
      services,
      projects, // this maps to portfolio
      testimonials,
      blog,
      contactMessage,
      contactEmail,
      contactPhone,
      template,
    } = req.body;

    // Conditionally get uploaded file name
    const profileImage = req.file ? req.file.filename : undefined;

    // Build update payload
    const updatedData = {
      template,
      hero: {
        name,
        title,
        tagline,
        ...(profileImage && { profileImage }), // Only include if file uploaded
      },
      about: {
        bio,
        email,
        phone,
        location,
        socials: socials ? JSON.parse(socials) : [],
      },
      skills: skills ? JSON.parse(skills) : [],
      services: services ? JSON.parse(services) : [],
      portfolio: projects ? JSON.parse(projects) : [],
      testimonials: testimonials ? JSON.parse(testimonials) : [],
      blog: blog ? JSON.parse(blog) : {},
      contact: {
        message: contactMessage,
        email: contactEmail,
        phone: contactPhone,
      },
    };

    // Perform update
    const updatedPortfolio = await Portfolio.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedPortfolio) {
      return res.status(404).json({ success: false, error: "Portfolio not found" });
    }

    return res.status(200).json({ success: true, data: updatedPortfolio });
  } catch (err) {
    console.error("Update Error:", err);
    return res.status(500).json({ success: false, error: "Server error" });
  }
};

exports.createOrUpdatePortfolio = async (req, res) => {
  try {
    const {
      name,
      title,
      tagline,
      bio,
      email,
      phone,
      location,
      socials,
      skills,
      services,
      projects,
      testimonials,
      blog,
      contactMessage,
      contactEmail,
      contactPhone,
      template,
    } = req.body;

    // const profileImage = req.file?.filename || "";
    const profileImage = req.files?.profileImage?.[0]?.filename || "";

 // Assuming you're using multer with diskStorage
console.log("Received profileImage:", profileImage);
    // --- Validate required fields ---
    if (!name || !title || !tagline || !template) {
      return res.status(400).json({
        success: false,
        message: "name, title, tagline, and template are required",
      });
    }

    // --- Safely parse JSON fields sent as strings ---
    const parsedSocials = parseJSON(socials, []);
    const parsedSkills = parseJSON(skills, []);
    const parsedServices = parseJSON(services, []);
    const parsedPortfolio = parseJSON(projects, []); // rename projects to portfolio
    const parsedTestimonials = parseJSON(testimonials, []);
    const parsedBlog = parseJSON(blog, { title: "", summary: "" });

    // --- Structure portfolioData according to your schema ---
    const portfolioData = {
      template,
      hero: {
        name,
        title,
        tagline,
        profileImage,
      },
      about: {
        bio: bio || "",
        email: email || "",
        phone: phone || "",
        location: location || "",
        socials: parsedSocials,
      },
      skills: parsedSkills,
      services: parsedServices,
      portfolio: parsedPortfolio,
      testimonials: parsedTestimonials,
      blog: parsedBlog,
      contact: {
        message: contactMessage || "",
        email: contactEmail || "",
        phone: contactPhone || "",
      },
    };

    // --- Save to MongoDB ---
    const createdPortfolio = await Portfolio.create(portfolioData);

    return res.status(201).json({
      success: true,
      data: createdPortfolio,
    });
  } catch (error) {
    console.error("Portfolio creation failed:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Server error",
    });
  }
};

// Utility to safely parse JSON fields
function parseJSON(input, fallback) {
  try {
    return typeof input === "string" ? JSON.parse(input) : input;
  } catch (e) {
    return fallback;
  }
}




