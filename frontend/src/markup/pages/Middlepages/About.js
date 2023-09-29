import React from "react";
import image1 from "../../../assets/template_assets/images/custom/vban1.jpg";
import image2 from "../../../assets/template_assets/images/custom/vban2.jpg";
function About() {
  return (
    <div>
      <section class="about-section">
        <div class="auto-container">
          <div class="row">
            <div class="col-lg-5">
              <div class="image-box">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <div class="year-experience" data-parallax='{"y": 30}'>
                  <strong>8+</strong> years <br />
                  Experience{" "}
                </div>
              </div>
            </div>
            <div class="col-lg-7 pl-lg-5">
              <div class="sec-title">
                <h1>Welcome to our Cake Ordering Website👋</h1>
                <h4>Indulge in the sweetest treats and order your favorite cakes online. Browse our wide selection and place your order today!</h4>
                <div class="text">
                  <p>We offer custom cakes for every occasion, made with the finest ingredients and personalized designs. Ordering is easy with our user-friendly online platform, and we provide reliable delivery straight to your doorstep. We also cater to different dietary needs, offering options like vegan, gluten-free, and sugar-free cakes.
                    
                  </p>
                  <p>
                  🎂We are passionate about creating delectable cakes that will delight your taste buds and make your 
                  celebrations extra special. Our talented bakers use only the finest ingredients to craft mouthwatering cakes in a variety of flavors and designs. From classic chocolate and vanilla to unique combinations like salted caramel and raspberry, we have something to satisfy every craving. Whether you're celebrating a birthday, wedding, or any other special occasion, our cakes are the perfect centerpiece. 
                  We also offer customization options, allowing you 
                  to add personalized messages or decorations. 
                  Ordering is a breeze with our convenient online 
                  platform, and we offer reliable delivery to ensure 
                  your cake arrives fresh and on time. 🎂
                  </p>
                </div>
                <div class="link-btn mt-40">
                  <a
                    href="about.html"
                    class="theme-btn btn-style-one style-two"
                  >
                    <span>
                      About Us <i class="flaticon-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
