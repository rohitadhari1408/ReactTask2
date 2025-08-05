
# 🌐 Dynamic Portfolio Generator

A full-stack web application that allows users to create, customize, and manage their personal portfolio dynamically — no coding required.

## ✨ Features

- Add/Edit/Delete Portfolio Sections:
  - Hero Banner
  - About Section
  - Services
  - Projects/Portfolio
  - Testimonials
  - Blog Summary
  - Contact Information
- Upload profile picture and project images
- Responsive and modern UI
- Live preview of portfolio content
- REST API for CRUD operations
- Secure file uploads with Multer

## 🛠️ Tech Stack

### Frontend:
- React.js
- Tailwind CSS
- React Router

### Backend:
- Node.js
- Express.js
- Multer (for file uploads)

### Database:
- MongoDB (Mongoose)

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js and npm installed
- MongoDB (local or cloud)

---

### 🔧 Installation

#### 1. Clone the repository

```bash
git clone https://github.com/your-username/dynamic-portfolio-generator.git
cd dynamic-portfolio-generator
````

#### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm run dev
```

#### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm start
```

The app should now be running at [http://localhost:3000](http://localhost:3000) and the backend at [http://localhost:5000](http://localhost:5000).

---

## 📁 Project Structure

```
├── backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── frontend
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── index.js
```

---

## 📦 API Endpoints

| Method | Endpoint             | Description             |
| ------ | -------------------- | ----------------------- |
| POST   | /api/portfolios      | Create/Update Portfolio |
| GET    | /api/portfolios      | Get all Portfolios      |
| GET    | /api/portfolios/\:id | Get Portfolio by ID     |
| PUT    | /api/portfolios/\:id | Update Portfolio        |
| DELETE | /api/portfolios/\:id | Delete Portfolio        |

---

## 📸 Screenshots

![alt text](<Screenshot 2025-08-05 141203.png>)
![alt text](<Screenshot 2025-08-05 174250.png>)
![alt text](<Screenshot 2025-08-05 232029.png>)

---

## 🧪 Future Enhancements

* Authentication (Login/Signup)
* Theme customization
* Portfolio export as PDF
* Deploy to Vercel/Netlify and Render/Heroku

---

