// client/src/components/core/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-primary shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Logo PT CIMT" className="w-8 h-8" />
          <span className="font-semibold text-lg text-black">CIMT</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-12 text-black font-regular">
          <Link to="/">Beranda</Link>
          <Link to="/about-us">Tentang Kami</Link>
          <Link to="/products">Produk</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Kontak</Link>
          <Link to="/Resevation">Reservasi</Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          <img src="/icons/menu.svg" alt="Menu" width={24} height={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden shadow-md mt-2 pb-4 px-4">
          <ul className="space-y-2 text-black font-regular">
            <li>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={() => setMobileMenuOpen(false)}>
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={() => setMobileMenuOpen(false)}>
                Produk
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
