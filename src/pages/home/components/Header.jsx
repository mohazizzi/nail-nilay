import headerImage from "../../../assets/image/header.jpg";

const Header = () => {
  return (
    <header className="home-header">
      <div className="home-header_image">
        <img src={headerImage} alt="تصویر چند تابلو که روی دیوار هستند" />
      </div>
    </header>
  );
};

export default Header;
