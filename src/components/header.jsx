import './header.css';

function Header() {
  return (
    <div>
    <div className="headerContainer">
      <h1 className="headerTitle">Will Westwood</h1>
      <div className="headerBTNHolder">
        <p className="headerBTN">Home</p>
        <p className="headerBTN">About</p>
        <p className="headerBTN">Work</p>
        <p className="headerBTN">Contact</p>
      </div>
    </div>
    </div>
  );
}

export default Header;
