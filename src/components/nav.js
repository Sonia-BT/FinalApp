import "./nav.css";
const Nav = () => {
  return (
    <div>
      <div className="header">
        <div className="navbar">
          <div className="ItemsRight_navbar">
            <div className="Item-right1">Sign Up</div>
            <div className="Item-right2">Login</div>
          </div>
          <div className="ItemsLeft_navbar">
            <div className="Items-left">
              <div className="Logo">Shortly</div>
              <div className="Item-left">Features</div>
              <div className="Item-left">Pricing</div>
              <div className="Item-left">Resources</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
