import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="row-center-between">
          <Image
            src="/images/footer-logo.png"
            alt="footer logo"
            width={244} // Adjust width as necessary
            height={50} // Adjust height as necessary
          />
          <div className="footer-menu row-center-unset">
            <Link href="/">Home</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/manufacturers">Manufacturers</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="footer-second-menu row-center-end">
          <div className="row-center-unset">
            <Image
              src="/images/call.png"
              alt="call"
              width={20} // Adjust width as necessary
              height={20} // Adjust height as necessary
            />
            <p>+1 (469) 283-2440</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="footer-end row-center-between">
          <p>Copyright © 2024 GID Holdings LLC, All Rights Reserved.</p>
          <div className="row-center-unset">
            <Link href="#">Terms & Conditions</Link>
            <div></div>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;