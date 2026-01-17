# Kape-Mmakwany Unified Hospitality Platform 🏨

![Kape-Mmakwany Banner](client/public/images/branding/kape-logo.png)

> A premier, unified hospitality management platform seamlessly integrating **Kape Samaritan Guest House** and **MMAKWANY Private Rental**.

## 🚀 Overview

The **Kape-Mmakwany Platform** is a modern, full-stack web application designed to manage the operations of two distinct properties under one roof. It provides a luxurious, dual-brand booking experience for guests and powerful, role-specific dashboards for staff members.

Built with the **MERN Stack** (Next.js Frontend + Express Backend), it prioritizes performance, SEO, and scalability.

## ✨ Key Features

### 🌍 Public Interface
- **Unified Booking Engine**: Centralized availability search and booking for both properties.
- **Dual-Brand Experience**:
  - **Kape Samaritan**: Warm, inviting UI for hotel rooms, restaurant, and halls.
  - **MMAKWANY**: Exclusive, serene UI for private villa rentals.
- **Interactive Guides**: Local attraction guides and service previews.

### 👥 User Portal
- **Dashboard**: View active and past bookings.
- **Profile Management**: Manage personal details and notification preferences.
- **Reviews**: Submit and manage reviews for stays.

### 🛡️ Admin & Operations
- **Super Admin Dashboard**: Revenue analytics, staff management, and system-wide reports.
- **Reception Console**: Quick check-in/out flows, guest management, and calendar views.
- **Kitchen Display System (KDS)**: Real-time order tracking for the restaurant.
- **Housekeeping View**: Mobile-first interface for staff to update room status (Clean/Dirty) on the go.

### 💳 Integrations
- **Payments**: Simulated M-Pesa STK Push flow.
- **Invoicing**: Auto-generated, printable PDF invoices.

---

## 🛠️ Technology Stack

### Frontend (Client)
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS (CSS Variables, Responsive Design)
- **Icons**: Phosphor Icons / Lucide React

### Backend (Server)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Real-time**: Socket.io
- **Auth**: JWT (JSON Web Tokens) with Cookies

---

## 📂 Project Structure

```bash
├── client/                 # Next.js Frontend Application
│   ├── src/app/           # App Router Pages & Layouts
│   ├── public/            # Static Assets (Images, Logos)
│   └── ...
├── server/                 # Express Backend API
│   ├── src/models/        # Mongoose Database Schemas
│   ├── src/routes/        # API Endpoints
│   └── ...
└── DEPLOYMENT.md           # Deployment Guide
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas)

### 1. Clone the Repository
```bash
git clone https://github.com/Akubrecah/KAPE-SAMARITAN-MMAKWANY-.git
cd KAPE-SAMARITAN-MMAKWANY-
```

### 2. Backend Setup
```bash
cd server
npm install
# Create .env file with: PORT=5000, MONGO_URI=..., JWT_SECRET=...
npm run dev
```

### 3. Frontend Setup (Next.js)
Open a new terminal:
```bash
cd client
npm install
# Create .env.local if needed
npm run dev
```

Visit `http://localhost:3000` to view the application.

### 3b. Frontend Setup (Vanilla HTML/CSS/JS)
**Recommended for current development phase.**
If you are working on the Vanilla HTML version in `client-html`:

**Option A (VS Code Live Server)**:
- Right-click `index.html` or `mmakwany-home.html` in VS Code and select "Open with Live Server".

**Option B (Python Simple Server)**:
```bash
cd client-html
python3 -m http.server 8000
```
Visit `http://localhost:8000` in your browser.

### 4. Seed Default Data (Users & Roles)
Run this command in the `server` directory to create default Admin, Reception, Kitchen, and Housekeeping accounts:
```bash
npm run data:import
```

---

## 🔑 Default Credentials

Use these accounts to test the **Role-Based Redirection** and different dashboards:

| Role | Email | Password | Dashboard |
| :--- | :--- | :--- | :--- |
| **Super Admin** | `admin@kape.com` | `123456` | `/admin/super` |
| **Receptionist** | `reception@kape.com` | `123456` | `/admin/reception` |
| **Kitchen/Chef** | `kitchen@kape.com` | `123456` | `/admin/kitchen` |
| **Housekeeping** | `clean@kape.com` | `123456` | `/admin/housekeeping` |
| **Guest** | `guest@gmail.com` | `123456` | `/dashboard` |

---

## 📦 Deployment

This project includes a comprehensive deployment guide.
Please refer to [DEPLOYMENT.md](./DEPLOYMENT.md) for step-by-step instructions on deploying to **Vercel** (Frontend) and **Render** (Backend).

---

## 📄 License

This project is proprietary software developed for Kape Samaritan & MMAKWANY.
All rights reserved.

---

*Built with ❤️ by Akubrecah Tech Hub*
