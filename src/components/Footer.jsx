// import React from 'react'

// export default function Footer() {
//   return (
//     <div> <h3>This is footer</h3></div>
//   )
// }


// import React from "react";
// import "./style.css";

// export default function Footer() {
//   return <footer>This is footer</footer>;
// }



import React from 'react';
import { Link } from 'react-router-dom';
 import "./style.css";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">🛍 </h3>
            <p className="text-gray-300 mb-4">
              Your one-stop destination for quality products. We provide the best shopping experience with secure payments and fast delivery.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="./Cart" className="text-gray-300 hover:text-white transition-colors">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/Order" className="text-gray-300 hover:text-white transition-colors">
                  Orders
                </Link>
              </li>
              <li>
                <Link to="/Login" className="text-gray-300 hover:text-white transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 MERN Store. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
);
}
