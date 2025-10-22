# 🎬 Movie Rental App

A modern, responsive **Movie Rental Application** built using **React** and **Vite**.  
This project allows users to explore, view details, and manage a rental cart for movies in an interactive and visually appealing UI.

---

## 🚀 Features

- 🎞️ **Browse Movies** – View a dynamic list of movies with posters, titles, and ratings.  
- 🧾 **Movie Details Modal** – Get in-depth information about each movie.  
- 🛒 **Cart Management** – Add, remove, and view rented movies in the cart.  
- ⭐ **Rating System** – Rate movies and track your favorites.  
- 🧩 **Component-Based Architecture** – Reusable React components for easy scalability.  
- ⚡ **Vite-Powered** – Lightning-fast development environment and optimized builds.

---

## 🧱 Project Structure

```
Movie-Rental/
├── public/
├── src/
│ ├── assets/
│ ├── cine/
│ │ ├── CartDetails.jsx
│ │ ├── MovieCard.jsx
│ │ ├── MovieDetailsModal.jsx
│ │ ├── MovieList.jsx
│ │ └── Rating.jsx
│ ├── context/
│ │ └── index.js
│ ├── data/
│ │ └── movies.js
│ ├── reducers/
│ ├── utils/
│ ├── App.jsx
│ ├── App.css
│ ├── Header.jsx
│ ├── Footer.jsx
│ ├── Sidebar.jsx
│ ├── Page.jsx
│ ├── main.jsx
│ └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
---

## 🧠 Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Frontend** | React, JSX, CSS |
| **Build Tool** | Vite |
| **State Management** | React Context API + Reducers |
| **Language** | JavaScript (ES6+) |
| **Styling** | CSS Modules / Custom CSS |

---

## ⚙️ Installation & Setup

Follow these steps to set up and run the project locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/your-username/Movie-Rental.git

# 2️⃣ Navigate into the project folder
cd Movie-Rental

# 3️⃣ Install dependencies
npm install

# 4️⃣ Run the development server
npm run dev

# 5️⃣ Open in your browser
http://localhost:5173

---

📁 Key Components

| Component                                 | Description                                      |
| ----------------------------------------- | ------------------------------------------------ |
| `MovieList.jsx`                           | Displays all available movies.                   |
| `MovieCard.jsx`                           | Shows a single movie card with poster and title. |
| `MovieDetailsModal.jsx`                   | Popup modal to view detailed movie info.         |
| `CartDetails.jsx`                         | Handles movie rental cart operations.            |
| `Rating.jsx`                              | Displays and manages user ratings.               |
| `Header.jsx`, `Footer.jsx`, `Sidebar.jsx` | Layout and navigation components.                |

---
🧩 Context & State Management

The project uses React Context and Reducer patterns for managing global states such as:

Selected movies

Cart items

User interactions and ratings

These are located in:
src/context/
src/reducers/

---

🧠 Future Enhancements

🔍 Search and Filter functionality

💳 Payment Integration for rentals

🔐 User Authentication (Login/Signup)

🌐 Backend API integration (Node.js / Firebase)

🌓 Dark Mode Support

---
Live Preview: https://biswas-movie-rental.vercel.app
---

🧑‍💻 Author

Jahid Iqbal Biswas
📧 Email: official.jahidbiswas@gmail.com
🌐 Portfolio: codecanit.com
💼 GitHub: https://github.com/jahidIqbalBiswas

---

🪪 License

This project is licensed under the MIT License – feel free to modify and use it for personal or commercial projects.


---

Thank you 😊
