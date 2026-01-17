# Deployment Plan for Kape-Mmakwany Platform

This guide outlines the steps to deploy the Unified Hospitality Platform to a production environment.

## Architecture Overview
- **Frontend (Client)**: Next.js application. Best deployed on **Vercel** (creators of Next.js) or **Netlify**.
- **Backend (Server)**: Node.js/Express API. Best deployed on **Render**, **Railway**, or **Heroku**.
- **Database**: MongoDB. Best hosted on **MongoDB Atlas**.

---

## Prerequisite: Environment Variables
Ensure you have the following secrets ready for production:

### Backend Secrets
- `PORT`: (Set automatically by host)
- `MONGO_URI`: Connection string from MongoDB Atlas (Production Cluster).
- `JWT_SECRET`: A strong, random string for signing tokens.
- `NODE_ENV`: Set to `production`.

### Frontend Secrets
- `NEXT_PUBLIC_API_URL`: The URL of your deployed Backend (e.g., `https://api.kape-mmakwany.com`).

---

## Step 1: Database (MongoDB Atlas)
1.  Log in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2.  Create a new **Cluster** (Shared/Free tier is fine for starting).
3.  Create a **Database User** with read/write access.
4.  In **Network Access**, allow access from anywhere (`0.0.0.0/0`) or whitelist your backend host's IP.
5.  Get the connection string: `mongodb+srv://<username>:<password>@cluster0.mongodb.net/samaritan_prod`.

## Step 2: Backend Deployment (Render.com Recommended)
1.  Push your latest code to GitHub.
2.  Log in to [Render](https://render.com/).
3.  Click **New +** -> **Web Service**.
4.  Connect your GitHub repository.
5.  **Settings**:
    -   **Root Directory**: `server`
    -   **Build Command**: `npm install && npm run build` (Ensure your package.json has a build script, e.g., `tsc`)
    -   **Start Command**: `npm start`
6.  **Environment Variables**:
    -   Add `MONGO_URI`, `JWT_SECRET`, `NODE_ENV=production`.
7.  Deploy.
8.  **Copy the Service URL** (e.g., `https://samaritan-server.onrender.com`). You will need this for the frontend.

## Step 3: Frontend Deployment (Vercel Recommended)
1.  Log in to [Vercel](https://vercel.com/).
2.  Click **Add New...** -> **Project**.
3.  Import your GitHub repository.
4.  **Content Configuration**:
    -   **Framework Preset**: Next.js
    -   **Root Directory**: `client` (Click "Edit" and select the `client` folder).
5.  **Environment Variables**:
    -   `NEXT_PUBLIC_API_URL`: Paste your Backend URL from Step 2 (e.g., `https://samaritan-server.onrender.com`). **Note**: Ensure no trailing slash.
6.  Click **Deploy**.

## Step 4: Final Verification
1.  Visit your Vercel URL (e.g., `kape-mmakwany.vercel.app`).
2.  Test **Search**: Ensure it returns results (connects to DB).
3.  Test **Login/Register**: Create a real user.
4.  Test **Booking Flow**: Complete a booking to verify writes.
5.  Test **Admin**: Log in as admin and check the dashboard.

---

## Domain Configuration (Optional)
To make the site professional (e.g., `www.kape-mmakwany.com`):
1.  Buy a domain from Namecheap/GoDaddy.
2.  In Vercel **Settings > Domains**, add your domain.
3.  Follow instructions to update DNS records (A record or CNAME).
