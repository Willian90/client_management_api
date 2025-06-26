# 💧 Client API

A RESTful API built with Node.js and TypeScript for managing clients, user authentication, and API documentation using Swagger.

---

## 🚀 Technologies Used

- Node.js + Express
- TypeScript
- JWT for authentication
- TypeORM + MySQL
- Swagger UI for API docs
- dotenv for environment variables

---

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/project-name.git
cd project-name

2. Install dependencies
npm install

3. Create a .env file in the root directory:

env
PORT=your_port
JWT_SECRET=your_jwt_secret_key

DB_HOST=your_host
DB_PORT=your_port
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_NAME=your_dbname

## 🧪 Development Commands
Start in development mode:
npm run dev

Build the project:
npm run build

🧰 API Endpoints
| Method | Endpoint                | Description                  | Auth Required |
| ------ | ----------------------- | ---------------------------- | ------------- |
| POST   | `/api/v1/auth/register` | Register a new user          | ❌ No          |
| POST   | `/api/v1/auth/login`    | Log in and receive JWT token | ❌ No          |
| GET    | `/api/v1/clients`       | Get list of water clients    | ✅ Yes         |
| GET    | `/api/v1/docs`          | Swagger API documentation    | ❌ No          |

🔐 Authentication

To access protected routes, use the JWT token returned from login.
Visit /api/v1/docs
Click the Authorize button
Enter the token in this format:
Bearer eyJhbGciOiJIUzI1NiIs...



📁 Project Structure

src/
├── controllers/
├── routes/
├── middlewares/
├── entities/
├── config/
├── app.ts
├── swagger.ts

📘 Swagger Documentation
API documentation is available at:
http://localhost:3000/api/v1/docs
```
