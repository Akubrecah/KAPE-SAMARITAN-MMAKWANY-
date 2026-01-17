# Part 1: Product Requirements Document (PRD)

**Project Name:** Kape-Mmakwany Unified Hospitality Platform
**Version:** 2.0 (Final Draft)
**Scope:** A centralized web and mobile-responsive platform to manage operations for two distinct properties: **Kape Samaritan Guest House** (Commercial/Events/Dining) and **MMAKWANY** (Private Airbnb Rental).

---

## 1. Executive Summary

The platform serves as a direct-booking engine and operational management tool. It eliminates the need for third-party commissions (like Booking.com) by handling direct reservations, event scheduling, and food service. It is designed to handle two different business models simultaneously: the high-turnover nature of a Guest House and the exclusive, low-turnover nature of an Airbnb.

---

## 2. User Roles & Permissions

### A. Guest (End User)
* **Access:** Public Website & User Dashboard.
* **Actions:** Browse both properties, search availability, book rooms/halls, order food (Kape only), pay online, view booking history, leave reviews.

### B. Super Admin (Owner)
* **Access:** Full System Control.
* **Actions:** View global revenue, manage staff accounts, override prices, block dates, access financial reports for both properties.

### C. Receptionist (Kape Samaritan Front Desk)
* **Access:** Operations Dashboard (Restricted).
* **Actions:**
  * **Check-In/Out:** Process arrivals and departures.
  * **Walk-ins:** Create bookings for offline guests.
  * **Guest Services:** Input food orders for guests, extend stays.
  * **Cash Handling:** Record cash payments and print receipts.
  * *Restriction:* Cannot view global revenue or delete booking history.

### D. Kitchen Staff
* **Access:** Kitchen Display System (KDS).
* **Actions:** View active food orders, mark orders as "Cooking" or "Ready," update menu item availability (e.g., mark "Chicken" as Out of Stock).

### E. Housekeeping/Caretaker
* **Access:** Mobile View.
* **Actions:** View list of "Dirty" rooms, mark rooms as "Clean/Ready."

---

## 3. Functional Modules

### Module 1: The Multi-Property Landing
* **Brand Split:** The homepage must distinctly separate the two brands.
  * *Path A:* Kape Samaritan (Focus: Events, Dining, Affordable Stays).
  * *Path B:* MMAKWANY (Focus: Luxury, Privacy, Entire Home).
* **Unified Search:** A bar allowing users to search availability across both properties by date.

### Module 2: Kape Samaritan Operations (Complex)
* **Room Booking:** Inventory-based (e.g., 10 Standard Rooms). Real-time countdown.
* **Conference Halls:**
  * **Booking Units:** Hourly or Daily.
  * **Add-ons:** Projectors, PA Systems, Catering Packages.
* **Restaurant:**
  * **Digital Menu:** Categories (Starters, Mains, Drinks).
  * **Delivery Logic:** Room Service (requires Room #) vs. Local Delivery (requires Address/Pin).

### Module 3: MMAKWANY Operations (Simple)
* **House Booking:** Calendar-based. If the main house is booked, the dates are blocked entirely.
* **Security Deposit:** Logic to hold a refundable deposit (optional feature).

### Module 4: Payments & Finance
* **M-Pesa Integration:**
  * **STK Push:** Prompt user's phone for PIN.
  * **C2B:** Verification of manual Paybill payments.
* **Invoicing:** Auto-generation of PDF invoices with the specific property's logo (Kape logo vs. MMAKWANY logo).

---

## 4. Technical Requirements
* **Platform:** Web (Next.js/React), Mobile Responsive.
* **Database:** PostgreSQL (Relational integrity for bookings).
* **Real-Time:** WebSockets (Socket.io) for instant kitchen order alerts and new booking notifications.
* **Security:** SSL Encryption, Role-Based Access Control (RBAC).

---

# Part 2: Site Map

### A. Public Facing (Guest Experience)
1. **Home / Landing Page**
   * Hero Section: Split Screen (Kape Samaritan vs. MMAKWANY)
   * Global Availability Search Bar
   * Featured Highlights (Best Food, Hall Capacity)
   * Footer (Contact, Socials, Policies)

2. **Property A: Kape Samaritan Section**
   * **Home:** Overview, Highlights.
   * **Rooms Listing:** Standard, Deluxe, Twin (Filter by Date/Price).
     * *Room Detail Page:* Photos, Amenities, "Book Now" button.
   * **Conference Halls:**
     * *Hall Detail Page:* Capacity, Equipment list, "Request Quote" or "Book Slot".
   * **Restaurant (Online Ordering):**
     * Menu Categories (Breakfast, Lunch, Dinner).
     * Cart / Checkout Page.

3. **Property B: MMAKWANY Section**
   * **Home:** Aesthetic Gallery, Experience Description.
   * **Accommodation:**
     * *House Detail Page:* Full amenities, House Rules, Calendar Availability.
   * **Local Guide:** Things to do around MMAKWANY.

4. **Checkout & Payment**
   * **Booking Summary:** (Dates, Guests, Total Cost).
   * **Guest Details Form:** (Name, ID, Phone).
   * **Payment Gateway:** M-Pesa / Card Toggle.
   * **Confirmation Page:** "Booking Successful" + Download Receipt.

### B. User Portal (Logged In Guest)
1. **My Dashboard**
   * Active Bookings (Upcoming).
   * Booking History (Past).
2. **Profile Settings**
   * Edit Info (Phone, Email).
   * Change Password.
3. **My Reviews**
   * Pending Reviews (Rate past stays).

### C. Admin & Staff Portal (Backend)
*Login Page (Role-Based Redirection)*

1. **Super Admin Dashboard (Owner)**
   * **Overview:** Total Revenue, Occupancy Rate (Both properties).
   * **Financial Reports:** Filter by Property, Date, Payment Method.
   * **User Management:** Add/Edit Staff, Ban Guests.
   * **Settings:** Global Config (Tax rates, Logos).

2. **Receptionist Dashboard (Kape)**
   * **Front Desk View:**
     * Arrivals Today.
     * Departures Today.
     * In-House Guest List.
   * **Calendar View:** Drag-and-drop booking interface.
   * **Create Booking:** Wizard for Walk-ins/Phone reservations.
   * **Room Status:** View Clean/Dirty status.

3. **Kitchen Dashboard (Tablet View)**
   * **Live Orders Queue:** Incoming orders (Sound Alert).
   * **Order History:** Past 24 hours.
   * **Menu Manager:** Toggle items "Out of Stock."

4. **Housekeeping View (Mobile)**
   * **Task List:** List of dirty rooms.
   * **Status Update:** Toggle "Mark as Clean."

5. **Inventory/Property Manager**
   * **Kape Listings:** Edit Room prices, photos, descriptions.
   * **MMAKWANY Listings:** Edit House availability, seasonal rates.
   * **Hall Listings:** Manage hourly rates and equipment inventory.
