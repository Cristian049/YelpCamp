# YelpCamp

YelpCamp is a full-stack web application that allows users to explore, create, and review campgrounds. It is built using Node.js, Express, MongoDB, and EJS, and includes features like authentication, image uploads, and data validation.

---

## 🔍 Features

- ✅ User authentication and authorization (login, logout, route protection)
- ✅ Create, edit, delete campgrounds
- ✅ Upload images with Cloudinary
- ✅ Add and delete reviews
- ✅ Validate data with Joi
- ✅ Interactive maps using Mapbox

---

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS, Bootstrap
- **Database**: MongoDB, Mongoose
- **Authentication**: Passport.js
- **Image Upload**: Cloudinary, Multer
- **Validation**: Joi
- **Other**: Mapbox, dotenv

---

## 🚀 Local Setup

1. **Clone the repository**:

```bash
git clone https://github.com/Cristian049/YelpCamp.git
cd YelpCamp
```

2. **Install dependencies**:

```bash
npm install
```

3. **Create a `.env` file** in the root directory with the following content:

```env
DB_URL=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_api_secret
SECRET=your_session_secret
```

4. **Start the application**:

```bash
node app.js
```

The app will run at: `http://localhost:3000`

---

## 🗂️ Project Structure

```
YelpCamp/
│
├── models/           # Mongoose models
├── routes/           # Express routes
├── views/            # EJS templates
├── public/           # Static files (CSS, JS)
├── controllers/      # Route logic
├── utils/            # Utility functions
├── middleware.js     # Custom middleware
├── app.js            # Main Express app
└── seeds/            # DB seeding scripts
```

---


## 📄 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch:

```bash
git checkout -b feature/feature-name
```

3. Make your changes and commit them:

```bash
git commit -m "Add a new feature"
```

4. Push to your fork:

```bash
git push origin feature/feature-name
```

5. Open a Pull Request

---

Thanks for checking out this project!
