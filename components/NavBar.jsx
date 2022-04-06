import Image from "next/image";
const NavBar = () => {
  return (
    <header className="header-container">
      <Image
        src="/images/lavantgout2.svg"
        className="navbar-logo-img"
        alt="L'Avant Gout Épicerie Logo"
        layout="intrinsic"
        height={100}
        width={400}
        priority={true}
      />

      <style jsx global>{`
        .header-container {
          width: 100%;
          max-height: 100px;
          color: #3f523a;
          background-color: transparent;
          text-align: center;
          z-index: 999;
          position: sticky;
        }

        .navbar-logo-img {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
      `}</style>
    </header>
  );
};
export default NavBar;
