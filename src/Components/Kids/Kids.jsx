import React, { useState } from "react";
import './kids.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Kids = ({ addToCart }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Kids T-Shirt", price: 499, originalPrice: 699, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28469012/2024/3/23/68247cf9-2698-4764-a2c9-b22f3ca16a6e1711203280354PepeJeansBoysPureCottonPocketsT-shirt1.jpg" },
    { id: 2, name: "Kids Jeans", price: 899, originalPrice: 1299, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20838898/2022/11/19/4b2d5b16-2321-40a5-a095-69e64e345c831668878620772CASHEDMidWaistSlimFitDenim1.jpg" },
    { id: 3, name: "Kids Jacket", price: 1599, originalPrice: 1999, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/31986047/2024/12/16/5e532c9b-0866-4d5f-b55a-415899320d861734368428459RAREONESBoysCamouflageLonglineTailoredJacket1.jpg" },
    { id: 4, name: "Kids Hoodie", price: 1299, originalPrice: 1599, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/DECEMBER/6/6fiPuyjh_5bd0533b89964e0595cfc12ef5c82972.jpg" },
    { id: 5, name: "Kids Sweater", price: 799, originalPrice: 999, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21639510/2023/1/20/cb70487c-8b66-4f8f-98f3-6ca6611db0c41674213420245AngelRocketGirlsGreenCableKnitPullover1.jpg" },
    { id: 6, name: "Kids Casual Shirt", price: 999, originalPrice: 1299, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28469240/2024/3/23/ba3a0440-64c7-42f6-b110-104e7b2242fd1711201574426PepeJeansBoysOpaqueStripedCasualShirt1.jpg" },
    { id: 7, name: "Kids Formal Shirt", price: 1099, originalPrice: 1399, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26937620/2024/1/17/bd794005-7857-4a68-b486-d9bf18b4960f1705439224473BAESDBoysWhiteModernOpaqueFormalShirt1.jpg" },
    { id: 8, name: "Kids Track Pants", price: 699, originalPrice: 999, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20294922/2022/10/14/85951aa7-3761-4d01-b912-d9fe427a7b481665743789542-Nap-Chief-Boys-Blue--Black-Printed-Cotton-Joggers-1031665743-4.jpg" },
    { id: 9, name: "Kids Shorts", price: 499, originalPrice: 699, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18682284/2022/6/9/e178786f-0e3e-4293-98e2-985feff73a921654764582646GirlsShortiesBeigeandBlackPackof21.jpg" },
    { id: 10, name: "Kids Blazer", price: 2499, originalPrice: 2999, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/8/14/4ab58880-0196-4c41-9fd6-66e5bf4ace051565804931177-1.jpg" },
    { id: 11, name: "Kids Suit", price: 3499, originalPrice: 4299, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24188502/2024/11/20/11d75b5e-1ffd-4632-a8e4-2bb87258b1671732089373741-Bitiya-by-Bhama-Girls-Pink-Floral-Printed-Angrakha-Gotta-Pat-1.jpg" },
    { id: 12, name: "Kids Cargo Pants", price: 999, originalPrice: 1299, image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/17/YwAg4XfE_a12624f228ee4f3d9c3fc8dc5aa26bbc.jpg" },
    
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
              src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/09f0df54-6f8f-4bb0-a4b9-3b374d4538561649782019495-Top-Brands-2_Desk_Banner.jpg"
              alt="Slide 1"
            />
          </div>
          <div className="slider-item">
            <img
              src="https://assets.myntassets.com/f_webp,w_634,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/a606c305-a23f-4fe3-a630-343ced4a10261649782019470-Kids-Wear_Desk_Banner.jpg?v1"
              alt="Slide 2"
            />
          </div>
          <div className="slider-item">
            <img
              src="https://assets.myntassets.com/f_webp,w_634,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/b97efc90-2359-48ea-bf74-9c72d552fdef1649782019503-T-Shirts-_-Shorts_Desk_Banner.jpg"
              alt="Slide 3"
            />
          </div>
          <div className="slider-item">
            <img
              src="https://assets.myntassets.com/f_webp,w_634,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/12/7f5e46bd-da64-489b-bbab-ebf67b12f8091649782019457-Innerwear_Desk_Banner.jpg"
              alt="Slide 4"
            />
          </div>
        </Slider>
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

export default Kids;
