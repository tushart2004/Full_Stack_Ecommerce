# Full Stack E-Commerce Application

This is a full stack e-commerce web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). The project includes:

- **Frontend**: Customer-facing React app (`frontend/`)
- **Backend**: Node.js/Express REST API with MongoDB (`backend/`)
- **Admin Panel**: React app for product management (`admin/`)

---

## Folder Structure

```
admin/      # Admin panel (React)
backend/    # Backend API (Node.js/Express/MongoDB)
frontend/   # Customer-facing frontend (React)
```

---

## Features

### Customer Frontend (`frontend/`)
- Browse products by category
- Product details and related products
- Add to cart, view cart, checkout
- User authentication (login/signup)
- Responsive design

### Admin Panel (`admin/`)
- Add new products (with image upload)
- List and remove products

### Backend (`backend/`)
- RESTful API for products, users, cart
- JWT authentication
- Image upload and static serving
- MongoDB for data storage

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB (local or Atlas)

### 1. Clone the repository

```sh
git clone <your-repo-url>
cd Full_Stack_Ecommerce
```

### 2. Install dependencies

Install for each folder:

```sh
cd backend
npm install

cd ../frontend
npm install

cd ../admin
npm install
```

### 3. Start MongoDB

Make sure MongoDB is running locally (default: `mongodb://localhost:27017/`).

### 4. Start the backend server

```sh
cd backend
node index.js
```
The backend runs on [http://localhost:4000](http://localhost:4000).

### 5. Start the frontend

```sh
cd frontend
npm start
```
The frontend runs on [http://localhost:3000](http://localhost:3000).

### 6. Start the admin panel

```sh
cd admin
npm start
```
The admin panel runs on [http://localhost:3000](http://localhost:3000) (use a different port if needed).

---

## Environment Variables

- You can set up a `.env` file in `backend/` for MongoDB connection string and other secrets.

---

## Screenshots

_Add screenshots of your app here!_

---

## License

This project is for educational purposes.

---

## Credits

- Built with [React](https://reactjs.org/), [Express](https://expressjs.com/), [MongoDB](https://www.mongodb.com/), [Node.js](https://nodejs.org/)
