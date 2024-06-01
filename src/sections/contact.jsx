import CountryImage from '/contact-country-image.svg'
import EmailImage from '/contact-email-image.svg'
import SupportImage from '/contact-support-image.svg'
import Ellipse from '/contact-ellipse.svg'

function Contact() {

    return (
      <div className="contact" id='contact'>
        <div className="contact-form">
          <p className='contact-titles'>Leave us your info</p>
          <form action="#" method="get">
            <label htmlFor="name"> Your Full Name (Required)
              <input required type="text" id="name"/>
            </label>
            <label htmlFor="email"> Your Email (Required)
              <input required type="email" id="email"/>
            </label>
            <label htmlFor="subject"> Subject
              <input type="text" id="subject"/>
            </label>
            <label htmlFor="message">Your Message
              <textarea name="message" id="message"></textarea>
            </label>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>

        <div className="contact-info">

          <div className="contact-all-info-block">
            <p className='contact-titles'>Contact information</p> 
            <div className="contact-blocks">
            <div className="contact-info-block">
              <div className="contact-info-image-block">
                <img src={Ellipse} alt="" /><img className='contact-info-icon' src={CountryImage} alt="" />
              </div>
              <div className="contact-info-main">
                <div className="contact-info-main-block">
                  <p className='contact-info-title'>Country:</p>
                  <p className='contact-info-description'>Bangladesh</p>
                </div>
                <div className="contact-info-main-block">
                  <p className='contact-info-title'>City:</p>
                  <p className='contact-info-description'>Dhaka</p>
                </div>
                <div className="contact-info-main-block">
                  <p className='contact-info-title'>Streat:</p>
                  <p className='contact-info-description'>35 vhatara, Badda</p>
                </div>
              </div>
            </div>

            <div className="contact-info-block">
              <div className="contact-info-image-block">
                <img src={Ellipse} alt="" /><img className='contact-info-icon' src={EmailImage} alt="" />
              </div>
              <div className="contact-info-main">
                <div className="contact-info-main-block">
                  <p className='contact-info-title'>Email:</p>
                  <p className='contact-info-description'>youremail@gmail.com</p>
                </div>
                <div className="contact-info-main-block">
                  <p className='contact-info-title'>Skype:</p>
                  <p className='contact-info-description'>@yourusername</p>
                </div>
                <div className="contact-info-main-block">
                  <p className='contact-info-title'>Telegram:</p>
                  <p className='contact-info-description'>@yourusername</p>
                </div>
              </div>
            </div>

            <div className="contact-info-block">
              <div className="contact-info-image-block">
                <img src={Ellipse} alt="" /><img className='contact-info-icon' src={SupportImage} alt="" />
              </div>
              <div className="contact-info-main">
                <div className="contact-info-main-block">
                  <p className='contact-info-title'>Support services:</p>
                  <p className='contact-info-description'>15369</p>
                </div>
                <div className="contact-info-main-block">
                  <p className='contact-info-title'>Office:</p>
                  <p className='contact-info-description'>+58 (021)356 587 235</p>
                </div>
                <div className="contact-info-main-block">
                  <p className='contact-info-title'>Personal:</p>
                  <p className='contact-info-description'>+58 (021)356 587 235</p>
                </div>
                </div>
              </div>
            </div>

</div>
        </div>    
      </div>
    );
  }
  
  export default Contact;