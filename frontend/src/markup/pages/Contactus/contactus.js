import React from 'react'
import './bootstrap.min.css'
import './contact.css'


function contactus() {
  return (
    <div> 
          <div class="fcf-body">

                <div id="fcf-form"> 
                <h3 class="fcf-h3">Contact us</h3>

            <form id="fcf-form-id" class="fcf-form-class" method="post" action=""> 

              <div class="fcf-form-group">
              <label for="Name" class="fcf-label">Your name</label>
              <div class="fcf-input-group">
                  <input type="text" id="Name" name="Name" class="fcf-form-control" required />
              </div>
              </div>

              <div class="fcf-form-group">
              <label for="Email" class="fcf-label">Your email address</label>
              <div class="fcf-input-group">
                  <input type="email" id="Email" name="Email" class="fcf-form-control" required/>
              </div>
              </div>

              <div class="fcf-form-group">
              <label for="Message" class="fcf-label">Your message</label>
              <div class="fcf-input-group">
                  <textarea id="Message" name="Message" class="fcf-form-control" rows="6" maxlength="3000" required></textarea>
              </div>
              </div>

              <div class="fcf-form-group">
              <button type="submit" id="fcf-button" class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send Message</button>
              </div>
           </form>
           </div>
           </div>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.530146995063!2d38.76850219384761!3d9.015307311525513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85d56b785eeb%3A0xbf8230b3b1c2c8af!2zU0FTIFBoYXJtYWNpZXMg4Yiz4Yi1IOGImOGLteGIg-GKkuGJtSDhiaThibU!5e0!3m2!1sam!2set!4v1695552216746!5m2!1sam!2set" width="600" height="450"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
  )
}

export default contactus;