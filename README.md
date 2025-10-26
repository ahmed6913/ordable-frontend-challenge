# 🧩 Ordable Storefront – Frontend Developer Technical Challenge

A clean and functional eCommerce storefront built using **Next.js**, demonstrating API integration, cart management, and order/ tracking flows.  
This project focuses on frontend architecture, UI/UX, and efficient state handling.

---

## 🚀 Features

### 🛍 Storefront
- Products fetched from a **fake external products API** *(used for demonstration purposes)* ('https://fakestoreapi.com/products')
- View product details and pricing
<img width="1904" height="917" alt="image" src="https://github.com/user-attachments/assets/326f0e88-25bd-4471-9843-2adb503c18df" />

- Add items to cart
<img width="1897" height="935" alt="image" src="https://github.com/user-attachments/assets/b1c92cd5-adf9-47c3-9eee-263cca3f4653" />


### 🧾 Order Placement Flow
- Review items added to cart
<img width="431" height="423" alt="image" src="https://github.com/user-attachments/assets/a393ca8f-1359-453d-8123-f99f2fe44c62" />

<img width="1064" height="658" alt="image" src="https://github.com/user-attachments/assets/3473ec99-d4ef-4d51-8571-52ebad443117" />

- Enter basic customer details at checkout
<img width="1116" height="893" alt="image" src="https://github.com/user-attachments/assets/c713d1f5-4a3c-4bac-977c-efb6f2139495" />
<img width="750" height="914" alt="image" src="https://github.com/user-attachments/assets/a05bf8b3-50ab-40f6-b791-32f222db2cf8" />




- Submit an order request (structure prepared for Ordable API integration)
- Returns a mock Order ID upon success (Data will be coming from local storeage)

### 📦 Order Tracking Flow
- Enter order number / tracking ID
<img width="897" height="616" alt="image" src="https://github.com/user-attachments/assets/0438dca7-e45e-4326-91d8-e6a76383c2a8" />

- Fetch mock tracking response from localstorage
<img width="906" height="614" alt="image" src="https://github.com/user-attachments/assets/8cc18a19-bc8d-4abe-963c-e6373e7032a9" />

- View order status and details

---

## 🧠 Tech Stack

| Category | Technology |
|----------|-------------|
| Framework | Next.js (JavaScript) |
| Styling | Tailwind CSS |
| API Calls | Fetch API  |
| State Management | Local State + Local Storage |
| Cart Persistence | Browser Local Storage |
| Deployment | Local Development (Vercel) |

---

## 📌 How the App Works

✅ Place an Order

- Browse products on the Home page (fetched from a fake API)
- Add items to the cart
- Cart data is stored in Browser Local Storage

📦 Proceed to Checkout

- Submit customer info to generate a mock Order ID

🔍 Track an Order

- Navigate to Track Order
- Enter a mock order ID
- View simulated order tracking details


## 🔧 Installation & Running Locally

Follow the steps below to set up and run the project on your local machine.

### ✅ Prerequisites

Ensure you have installed:

- **Node.js** v16 or newer  
- **npm** (or yarn/pnpm)  
- **Git**

---

### 📥 1. Clone the Repository

```bash
git clone https://github.com/ahmed6913/ordable-frontend-challenge.git
cd ordable-frontend-challenge
npm install
npm run dev (will start running or localhost)


