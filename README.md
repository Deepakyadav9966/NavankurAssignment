# User Authentication & Password Reset API
This is a Node.js + Express + MongoDB API that implements user authentication and password reset functionality with JWT authentication and email-based password reset.

## 🚀 Features

1. User Signup: Register with username, email, and hashed password.
2. User Login: Authenticate users using JWT tokens.
3. Password Reset:
    1. User requests a password reset.
    2. A reset token is emailed to the user.
    3. The user can reset the password using the token.
4. Session Management:
    1. Secure JWT-based authentication.
    2. Passwords are stored using bcrypt hashing.
5. Security Measures:
    1. Input validation & sanitization.
    2. Uses environment variables for sensitive data.

## 🛠 Technologies Used
1. Node.js (Express.js)
2. MongoDB (Mongoose)
3. JWT for authentication
4. bcrypt.js for password hashing
5. nodemailer for sending password reset emails
6. dotenv for environment variables

# User Authentication API

## 🚀 Features
- **User Signup** and **Login** with JWT authentication.
- **Password Reset** via email.
- **MongoDB + Express.js + JWT + Nodemailer**

## 📌 API Endpoints

### **1️⃣ User Signup**
**POST** `/api/auth/signup`
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```
### Response:
```json
    { "message": "User created successfully" }
```

## 📌 API Endpoints

### **2️⃣ User Login**
**POST** `/api/auth/login`  
Authenticates a user and returns a JWT token.

#### **📤 Request Body (JSON)**
```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```
### Response:
```json
    { "token": "your_jwt_token"}
```

### **3️⃣ Forgot Password**
**POST** `/api/auth/forgot-password`  
Sends a password reset email with a token.

#### **📤 Request Body (JSON)**
```json
    {
    "email": "john@example.com"
    }
```
### Response
```json
    { "message": "Password reset link sent to email" }
```

### **4️⃣ Reset Password**
**POST** `/api/auth/reset-password/:token`  
Allows the user to reset their password using the token.

#### **📤 Request Body (JSON)**
```json
{
  "password": "newSecurePassword"
}
```

### Response
```json
    { "message": "Password reset successful!" }
```
