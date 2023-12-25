import Navbar from "./Navbar";

function Header() {
  return (
    <header className="w-full flex justify-evenly content-center bg-dark p-4">
      <h1 className="block px-10 font-secondary text-white text-2xl self-center">
        <span>CUEVAN</span>
        <span className="text-blue-300">ARG</span>
      </h1>
      <Navbar />
    </header>
  );
}

export default Header;
