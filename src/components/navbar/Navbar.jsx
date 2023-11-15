import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>IT portfolio</span>
        <div className="social">
          <a href="#">
            <img src="/animated-portfolio/public/facebook.svg" alt="facebook" />
          </a>
          <a href="#">
            <img src="/animated-portfolio/public/in.svg" alt="linkedin" />
          </a>
          <a href="#">
            <img
              src="/animated-portfolio/public/instagram.svg"
              alt="instagram"
            />
          </a>
          <a href="#">
            <img src="/animated-portfolio/public/twitterX.svg" alt="twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
