# Hand2Hand – Second-Hand Marketplace Web Application

Hand2Hand is a **full-stack marketplace web application** where users can buy and sell second-hand products.
The platform provides secure authentication, product listings, shopping cart management, order processing, and product reviews.

This project demonstrates **modern full-stack development using React, Node.js, Express, and MongoDB**.

---

## 🚀 Live Demo

Frontend: *https://hand2hand-marketplace.vercel.app/*
Backend API: *https://hand2hand-marketplace.onrender.com*

---

## 📌 Features

### User Features

* User registration and login
* Browse available products
* Search products
* Add products to cart
* Manage delivery addresses
* Place orders
* Write product reviews

### Admin Features

* Add new products
* Update product details
* Delete products
* Manage orders

### Platform Features

* Secure authentication using JWT
* Cloud image upload using Cloudinary
* RESTful API architecture
* State management with Redux Toolkit
* Responsive UI with TailwindCSS

---

## 🛠 Tech Stack

### Frontend

* React
* Vite
* Redux Toolkit
* React Router
* Axios
* TailwindCSS
* Radix UI Components

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* Multer (File Uploads)
* Cloudinary (Image Storage)

### Payment Integration

* PayPal SDK

### Deployment

Frontend: **Vercel**
Backend: **Render**
Database: **MongoDB Atlas**

---

## 📂 Project Structure

```
website-HAND2HAND-main
│
├── client                 # React frontend
│   ├── src
│   ├── components
│   ├── pages
│   └── redux
│
├── server                 # Node.js backend
│   ├── routes
│   ├── models
│   ├── controllers
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation and Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/yourusername/hand2hand-marketplace.git
cd hand2hand-marketplace
```

---

### 2️⃣ Backend Setup

Navigate to the server folder:

```
cd server
```

Install dependencies:

```
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start the server:

```
node server.js
```

Server will run on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

Navigate to client folder:

```
cd client
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🔐 Environment Variables

The backend requires the following environment variables:

```
PORT
MONGO_URI
JWT_SECRET
CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
```

These variables should be added in a `.env` file inside the **server directory**.

---

## 🎯 Learning Outcomes

Through this project I gained experience in:

* Building **full-stack MERN applications**
* Implementing **authentication using JWT**
* Designing **REST APIs with Express**
* Managing global state using **Redux Toolkit**
* Handling **file uploads with Multer**
* Integrating **Cloudinary for image storage**
* Deploying full-stack applications using **Vercel and Render**

---

## 👩‍💻 Author

Rakshitha
GitHub: https://github.com/rakshitha-11

---

## 📜 License

This project is created for **educational and portfolio purposes**.
