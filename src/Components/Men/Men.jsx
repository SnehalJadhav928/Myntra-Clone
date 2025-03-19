import React, { useState } from "react";
import './men.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MenClothing = ({ addToCart }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "T-Shirt", price: 799, originalPrice: 999, 
      image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/OCTOBER/17/5DdT677T_05dccce287f644d8b282eae7bdd7d3df.jpg",
      description: "Soft cotton, round neck." },

    { id: 2, name: "Jeans", price: 1299, originalPrice: 1799, 
      image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26002256/2023/11/23/89539e69-aede-4179-980a-861de6e9bd061700728491396FREAKINSMenBlackStraightFitHigh-RiseJeans1.jpg",
      description: "Slim fit, stretchable denim." },

    { id: 3, name: "Jacket", price: 2499, originalPrice: 2999, 
      image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25462616/2023/10/12/4953c3b2-1241-4a57-aff8-e461761f5c351697115629233RARERABBITMenPinkTailoredJacketwithEmbroidered6.jpg",
      description: "Warm, stylish, lightweight." },

    { id: 4, name: "Hoodie", price: 1899, originalPrice: 2299, 
      image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26855156/2024/1/10/d78c2f8e-7f37-4f4c-b8f2-c3e789c89ddc1704862159687FUGAZEEMenGreenPrintedHoodedSweatshirt1.jpg",
      description: "Cozy fleece, hooded design." },

    { id: 5, name: "Sweater", price: 999, originalPrice: 1299, 
      image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/28/vu4JHyIX_11007a62c37341ff8c8ea23f87992c6f.jpg",
      description: "Knitted, warm, full sleeves." },

    { id: 6, name: "Casual Shirt", price: 1199, originalPrice: 1599, 
      image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/OCTOBER/4/yDhxSvEd_8d1b9b4a065c49999569381ce69f80c4.jpg",
      description: "Cotton fabric, casual wear." },

    { id: 7, name: "Formal Shirt", price: 1399, originalPrice: 1799, 
      image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/12/N9JXwusW_527a68db55844f32b7abfa2d18b2b77a.jpg",
      description: "Classic fit, office wear." },

    { id: 8, name: "Track Pants", price: 899, originalPrice: 1199, 
      image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16740826/2024/5/6/1d03f250-068b-43eb-aafa-f59662b9945f1714979269335-ADIDAS-Men-Black-Solid-Sereno-3-Striped-Detail-Aeroready-Tra-1.jpg",
      description: "Comfortable, stretchable fabric." },

    { id: 9, name: "Shorts", price: 599, originalPrice: 799, 
      image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21262390/2023/2/15/d988426b-f12f-4f3f-bf45-6120853e20ac1676464158645-ADIDAS-Men-Shorts-2391676464157940-1.jpg",
      description: "Breathable, perfect for summer." },

    { id: 10, name: "Blazer", price: 3499, originalPrice: 3999, 
      image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10777836/2019/10/16/d9ae4409-16a9-4f7e-83b1-2022d3bf353c1571215965504-MANQ-Men-Blazers-6291571215962908-1.jpg",
      description: "Elegant, tailored fit." },

    { id: 11, name: "Suit", price: 4999, originalPrice: 5999, 
      image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/FEBRUARY/1/RtVnqb5O_74472771982c4e45a7ac719961a49b95.jpg",
      description: "Premium fabric, party wear." },

    { id: 12, name: "Cargo Pants", price: 1499, originalPrice: 1899, 
      image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/FEBRUARY/21/qn59U6VQ_fd4bae25ebd144a8ac97dabad141c6f0.jpg",
      description: "Multiple pockets, rugged look." },

    { id: 13, name: "Kurta", price: 1299, originalPrice: 1599, 
      image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/31035727/2025/2/25/26f039ed-60c1-4bc0-9157-70c5d1e81e481740460771358-FILORI-Men-Woven-Design-Mini-Checks-Pure-Cotton-Kurta-165174-1.jpg",
      description: "Ethnic wear, soft cotton." },
]);

  const [priceRange, setPriceRange] = useState([100, 7000]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  // const [bag, setBag] = useState([]);

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
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/b54399f0-6ed5-44b3-84b0-e9d5c1657aaa1651599573991-CR7_Desk_Baner.jpg"
              alt="Slide 1"
            />
          </div>
          <div className="slider-item">
            <img
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/846beb79-ada7-48c3-a6c6-4448f276c2111651599573979-Sports-Shoes_Desk.jpg"
              alt="Slide 2"
            />
          </div>
          <div className="slider-item">
            <img
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/eb6408d8-b413-49f7-8525-317fddba53821650180659351-Casual---Sports-Shoes_Desk.jpg"
              alt="Slide 3"
            />
          </div>
          <div className="slider-item">
            <img
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/a53b7f7e-37ab-4319-a1b4-5d9c0cca68601650180659343-Lancer_Desk.jpg"
              alt="Slide 4"
            />
          </div>
        </Slider>
      </div>

      {/* ------------------------------------------------------------------- */}
    <h1 className="catogries_heading">Categories To Bag</h1>
      <div className="catogries">
        
        <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/89f1bd9d-3a28-456d-888a-beff717a06f81594222908155-Shirts.jpg" alt="" />
        <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/9ff1f34e-9242-47fd-9566-e7d7a5c240511594222908483-T-shirt.jpg" alt="" />
        <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg" alt="" />
        <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/2bac5e2d-337b-42c0-88c7-3d4e2dc464141594222908262-Shorts-_-Trousers.jpg" alt="" />
        <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/ae14f627-9fd9-41ce-80a4-f107c316c7eb1594222907625-Casual-shoes.jpg" alt="" />
        <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/f0f9b81a-b9d5-4b8b-94d5-ea878fa9b18e1594222834121-Infant-Essential.jpg" alt="" />
      </div>
      {/* ------------------------------------------------------------------- */}
      <div className="men-clothing-section">
        <h2>Men's Clothing</h2>
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
                  <span className="original-price"> ₹{product.originalPrice}</span><br/>
                  <span className="desc">{product.description}</span>
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
              <span className="desc">{selectedProduct.description}</span>
              <button className="add-to-bag" onClick={() => addToBag(selectedProduct)}>Add to Bag</button>
            </div>
          </div>
        )}



      </div>
    </>
  );
};

export default MenClothing;
