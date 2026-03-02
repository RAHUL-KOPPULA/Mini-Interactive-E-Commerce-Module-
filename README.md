# Mini-Interactive-E-Commerce-Module-
## 🚀 Project Overview

This project is a Mini E-Commerce Product Module built using:

- MongoDB
- Express.js
- React.js
- Node.js

The application allows users to:

- View products
- Search products
- Add to cart
- Update cart quantity
- Remove items from cart
- Place a dummy order

---

## 📁 Project Structure


Mini Interactive E-Commerce Module
│
├── baclend/ # Backend (Node + Express + MongoDB)
│ ├── models/
│ ├── routes/
│ ├── seed.js
│ ├── server.js
│ └── .env
│
├── frontend/ # Frontend (React)
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ └── App.js
│ └── package.json
│
└── README.md


---

## ⚙️ Backend Setup

### 1️⃣ Install Dependencies

```bash
cd backend
npm install
2️⃣ Create .env File
MONGO_URI=mongodb://127.0.0.1:27017/rahulstore
PORT=5000
3️⃣ Seed Database
node seed.js
4️⃣ Start Backend
npm run dev

Backend runs on:

http://localhost:5000
💻 Frontend Setup
1️⃣ Install Dependencies
cd frontend
npm install
2️⃣ Start React App
npm start

Frontend runs on:

http://localhost:3000
📌 API Endpoints
✅ Product APIs
Method	Endpoint	Description
POST	/api/products	Add product
GET	/api/products	Get all products
GET	/api/products/:id	Get single product
GET	/api/products?search=keyword	Search product
✅ Cart APIs
Method	Endpoint	Description
POST	/api/cart	Add to cart
PUT	/api/cart/:id	Update quantity
GET	/api/cart	Get cart items
DELETE	/api/cart/:id	Remove item
📦 Features Implemented
🏠 Home Page

Display products

Search functionality

Add to cart

Loading state

No Products Found message

Responsive grid layout

🛍 Cart Page

View cart items

Increase / Decrease quantity

Remove items

Total price calculation

Place order button (dummy alert)

🧠 Database Schema
Product Schema
{
  name: String,
  description: String,
  price: Number,
  category: String,
  stock: Number,
  image: String,
  createdAt: Date
}
Cart Schema
{
  productId: ObjectId,
  quantity: Number,
  totalPrice: Number
}
🎨 UI Highlights

Responsive Grid Layout

Hover Effects

Add to Cart Interaction

Clean Card Design

Mobile Friendly

🛠 Technologies Used

React.js

Node.js

Express.js

MongoDB

Mongoose

Axios

 CSS

📸 Screenshots

(uploaded with the project at Last)

👨‍💻 Author

Rahul Babu Koppula
MERN Stack Developer
