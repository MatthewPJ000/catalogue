import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar row-center-between">
      <Link className="navbar-left" href="/">
        <Image src="/images/logo.png" alt="logo" width={244} height={50} />
      </Link>
      <ul className="navbar-center row-center-unset">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/categories">Categories</Link>
        </li>
        <li>
          <Link href="/manufacturers">Manufacturers</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
      <div className="navbar-right row-center-unset">
        <Image src="/images/industrial.png" alt="GID logo" width={50} height={50} />
        <a href="tel:+14692832440">+1 (469) 283-2440</a>
      </div>
      <Image className="menu" src="/images/menu.png" alt="menu" width={30} height={30} />
    </nav>
  );
};

export default Navbar;