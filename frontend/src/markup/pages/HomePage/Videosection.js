import React from "react";
import bannerImage from "../../../assets/template_assets/images/custom/banner/banner.jpg";
function Videosection() {
  return (
    <div>
      <section class="video-section">
        <div
          data-parallax='{"y": 50}'
          className="sec-bg"
          style={{
            backgroundImage: `url(${bannerImage})`,
          }}
        ></div>
        <div class="auto-container">
          <h4 className="text-white">Yummy chocolate to the Next Level</h4>
          <h1 className="text-white font-weight-bold">
          ሉሊስ ኬክ <br /> ዲዛይን 
          </h1>
          <div class="video-box">
            <div class="video-btn">
              <a
                href="https://www.youtube.com/shorts/ZKhoj94hilU"
                class="overlay-link lightbox-image video-fancybox ripple"
              >
                <i class="flaticon-play"></i>
              </a>
            </div>
            <div class="text">
              Watch intro video <br /> about us
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Videosection;
