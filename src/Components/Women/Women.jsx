import React, { useState } from "react";
import './women.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MenClothing = ({ addToCart }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Kurti", price: 799, originalPrice: 999, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/FEBRUARY/22/CpoiBjHY_52762710ab64429b986220006cc5ac78.jpg" },
    { id: 2, name: "Jeans", price: 1299, originalPrice: 1799, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/30618417/2024/9/26/c0973053-c933-433e-bb44-c0faac86b7291727337275318-Levis-Women-Jeans-8281727337274794-1.jpg" },
    { id: 3, name: "Jacket", price: 2499, originalPrice: 2999, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19540790/2023/10/13/05763d2a-5998-4ecd-9adf-a078927739231697190050643-MANGO-Women-Pure-Cotton-Washed-Denim-Jacket-51697190050158-1.jpg" },
    { id: 4, name: "Hoodie", price: 1899, originalPrice: 2299, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26944038/2025/1/4/ffe1af90-1222-4892-bf07-e05093ad91451735966183281-Leotude-Women-Graphic-Printed-Hooded-Fleece-Loose-Fit-Sweats-1.jpg" },
    { id: 5, name: "Sweater", price: 999, originalPrice: 1299, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/FEBRUARY/15/HAOm5EcK_9ba69feeb4494e3484f99bedffa6b9d0.jpg" },
    { id: 6, name: "Ethnic Dress", price: 1599, originalPrice: 1999, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7706979/2018/12/17/2f5e3acd-2f2d-4685-921c-c819780750a61545031911102-Ahalyaa-Women-Kurtas-5441545031909608-1.jpg" },
    { id: 7, name: "Saree", price: 2499, originalPrice: 2999, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/3/BC6vy0t8_1d666bd8190c42568ca51090b1aa0376.jpg" },
    { id: 8, name: "Palazzo Pants", price: 899, originalPrice: 1199, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MARCH/6/AyFaCoaq_b4351058a1da4fa7a67cf89baabb7fd4.jpg" },
    { id: 9, name: "Skirt", price: 999, originalPrice: 1299, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/21/6w0GphYX_3a3d2ad3bbe34b40ac376a06e52e7ac0.jpg" },
    { id: 10, name: "Blazer", price: 3499, originalPrice: 3999, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/13/1U4zFyqq_db4ad1d39de64c27b677bcd4e5c12ce0.jpg" },
    { id: 11, name: "Gown", price: 4999, originalPrice: 5999, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19735814/2022/8/30/d711ad13-c9c9-43dc-a750-8a51851801b81661868580048BurgundyGeorgetteTieredDobbyMaxiDress1.jpg" },
    { id: 12, name: "Leggings", price: 699, originalPrice: 999, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MARCH/11/Ye182WsG_c99e4133224448939b33244606ff824c.jpg" },
    { id: 13, name: "Lehenga", price: 5999, originalPrice: 6999, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28459142/2024/9/7/3c6b64d6-da7e-418d-9a79-d2130ff7e8691725698973091-Sangria-Women-Kurta-Sets-841725698972111-1.jpg" },
    { id: 14, name: "Anarkali Suit", price: 3499, originalPrice: 3999, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29096468/2024/4/22/3119e1e5-2faa-460d-8314-fe915334f2621713760148920AnoukWomenFloralKeyholeNeckFlaredSleevesThreadWorkFloralKurt7.jpg" },
  ]);


  const [priceRange, setPriceRange] = useState([100, 7000]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [bag, setBag] = useState([]);

  // Sorting function (Corrected)
  const handleSort = (order) => {
    const sortedProducts = [...products].sort((a, b) =>
      order === "low-to-high" ? a.price - b.price : b.price - a.price
    );
    setProducts([...sortedProducts]); // Creating a new reference
  };

  const handlePriceChange = (event) => {
    setPriceRange([100, event.target.value]);
  };

  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  const addToBag = (product) => {
    addToCart(product); // Call the function passed from the parent
    closeModal();
  };



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }


  return (
    <>
      <div className="women-slider-container">
        <Slider {...settings}>
          <div className="slider-item">
            <img
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/3f6d1e2a-5ef6-4921-be5d-443a11b11d801651599573985-Dresses_Desk.jpg"
              alt="Slide 1"
            />
          </div>
          <div className="slider-item">
            <img
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/f1874a9d-c423-44d3-a529-6c63521d6f991650181498608-Sarees_Desk.jpg"
              alt="Slide 2"
            />
          </div>
          <div className="slider-item">
            <img
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/7feef02b-0072-4c1b-b83d-4e46a5d93c6b1649530621162-Sangria_Desk_Banner.jpg"
              alt="Slide 3"
            />
          </div>
          <div className="slider-item">
            <img
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/38f37101-f335-44be-af8f-5d53de15c75e1649530843725-Casual---Sports-Shoes_Desk--1-.jpg"
              alt="Slide 4"
            />
          </div>
        </Slider>
      </div>
      <div className="men-clothing-section">
        <h2>Women's Clothing</h2>
        <div className="sidebar">
          <h3>Filter by Price</h3>
          <input
            type="range"
            min="200"
            max="7000"
            value={priceRange[1]}
            onChange={handlePriceChange}
          />
          <p>Price: ₹{priceRange[0]} - ₹{priceRange[1]}</p>
          <h3>Sort by Price</h3>
          <button onClick={() => handleSort("low-to-high")}>Low to High</button>
          <button onClick={() => handleSort("high-to-low")}>High to Low</button>
        </div>
        <div className="men-product-grid">
          {products
            .filter(product => product.price >= priceRange[0] && product.price <= priceRange[1])
            .map((product) => (
              <div key={product.id} className="men-product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="price">
                  ₹<span className="final-price">{product.price}</span>
                  <span className="original-price"> ₹{product.originalPrice}</span>
                </p>
                <button className="buy-btn" onClick={() => openModal(product)}>Buy Now</button>
              </div>
            ))}
        </div>
        {/* // onClick={() => addToCart(product) */}
        {selectedProduct && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="close-btn" onClick={closeModal}>X</button>
              <img src={selectedProduct.image} alt={selectedProduct.name} className="product-image" />
              <h2>{selectedProduct.name}</h2>
              <p className="price">Price: ₹{selectedProduct.price} <span className="original-price">₹{selectedProduct.originalPrice}</span></p>
              <button className="add-to-bag" onClick={() => addToBag(selectedProduct)}>Add to Bag</button>
            </div>
          </div>
        )}



      </div>
    </>
  );
};

export default MenClothing;
