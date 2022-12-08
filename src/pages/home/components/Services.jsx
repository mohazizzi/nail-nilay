import servicesImage from "../../../assets/image/services.jpg";

// images data
import data from "../../../data/data";
const laminationImages = data.laminationImages;
const plantingImages = data.plantingImages;

const Services = () => {
  return (
    <div className="seervices">
      <div className="seervices_title">
        <div className="seervices_title_content">
          <img src={servicesImage} alt="ناخن کاری" />
          <div className="seervices_title_content_text">
            <p>قشنگی خانوم سلام</p>
            <p>
              خیلی خوشحالم که توام به زیبایی و آراستگی اهمیت میدی اگر موافق باشی
              توی تصمیمت کمکت کنم
            </p>
            <ul>
              <li>اگه سالی یه بار خدمات انجام میدی ناخنت رو ژلیش کن</li>
              <li>
                اگر فرم ناخنت رو دوس داری و میخوای یه کار مقاوم تر از ژلیش داشته
                باشی لمینت
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="seervices_body">
          <div className="seervices_body_item">
            <h3 className="seervices_body_item_title">خدمات لمینیت</h3>
            <div className="seervices_body_item_gallery">
              {laminationImages.map((image, index) => {
                return (
                  <div
                    className="seervices_body_item_gallery_item"
                    key={image.index}
                  >
                    <img src={image.src} alt={image.alt} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="seervices_body_item">
            <h3 className="seervices_body_item_title">خدمات کاشت</h3>
            <div className="seervices_body_item_gallery">
              {plantingImages.map((image, index) => {
                return (
                  <div
                    className="seervices_body_item_gallery_item"
                    key={image.index}
                  >
                    <img src={image.src} alt={image.alt} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
