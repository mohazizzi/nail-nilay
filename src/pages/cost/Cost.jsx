import "./cost.css";

// components
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Cost = () => {
  return (
    <div className="over-flow-hiden">
      <Navbar />
      <main>
        <h1 className="cost-title">خدمات ارائه شده در سالن</h1>
        <div className="costs">
          <div className="costs_item">
            <div className="costs_item_group">
              <h3>خدمات...</h3>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربر
              </p>
            </div>
            <div className="costs_item_group">
              <h3>خدمات...</h3>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان
              </p>
            </div>
            <div className="costs_item_group">
              <h3>خدمات...</h3>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطر
              </p>
            </div>
          </div>
        </div>
        <h1 className="cost-title">سوالات متداول</h1>
        <div className="costs">
          <div className="costs_item">
            <div className="costs_item_group">
              <h3>سوال ۱...</h3>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربر
              </p>
            </div>
            <div className="costs_item_group">
              <h3>سوال ۲...</h3>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان
              </p>
            </div>
            <div className="costs_item_group">
              <h3>سوال ۴ ...</h3>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطر
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cost;
