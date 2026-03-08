import React, { useState } from 'react';
import '../App.css';
// This tells React to find the image in the assets folder
import qrCodeImage from '../assets/qrcode.jpg';

function Dashboard({ user, logout }) {
  const [cart, setCart] = useState([]);
  const [showQR, setShowQR] = useState(false);

  // បញ្ជីទំនិញដែលមាន Link រូបភាពពី Unsplash
  const coffeeItems = [
    { 
      id: 1, 
      name: "Espresso", 
      price: 2.0, 
      img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400" 
    },
    { 
      id: 2, 
      name: "Iced Latte", 
      price: 3.5, 
      img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400" 
    },
    { 
      id: 3, 
      name: "Cappuccino", 
      price: 3.0, 
      img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400" 
    },
    { 
      id: 4, 
      name: "Mocha Mix", 
      price: 4.0, 
      img: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=400" 
    },

{
      id:5,
      name:"Americano",
      price:2.0,
      img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400"

},
{
    id:6,
    name:"Iced Americano",
    price:3.0,
    img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400"
},
{
  id:7,
  name:"Caramel Macchiato",
  price:4.5,
  img:"https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=400"
},
{
  id:8,
  name:"Vanilla Latte",
  price:4.0,
  img:"https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400"
},
{
  id:9,
  name:"Flat White",
  price:3.5,
  img:"https://images.unsplash.com/photo-1534778101976-62847782c213?w=400"
},
  

  ];

  // បន្ថែមទំនិញចូលកន្ត្រក
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // បើកផ្ទាំងបង់ប្រាក់
  const handleCheckout = () => {
    if (cart.length > 0) {
      setShowQR(true);
    }
  };

  // គណនាតម្លៃសរុប
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="dashboard-container">
      {/* ផ្នែក Header */}
      <header className="dash-header">
        <h1>Welcome, {user.name} ☕</h1>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </header>

      <div className="main-content">
        {/* ផ្នែកបញ្ជីមុខម្ហូប */}
        <section className="shop-section">
          <h2>Coffee Menu</h2>
          <div className="product-grid">
            {coffeeItems.map((item) => (
              <div key={item.id} className="product-card">
                <div className="img-container">
                  <img src={item.img} alt={item.name} />
                </div>
                <h3>{item.name}</h3>
                <p className="price">${item.price.toFixed(2)}</p>
                <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ផ្នែកកន្ត្រកទំនិញ */}
        <aside className="cart-panel">
          <h3>My Cart ({cart.length})</h3>
          <div className="cart-list">
            {cart.map((item, index) => (
              <div key={index} className="cart-item-row">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="cart-footer">
            <div className="total-row">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button 
              className="checkout-btn" 
              onClick={handleCheckout} 
              disabled={cart.length === 0}
            >
              Pay Now
            </button>
          </div>
        </aside>
      </div>

      {/* ផ្ទាំង Pop-up QR Code */}
      {showQR && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Scan to Pay ☕</h2>
            <p>សូមស្កែនដើម្បីបង់ប្រាក់ចំនួន: <b>${totalPrice.toFixed(2)}</b></p>
            
            {/* ត្រូវប្រាកដថាមានរូបភាពឈ្មោះ my-qr-code.jpg ក្នុង folder public */}
            <img src={qrCodeImage} alt="QR Code" className="qr-image" style={{ width: '200px' }} />
            
            <br />
            <button className="close-btn" onClick={() => setShowQR(false)}>បិទ</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;