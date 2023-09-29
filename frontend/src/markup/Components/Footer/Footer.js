import React from "react";

function Footer() {
  return (
    <div>
      <footer class="main-footer">
        <div class="upper-box">
          <div class="auto-container">
            <div class="row no-gutters">
              <div class="footer-info-box col-md-4 col-sm-6 col-xs-12">
                <div class="info-inner">
                  <div class="content">
                    <div class="icon">
                      <span class="flaticon-pin"></span>
                    </div>
                    <div class="text">
                    ፊጋ መብራት አልፉችሁ ወደ ፍርድ ቤት መንገድ..<br />  ሳስ ፉርማሲ ካለበት ህንፃ አጠገብ :: 
                    </div>
                  </div>
                </div>
              </div>

              <div class="footer-info-box col-md-4 col-sm-6 col-xs-12">
                <div class="info-inner">
                  <div class="content">
                    <div class="icon">
                      <span class="flaticon-email"></span>
                    </div>
                    <div class="text">
                      Email us : <br />{" "}
                      <a href="mailto:contact.Senagelalcha@yahoo.com">
                      Senagelalcha@yahoo.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="footer-info-box col-md-4 col-sm-6 col-xs-12">
                <div class="info-inner">
                  <div class="content">
                    <div class="icon">
                      <span class="flaticon-phone"></span>
                    </div>
                    <div class="text">
                      Call us on : <br />
                      <strong>+251 911940575</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="widgets-section">
          <div class="auto-container">
            <div class="widgets-inner-container">
              <div class="row clearfix">
                <div class="footer-column col-lg-4">
                  <div class="widget widget_about">
                    <div class="logo">
                      <a href="index.html">
                        <img src="assets/images/logo-two.png" alt="" />
                      </a>
                    </div>
                    <div class="text">
                    We offer customization options,
                     allowing you to add personalized messages or 
                     decorations. Ordering is a breeze with our 
                     convenient online platform, and we offer reliable
                      delivery
                     to ensure your cake arrives fresh and on time. 
                    </div>
                  </div>
                </div>

                <div class="footer-column col-lg-4">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="widget widget_links">
                        <h4 class="widget_title">Usefull Links</h4>
                        <div class="widget-content">
                          <ul class="list">
                            <li>
                              <a href="index.html">Home</a>
                            </li>
                            <li>
                              <a href="about.html">About Us</a>
                            </li>
                            <li>
                              <a href="#">Appointment</a>
                            </li>
                            <li>
                              <a href="">Testimonials</a>
                            </li>
                            <li>
                              <a href="">Contact Us</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="widget widget_links">
                        <h4 class="widget_title">Our Specials</h4>
                        <div class="widget-content">
                          <ul class="list">
                            <li>
                              <a href="#">Hyper realistic cakes</a>
                            </li>                

                            <li>
                              <a href="#">art</a>
                            </li>
                            <li>
                              <a href="#"> Dome Cake</a>
                            </li>
                            <li>
                              <a href="#">Yummy chocolate</a>
                            </li>
                            <li>
                              <a href="#">Diabetics cake</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="footer-column col-lg-4">
                  <div class="widget widget_newsletter">
                    <h4 class="widget_title">Newsletter</h4>
                    <div class="text">Get latest updates and offers.</div>
                    <div class="newsletter-form">
                      <form class="ajax-sub-form" method="post">
                        <div class="form-group">
                          <input
                            type="email"
                            placeholder="Enter your email"
                            id="subscription-email"
                          />
                          <button class="theme-btn" type="submit">
                            <span class="fas fa-paper-plane"></span>
                          </button>
                          <label
                            class="subscription-label"
                            for="subscription-email"
                          ></label>
                        </div>
                      </form>
                    </div>
                    <ul class="social-links">
                      <li>
                        <a href="https://www.tiktok.com/@lullicakedesigns?is_from_webapp=1&sender_device=pc">
                          <span class="fab fa-tiktok"></span>
                        </a>
                      </li>
                     
                      <li>
                        <a href="https://www.youtube.com/@lullicakedesigns">
                          <span class="fab fa-youtube"></span>
                        </a>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="auto-container">
          <div class="footer-bottom">
            <div class="copyright-text">
              © Copyright <a href="#">Lullicakedesigns</a> 2023 . All right reserved.
            </div>
            <div class="text">
              Created by <a href="https://natnaelgizawportfolio.vercel.app/">Betre</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
