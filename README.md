## Mini Backend API 🚀

A RESTful CRUD API built with Node.js, Express & MongoDB Atlas for managing employee data.

### ✨ Features
- **Complete CRUD Operations**: Create, Read, Update, Delete employee records
- **MVC Architecture**: Organized code with `controllers`, `models`, `routes`
- **Cloud Database**: MongoDB Atlas integration using Mongoose
- **Environment Variables**: Secure config with dotenv
- **Production Ready**: Deployed on Render

### 🛠️ Tech Stack
| Technology | Use |
| --- | --- |
| Node.js | JavaScript Runtime |
| Express.js | Web Framework |
| MongoDB Atlas | Cloud Database |
| Mongoose | ODM for MongoDB |
| Render | Hosting Platform |

### 📌 API Endpoints
| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/employ` | Get all employees |
| POST | `/api/employ` | Add a new employee |
| PUT | `/api/employ/:id` | Update employee by ID |
| DELETE | `/api/employ/:id` | Delete employee by ID |

### 💡 Key Learnings
1. Building scalable backend with proper folder structure
2. Connecting Node.js app to MongoDB Atlas
3. Managing secrets using `.env` files
4. **Debugging Production**: Solved `querySrv ENOTFOUND` error by understanding the difference between `mongodb+srv://` and standard `mongodb://` connection strings

### ⚙️ Run Locally
1. Clone the repo:
   ```bash
   git clone https://github.com/swatikashyap0122/mini-backend-api.git
