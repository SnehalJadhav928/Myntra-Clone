import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './hero.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Hero() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const [images, setimages] = useState([])

    const getdata = async () => {
        try {
            const menResponse = await axios.get('https://fakestoreapi.com/products/category/men%27s%20clothing');
            const womenResponse = await axios.get('https://fakestoreapi.com/products/category/women%27s%20clothing');
            const combined = [...menResponse.data, ...womenResponse.data];
            setimages(combined.slice(0, 10));
        } catch (error) {
            console.error("Please try again later", error);
        }
    };
    
    useEffect(() => {
        getdata()

    }, [])




    return (
        <>
            <div className="women-slider-container">
                <Slider {...settings}>
                    <div className="slider-item">
                        <img
                            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg"
                            alt="Slide 1"
                        />
                    </div>
                    <div className="slider-item">
                        <img
                            src="https://assets.myntassets.com/f_webp,w_415,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg"
                            alt="Slide 2"
                        />
                    </div>
                    <div className="slider-item">
                        <img
                            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg"
                            alt="Slide 3"
                        />
                    </div>
                    <div className="slider-item">
                        <img
                            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg"
                            alt="Slide 3"
                        />
                    </div>
                </Slider>
            </div>

            {/*               slider2                  */}

            



           
            {/* -------group images---------- */}
            <div className="image_container">
                <div className='shop_imag'>
                    <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/FEBRUARY/27/q1Pw5Wmh_38a4fd859b0e467bb6064cd146e13d47.jpg" />
                </div>
                <div className='images_large'>
                    {images.map((item) => (
                        <div className="product-card" key={item.id}>
                        <img src={item.image} alt="Product" height={225} />
                        <div className="product-info">
                        <p>{item.title.length > 15 ? item.title.substring(0, 15) + "..." : item.title}</p>
                            <p>30-70% off</p>
                            <span>Shop Now</span>
                        </div>
                    </div>
                    
                    ))}

                </div>

                <footer>

                   
                        
                    <div class="fotter">
                        <div class="box1">
                            <b><p class="Online">ONLINE SHOPPING</p></b>
                            <a href="#"><li>Home</li></a>
                            <a href="#"><li>Men</li></a>
                            <a href="#"><li>Women</li></a>
                            <a href="#"><li>Kids</li></a>
                            {/* <a href="#"><li>Beauty</li></a> */}
                           
                        </div>
                        <div class="box2">
                            <b> <p>CUSTOMER POLICIS</p></b>
                            <a href="#"><li>Contact us</li></a>
                            <a href="#"><li>FAQ</li></a>
                            <a href="#"><li>T &C </li></a>
                            <a href="#"><li>Terms of use</li></a>
                            <a href="#"><li>Track order</li></a>
                            <a href="#"><li>Shipping</li></a>
                            <a href="#"><li>Cancellation </li></a>
                            <a href="#"><li>Returns privacy</li></a>
                            <a href="#"><li>Grivences</li></a>

                        </div>
                        <div class="box3">
                            <b><p>EXPERIENCE MYNTRA APP ON MOBILE</p></b>
                            <a href="#"><img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" /></a>
                            <a href="#"><img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" /></a>
                        </div>
                        <div class="box4">
                            <span>
                                <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" />
                                <p>100% ORIGINAL guarantee for<br /> all products at myntra.com</p>
                            </span>
                            <br />
                            <span>
                                <img src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png" />
                                <p>Return within 14days of <br />receiving your order</p>
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        </>

    )
}

export default Hero