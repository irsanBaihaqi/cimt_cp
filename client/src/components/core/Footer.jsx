// client/src/components/core/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>
          © 2025 PT Cindo International Marine Trading. All rights reserved.
        </p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-blue-400">
            Facebook
          </a>
          <a href="#" className="hover:text-blue-400">
            Instagram
          </a>
          <a href="#" className="hover:text-blue-400">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
