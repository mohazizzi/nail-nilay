import "./take-turn.css";

// components
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

// images
import whatsappLogo from "../../assets/image/whatsapp.png";
import telegramLogo from "../../assets/image/telegram.png";
import instagramLogo from "../../assets/image/instagram.png";
import gmailLogo from "../../assets/image/gmail.png";

const TakeTurn = () => {
  return (
    <div className="over-flow-hiden">
      <Navbar />
      <main>
        <div className="contact-title">
          <h1>راه های ارتباطی</h1>
          <p>
            برای گرفتن نوبت از طریق یکی از راه های ارتباطی زیر باما تماس بگیرید
          </p>
          <p>
            آدرس: بلوار معلم، انتهای بلوار سمیه، نبش کوچه چهار، سالن پل بلند
          </p>
        </div>
        <div className="contact">
          <div className="contact_info">
            <div className="contact_info_item">
              <p>۰۹۲۲۲۲۲۲۲۲۲</p>
              <img
                src={whatsappLogo}
                alt="لوگوی واتساپ"
                className="contact_info_item_image whatsapp"
              />
            </div>
            <div className="contact_info_item">
              <p>salon-telegram@</p>
              <img
                src={telegramLogo}
                alt="لوگوی تلگرام"
                className="contact_info_item_image"
              />
            </div>
            <div className="contact_info_item">
              <p>salon-instagram@</p>
              <img
                src={instagramLogo}
                alt="لوگوی اینستاگرام"
                className="contact_info_item_image"
              />
            </div>
            <div className="contact_info_item">
              <p>salon@gmail.com</p>
              <img
                src={gmailLogo}
                alt="لوگوی جیمیل"
                className="contact_info_item_image"
              />
            </div>
          </div>
          <div className="contact_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6300.251190426001!2d50.88385889012519!3d32.30725102798437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbef1ef09f8f81d%3A0xbc0b29369b99900d!2z2LPYp9mE2YYg2KLYsdin24zYtCDZiCDYstuM2KjYp9uM24wg2b7ZhCDYqNmE2YbYrw!5e0!3m2!1sen!2s!4v1670501021952!5m2!1sen!2s"
              width="500"
              height="350"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default TakeTurn;
