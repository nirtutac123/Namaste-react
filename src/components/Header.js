const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHFEw0UHfi9LSK0QK5Dnh42SHlRezOZbFDQskXAxs&s"
    ></img>
    //{" "}
    <h1 id="Title" key="h2">
      // Food Villa //{" "}
    </h1>
  </a>
);

export const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
