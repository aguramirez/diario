export const App = ({ title }) => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <h1 className="logo">El Valor Jujuy</h1>
          <input type="checkbox" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li><a href="">Ahora</a></li>
            <li><a href="">Jujuy</a></li>
            <li><a href="">Argentina</a></li>
            <li><a href="">Mundo</a></li>
            <li><a href="">Mercados</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}