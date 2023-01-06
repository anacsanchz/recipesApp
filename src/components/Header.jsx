import './styles/header.css';

const Header = () => (
  <div className="header">
    <div>
      <span className="appName">RecipesApp</span>
    </div>
    <div className="headerMenu">
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Categories</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
      </ul>
      <div className="searchForm">
        <button>Search</button>
      </div>
    </div>
  </div>
);

export default Header;
