import heartImage from "../../../assets/image/heart2.png";

const Information = () => {
  return (
    <div className="information">
      <div className="information_bg"></div>
      <img src={heartImage} alt="طرح قاب با قلمو" />
      <div className="information_content">
        <p>
          عرضی ندارم بانو
          <br />
          فقط یادت باشه امروز که دختری در آینده مادر دختری دیگری هستی
          <br /> و روزی می آید که مادربزرگ میشوی پس جدا از همه ی ناپاکی ها تو
          پاک بمان
        </p>
      </div>
    </div>
  );
};

export default Information;
