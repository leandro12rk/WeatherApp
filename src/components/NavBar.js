import ButtonTheme from "./ButtonTheme";

export default function NavBar() {
  return (
    <nav className={`navBar`}>
      <h1 className="navBar-title title-page-name ">TEMPESTIA</h1>
      <ButtonTheme />
    </nav>
  );
}
