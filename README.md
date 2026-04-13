# PETAL & WISP • Feminine Fragrances

![Petal & Wisp Banner](https://via.placeholder.com/1200x400/f2b8c6/7a5a4a?text=PETAL+%26+WISP+•+delicate+artistry)

A fully responsive multi‑page e‑commerce website for a luxury perfume brand. Built with vanilla HTML, CSS, and JavaScript. Features a soft white, brown, and pink colour palette, persistent shopping cart, and elegant product modals.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-✓-brightgreen)

---

## 🌸 Features

- **6 fully functional pages** – Home, Shop, Product Details, About, Contact, Checkout  
- **Interactive product cards** – Click for quick‑view modal, or “BUY” to jump to checkout  
- **Dedicated product page** – Displays full fragrance description and notes  
- **Persistent shopping cart** – Saved in `localStorage` with live count badge  
- **Smooth animations** – Fade‑up effects and hover transitions  
- **Mobile‑first responsive design** – Looks beautiful on any screen  
- **No external dependencies** – Pure HTML, CSS, and vanilla JavaScript  

---

## 📁 File Structure
─ index.html # Home page (hero, categories, bestsellers)
├── shop.html # Full product catalogue
├── product.html # Individual product detail (dynamic)
├── about.html # Brand story & values
├── contact.html # Contact form + store info
├── checkout.html # Cart summary & order form
├── shared.js # Core logic (cart, modal, product data)
└── README.md

text

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/petal-wisp.git
Open the project

Navigate to the project folder

Open index.html in your favourite browser

No server, no build tools — it just works!

🎨 Customisation
Products
Edit the perfumeData array inside shared.js:

js
const perfumeData = [
  { 
    id: 'p1', 
    name: 'Velvet Peony', 
    price: 89.00, 
    notes: 'Peony · Rose · Musk', 
    desc: 'A lush floral bouquet...', 
    fullDesc: 'Top: Pink Peony...', 
    image: 'url-to-image' 
  },
  // add more fragrances
];
Colour Scheme
The palette is defined in the :root of each page’s <style>:

css
:root {
  --pink: #f2b8c6;
  --brown: #7a5a4a;
  --cream: #fff9f5;
  --white: #ffffff;
  --dark: #3a2a20;
}
Images
The demo uses royalty‑free images from Pexels. Replace the image URLs with your own product photography.

📱 Responsive Behaviour
Breakpoint	Behaviour
> 720px	Horizontal navigation, multi‑column product grid
≤ 720px	Stacked navigation, fluid typography
≤ 480px	Full‑width buttons, compact cards
✨ Credits
Fonts – Cormorant & Montserrat via Google Fonts

Icons – Font Awesome

Placeholder images – Pexels (used under free license)

📄 License
This project is open source and available under the MIT License.

📬 Contact
For inquiries, reach out at hello@petalandwisp.com or open an issue.

Whispers of bloom & grace.
Delicate fragrances for the modern woman.

text

This README provides a clear overview, setup instructions, and customization guidance, making it easy for others to understand and use the project on GitHub.
